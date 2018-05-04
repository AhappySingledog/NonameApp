import { Tabs, SearchBar, Toast, PullToRefresh, ListView, Button, Picker, List } from "antd-mobile";
import { publish } from "../../core/arbiter";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from "dva";
import $ from 'jquery';
import "./app.less";
import "./action"


class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
            names: [],
            datas: [],
            loading: true,
            index: 1,       //上拉加载数据
            value: null,   //港口选择
            tablename: null, //查询的表名
        };
    }


    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        this.fecthData();
        setTimeout(() => {
            this.resa = this.state.datas;
            this.numss = true;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.resa),
                height: hei,
                refreshing: false,
                isLoading: false,
            });
        }, 1500);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.val !== null) {
            this.setState({ value: nextProps.val, index: 1, tablename: nextProps.tablename }, () => this.fecthData());
            setTimeout(() => {
                this.resa = this.state.datas;
                this.numss = true;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.resa),
                    refreshing: false,
                    isLoading: false,
                });
            }, 1500);
        } else {
            this.setState({ index: 1, tablename: nextProps.tablename }, () => this.fecthData());
            setTimeout(() => {
                this.resa = this.state.datas;
                this.numss = true;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.resa),
                    refreshing: false,
                    isLoading: false,
                });
            }, 1500);
        }
    }
    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    fecthData() {
        console.log(this.props.tablename);
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        Toast.hide();
        //查询数据请求，并且用cloneWithRows处理数据
        Promise.all([
            publish('getData', { svn: 'skhg_loader', tableName: this.state.tablename, data: { pageno: this.state.index, pagesize: 5, where: this.state.value ? "TERMINALCODE like '%" + this.state.value + "'" : "1=1" } }),
            publish('tableName_find')
        ]).then(res => {
            if (res[0][0].features.length > 0) {
                this.numss = true;
                let datas = [];
                res[0][0].features.map(x => datas.push(x.attributes));
                this.setState({
                    datas: datas,
                    names: res[1][0].features[0].table
                })
            } else {
                this.numss = false;
                Toast.fail('无更多的数据！', 1)
            }
        }).catch(err => {
            console.log(err)
        });

    }

    onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true, index: 1 }, () => this.fecthData());
        setTimeout(() => {
            this.resa = this.state.datas;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.resa),
                refreshing: false,
                isLoading: false,
            });
        }, 5000);
    };

    onEndReached = (event) => {
        this.setState({ index: this.state.index + 1 }, () => this.fecthData());
        setTimeout(() => {
            if (this.numss) {
                this.resa = [...this.resa, ...this.state.datas];
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.resa),
                    isLoading: true,
                });
            } else {
                this.setState({ isLoading: false, });
            }
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (<div key={`${sectionID}-${rowID}`} style={{ backgroundColor: '#F5F5F9', height: 8, borderTop: '1px solid #ECECED', borderBottom: '1px solid #ECECED', }} />);
        let { icon, type } = this.props;
        let { datas, names } = this.state;
        let index = this.state.datas.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) index = this.state.datas.length - 1;
            const obj = this.state.datas[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px', backgroundColor: 'white', }}>
                    <table key={rowID} className="zncx_table" >
                        <tbody>
                            {
                                this.state.datas.length > 1 ? Object.keys(obj).map((key, id) => {
                                    if (id + 0 && id < 7 && names[0][key]) {
                                        return (
                                            <tr key={id + type} style={{ color: "#8e8e8e" }}>
                                                <td></td>
                                                <td style={{ width: '50%' }}>{names ? names[0][key] : null}:</td>
                                                <td>{obj[key]}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    }
                                    if (id < 1) {
                                        return (
                                            <tr key={id + type} style={{ color: "#1890ff" }}>
                                                <td className="zncx_table_col_1"><div className="zncx_table_img"><img src={icon} alt="" /></div></td>
                                                <td>{names ? names[0][key] : null}:</td>
                                                <td>{obj[key]}</td>
                                                <td></td>
                                            </tr>
                                        );
                                    }
                                }) : null
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
                value: null,
                index: 0,
                tabo: [],
                datas: [],
                loading: true,
                data: [],
                dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
            }
        }

        componentDidMount() {
            if (this.state.index === 0) {
                this.setState({ index: 1 });

            }
        }

        //单列样式
        _renderRow(row, sectionId, rowId) {

        }

        handefind = (tab, index) => {
            this.setState({ index, value: null });
            // window.localStorage.setItem('mthzx_tabs_indx', index)
        }

        handeChange = (tab, index) => {
            this.setState({ index, value: null });
        }

        onChange = (value) => {
            this.setState({
                value,
            });
        }
        onScrollChange = (value) => {
        }

        render() {
            let { tabs, itemClick = () => { } } = this.props;
            let { index, datas, tabo = {} } = this.state;
            const seasons = [[{ label: 'SCT', value: 'SCT', }, { label: 'CCT', value: 'CCT', }, { label: 'MCT', value: 'MCT', }],];
            let items = [];
            if (index === 2) {
                items = [
                    <div key="valChange">
                        <Picker data={seasons} cascade={false} title="选择港口" extra="请选择(可选)" value={this.state.value} onChange={v => this.setState({ value: v })}>
                            <List.Item arrow="horizontal">港口选择</List.Item>
                        </Picker>
                    </div>
                ];
            }
            return (
                <Tabs
                    tabs={tabs.map(tab => ({ title: tab.title }))}
                    swipeable={true}
                    onChange={(tab, index, type) => this.handeChange(tab, index, type)}
                    onTabClick={(tab, index, type) => this.handefind(tab, index, type)}
                >
                    {tabs.map((tab, idsx) => {
                        let { cols = {}, icon, tip, type, tablename } = tab;
                        let keys = Object.keys(tabo);
                        return (
                            <div key={idsx} className="zncx">
                                <div className="zncx_bar">
                                    <SearchBar placeholder="请输入" onSubmit={value => this.handefind(value)} ref={ref => this.autoFocusInst = ref} />
                                </div>
                                {items}
                                <Demo icon={icon} type={type} index={index} tablename={tablename} val={idsx === index ? this.state.value : null} />
                                <div />
                            </div>
                        );
                    })}
                </Tabs>
            );
        }
    }
);
