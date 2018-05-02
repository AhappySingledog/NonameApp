import { Tabs, SearchBar, Toast, PullToRefresh, ListView, Button } from "antd-mobile";
import { publish } from "../../core/arbiter";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from "dva";
import $ from 'jquery';
import "./app.less";


/** 从后台数据中需要获取多少条数据 */
const NUM_ROWS = 8;
let pageIndex = 0;


const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
}
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
            tabo: [],
            datas: [],
            loading: true,
            data: [],
            index: 5,
        };
    }


    fecthData(NUM_ROWS) {
        console.log(NUM_ROWS)
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        //查询数据请求，并且用cloneWithRows处理数据
        publish('webAction',
            {
                svn: 'skhg_loader_service', path: 'queryTableByWhere',
                data: {
                    tableName: 'V_IMAP_SCCT_BERTH', where: "TERMINALCODE= 'SCT' AND ROWNUM <= '" + NUM_ROWS + "'"
                }
            }).then(
                res => {
                    Toast.hide();
                    this.setState({
                        tabo: res[0].attr,
                        datas: res[0].data,
                    })
                }).catch(err => {
                    console.log(err)
                });
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        this.fecthData(NUM_ROWS);
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(genData()),
                height: hei,
                refreshing: false,
                isLoading: false,
            });
        }, 1500);
    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    onRefresh = () => {
        console.log('下拉');
        this.setState({ refreshing: true, isLoading: true });
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                isLoading: false,
            });
        }, 5000);
    };

    onEndReached = (event) => {
        console.log('上拉');
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ index: this.state.index + 5 });
        let json = this.fecthData(this.state.index)
        setTimeout(() => {
            this.rData = [...this.rData, ...genData(++pageIndex)];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let { icon, type } = this.props;
        let { datas, tabo = {} } = this.state;
        let keys = Object.keys(tabo);

        let index = this.state.datas.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = this.state.datas.length - 1;
            }
            const obj = this.state.datas[index--];
            return (
                <div key={rowID}
                    style={{
                        padding: '0 15px',
                        backgroundColor: 'white',
                    }}
                >
                    <table key={rowID} className="zncx_table" >
                        <tbody>
                            {
                                Object.keys(obj).map((key, id) => {
                                    if (id + 0 && id < 5) {
                                        return (
                                            <tr key={id + type} style={{ color: "#8e8e8e" }}>
                                                <td></td>
                                                <td style={{ width: '50%' }}>{tabo[key]}:</td>
                                                <td>{obj[key]}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    }
                                    if (id < 1) {
                                        return (
                                            <tr key={id + type} style={{ color: "#1890ff" }}>
                                                <td className="zncx_table_col_1"><div className="zncx_table_img"><img src={icon} alt="" /></div></td>
                                                <td>{tabo[key]}:</td>
                                                <td>{obj[key]}</td>
                                                <td></td>
                                            </tr>
                                        );
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        };
        return (<div>
            <ListView
                key={this.state.useBodyScroll}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                useBodyScroll={this.state.useBodyScroll}
                style={{
                    height: this.state.height,
                    border: '1px solid #ddd',
                    margin: '5px 0',
                }}
                pullToRefresh={<PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />}
                onEndReached={this.onEndReached}
                pageSize={5}
            />
        </div>);
    }
}

export default connect(({ zncx, loading }) => ({ tabs: zncx.tabs, itemClick: zncx.itemClick }))(
    class Mtcb extends Component {
        constructor(props) {
            super(props);
            this.state = {
                index: 0,
                tabo: [],
                datas: [],
                loading: true,
                data: [],
                dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
            }
        }

        componentDidMount() {
            $('#abc').hide();
            if (this.state.index === 0) {
                this.setState({ index: 1 });

            }
        }

        //单列样式
        _renderRow(row, sectionId, rowId) {

        }

        handefind = (tab, index) => {
            this.setState({ index });
            // window.localStorage.setItem('mthzx_tabs_indx', index)
        }

        handeChange = (tab, index) => {
            if (index === 3) {
                $('#abc').show();
            } else {
                $('#abc').hide();
            }
        }

        render() {
            let { tabs, itemClick = () => { } } = this.props;
            let { index, datas, tabo = {} } = this.state;
            return (
                <Tabs
                    tabs={tabs.map(tab => ({ title: tab.title }))}
                    swipeable={true}
                    onChange={(tab, index, type) => this.handeChange(tab, index, type)}
                    onTabClick={(tab, index, type) => this.handefind(tab, index, type)}
                >

                    {tabs.map((tab, idsx) => {
                        let { datas: items = [], cols = {}, icon, tip, type } = tab;
                        let keys = Object.keys(tabo);
                        return (
                            <div key={idsx} className="zncx">
                                <div className="zncx_bar">
                                    <SearchBar placeholder="请输入" onSubmit={value => this.handefind(value)} ref={ref => this.autoFocusInst = ref} />
                                </div>
                                <div id="abc">123</div>
                                <Demo icon={icon} type={type} />
                                <div />
                            </div>
                        );
                    })}
                </Tabs>
            );
        }
    }
);
