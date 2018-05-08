import { Tabs, SearchBar, Toast, PullToRefresh, ListView, Picker, List, Modal, Button } from "antd-mobile";
import { publish } from "../../core/arbiter";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from "dva";
import $ from 'jquery';
import "./app.less";
import "./action"

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Tabos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: [],
            newHi: document.documentElement.clientHeight
        }
    }
    componentWillReceiveProps(nexProps) {
        this.setState({
            val: nexProps.val
        })
    }

    render() {
        let { val: [data = [], tabs = []] } = this.state;
        return (
            <div style={{ height: this.state.newHi - 296, width: '100%', overflow: 'scroll' }}>
                <table key="tabs" className="zncx_table" >
                    <tbody>
                        {
                            data.length > 0 ? Object.keys(tabs[0]['jzxzsxx']).map((key, id) => {
                                return (
                                    <tr key={id + key}>
                                        <td></td>
                                        <td className="zncx_datas">{tabs[0]['jzxzsxx'][key]}:</td>
                                        <td className="zncx_tabs">{data[0]['InnerList'][0][key]}</td>
                                        <td></td>
                                    </tr>
                                )
                            }) : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(({ zncx, loading }) => ({ ...zncx }))(
    class Mtcb extends Component {
        constructor(props) {
            super(props);
            this.state = {
                seasonsValue: null,
                pageSize: 0,
                dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
                refreshing: true,
                isLoading: true,        //是否显示加载
                height: document.documentElement.clientHeight,
                useBodyScroll: false,
                PageDisplayDate: [],   //页面展示数据
                PageTitleDate: {},     //页面标题数据
                count: 2,            //翻页
                tableName: 'V_IMAP_SCCT_BERTH', //表名
                tabsx: [],
                modal: false,
            }
        }

        componentDidMount() {
            this.setState({ pageSize: 0 });
            this.fecthData();
        };


        /** 若上拉加载数据，高度则添加下拉框 ？ */
        // componentDidUpdate() {
        //     if (this.state.useBodyScroll) {
        //         document.body.style.overflow = 'auto';
        //     } else {
        //         document.body.style.overflow = 'hidden';
        //     }
        // }

        /** 切换标题签 */
        handefind = (tab, index) => {
            this.setState({ pageSize: index, value: null, PageDisplayDate: [], PageTitleDate: {} }, () => this.fecthData());
        }

        /** 输入框查询 */
        handeViewfind = (val) => {
            let type = this.props.tabs[this.state.pageSize].type;
            this.props.dispatch({
                type: 'zncx/' + type,
                payload: {
                    num: val
                },
            });
            this.setState({ modal: true, })
            Toast.loading('加载中...', 30);
            setTimeout(() => {
                if (this.props.jzxxx.length > 0) {
                    Toast.hide();
                }
            }, 500);
        }

        onRefresh = () => {
            console.log("下拉一次");
            this.setState({ count: 2 }, () => this.fecthData());
        };

        /** 上拉事件 */
        onEndReached = (event) => {
            console.log("上拉一次");
            this.props.dispatch({
                type: 'zncx/fetch',
                payload: {
                    tablename: this.props.tabs[this.state.pageSize].tablename,
                    count: this.state.count,
                },
            });
            this.setState({ count: this.state.count + 1 }, () => setTimeout(() => {
                if (this.props.list[0].length > 0) {
                    this.resa = [...this.resa, ...this.props.list[0]];
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.resa),
                        isLoading: true,
                        PageDisplayDate: this.props.list[0],
                    });
                } else {
                    Toast.fail('没有多余的数据了！', 1);
                    this.setState({ isLoading: false, });
                }
            }, 1000));
        }
        /** 回滚 */
        fecthData() {
            this.resa = {};
            const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
            this.props.dispatch({
                type: 'zncx/fetch',
                payload: {
                    tablename: this.props.tabs[this.state.pageSize].tablename,
                    count: 1,
                },
            }, setTimeout(() => {
                this.resa = this.props.list[0];         //支持旧数据
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.resa),        //分类
                    height: hei,
                    refreshing: false,
                    isLoading: true,
                    PageDisplayDate: this.props.list[0],
                    PageTitleDate: this.props.list[1][0][this.props.tabs[this.state.pageSize].type]
                });
            }, 1000));
        }

        onWrapTouchStart = (e) => {
            // fix touch to scroll background page on iOS
            if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
                return;
            }
            const pNode = closest(e.target, '.am-modal-content');
            if (!pNode) {
                e.preventDefault();
            }
        }
        render() {
            let items = [];
            let { tabs, itemClick = () => { }, list = [] } = this.props;
            let { PageDisplayDate, PageTitleDate, pageSize } = this.state;
            let index = PageDisplayDate.length - 1;
            const separator = (sectionID, rowID) => (<div key={`${sectionID}-${rowID}`} style={{ backgroundColor: '#F5F5F9', height: 8, borderTop: '1px solid #ECECED', borderBottom: '1px solid #ECECED', }} />);
            const seasons = [[{ label: 'SCT', value: 'SCT', }, { label: 'CCT', value: 'CCT', }, { label: 'MCT', value: 'MCT', }]];
            const row = (rowData, sectionID, rowID) => {
                if (index < 0) index = PageDisplayDate.length - 1;
                const obj = PageDisplayDate[index--];
                return (
                    <div key={rowID} style={{ padding: '0 15px', backgroundColor: 'white', }}>
                        <table key={rowID} className="zncx_table" >
                            <tbody>
                                {
                                    Object.keys(PageTitleDate).map((key, id) => {
                                        if (id + 0 && id < 5 && PageTitleDate) {
                                            return (
                                                <tr key={id + key} style={{ color: "#8e8e8e" }}>
                                                    <td></td>
                                                    <td style={{ width: '50%' }}>{PageTitleDate[key]}:</td>
                                                    <td>{obj[key]}</td>
                                                    <td></td>
                                                </tr>
                                            )
                                        }
                                        if (id < 1) {
                                            return (
                                                <tr key={id + key} style={{ color: "#1890ff" }}>
                                                    <td className="zncx_table_col_1"><div className="zncx_table_img"><img src={tabs[this.state.pageSize].icon} alt="" /></div></td>
                                                    <td>{PageTitleDate[key]}:</td>
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
            if (pageSize === 2) {
                items = [
                    <div key="valChange">
                        <Picker data={seasons} cascade={false} title="选择港口" extra="请选择(可选)" value={this.state.seasonsValue} onChange={v => this.setState({ seasonsValue: v })}>
                            <List.Item arrow="horizontal">港口选择</List.Item>
                        </Picker>
                    </div>
                ];
            }
            return (
                <Tabs
                    tabs={tabs.map(tab => ({ title: tab.title }))}
                    swipeable={true}
                    initialPage={0}
                    prerenderingSiblingsNumber={0}
                    onChange={null}
                    onTabClick={(tab, index, type) => this.handefind(tab, index, type)}
                >
                    {tabs.map((tab, idsx) => {
                        let { icon, tip, type, tablename } = tab;
                        return (
                            <div key={idsx} className="zncx">
                                <div className="zncx_bar">
                                    <SearchBar placeholder="请输入" onSubmit={value => this.handeViewfind(value)} ref={ref => this.autoFocusInst = ref} />
                                </div>
                                {items}
                                <ListView
                                    key={this.state.useBodyScroll}
                                    ref={el => this.lv = el}
                                    dataSource={this.state.dataSource}
                                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}> {this.state.isLoading ? '加载中...' : '暂无更多数据'} </div>)}
                                    renderRow={row}
                                    renderSeparator={separator}
                                    useBodyScroll={this.state.useBodyScroll}
                                    style={{ height: this.state.height, border: '1px solid #ddd', margin: '5px 0', }}
                                    pullToRefresh={<PullToRefresh refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
                                    onEndReached={this.onEndReached}
                                    pageSize={5}
                                />
                                <Modal
                                    popup
                                    visible={this.state.modal}
                                    transparent
                                    maskClosable={false}
                                    onClose={() => this.setState({ modal: false })}
                                    title="集装箱详情"
                                    footer={[{ text: '关闭', onPress: () => { this.setState({ modal: false }) } }]}
                                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                                    animationType="slide-up"
                                >
                                    <Tabos val={this.props.jzxxx.length > 0 ? this.props.jzxxx : null} />
                                </Modal>
                                <div />
                            </div>
                        );
                    })}
                </Tabs>
            );
        }
    }
);
