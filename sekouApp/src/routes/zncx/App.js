import { Tabs, SearchBar, Toast, PullToRefresh, ListView, Picker, List, Modal, Button, SegmentedControl, Accordion } from "antd-mobile";
import { publish } from "../../core/arbiter";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from "dva";
import $ from 'jquery';
import "./app.less";
import "./action"

const AccordionPanel = Accordion.Panel;

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

/** 详情 */
class Tabos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: [],
            newHi: document.documentElement.clientHeight
        }
    }
    componentDidMount() {
        this.setState({
            val: this.props.val || []
        })
    }
    render() {
        let { val = [] } = this.state;
        return (
            <div style={{ height: this.state.newHi - 246, width: '100%', overflow: 'scroll' }}>
                <table key="tabs" className="zncx_table" >
                    <tbody>
                        {
                            val.length > 0 ? val.map((key, ab) => {
                                return (
                                    <tr key={"xq" + ab}>
                                        <td></td>
                                        <td className="zncx_datas">{key['key']}</td>
                                        <td className="zncx_tabs">{key['value']}</td>
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
                modal: false,
            }
        }

        // componentDidMount() {
        //     let id = document.location.hash;
        //     console.log(document.location);
        //     if (id.indexOf('userid') > 0) {
        //         this.setState({ pageSize: 0 });
        //         this.fecthData();
        //     } else {
        //         Toast.fail("您未登入系统，无法正常操作！", 0)
        //     }
        // };

        /** 切换标题签 */
        handefind = (tab, index) => {
            $('#IMO').val(null)
            $('#hc').val(null)
            this.props.dispatch({
                type: 'zncx/clear',
            });
            if (index !== 3) {
                Toast.loading('加载中...', 30);
                this.resa = {};
                this.setState({
                    pageSize: index,
                    value: null,
                    PageDisplayDate: [],
                    PageTitleDate: {},
                    refreshing: false,
                    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                }, () => this.fecthData());
            } else {
                Toast.fail('正在通宵开发', 2)
                this.setState({ pageSize: index, value: null, PageDisplayDate: [], PageTitleDate: {} });
            }
        }

        /** 船舶输入框条件查询 */
        handeFindxx = () => {
            if ($('#IMO').val() !== "" || $('#hc').val() !== "") {
                let type = this.props.tabs[this.state.pageSize].type;
                console.log(type);
                Toast.loading('请稍后...', 0);
                this.props.dispatch({
                    type: 'zncx/' + type,
                    payload: {
                        mt: this.seasonsValue || 'SCT',
                        imo: $('#IMO').val(),
                        hc: $('#hc').val(),
                    },
                }).then(e => {
                    if (this.props.newJson.length > 0) {
                        this.setState({ modal: true })
                    }
                });
            } else {
                Toast.fail('查询失败，请重新检查查询条件', 2);
            }
        }

        /** 集装箱(含历史轨迹的)输入框查询 */
        handeViewfind = (val) => {
            let type = this.props.tabs[this.state.pageSize].type;
            Toast.loading('请稍后...', 0);
            this.props.dispatch({
                type: 'zncx/' + type,
                payload: {
                    num: val
                },
            }).then(e => {
                if (this.props.newJson.length > 0 && this.state.pageSize !== 1) {
                    this.setState({ modal: true })
                }
            });
        }

        /** 下拉 */
        onRefresh = () => {
            console.log("123");
            this.setState({ count: 2 }, () => this.fecthData());
        };

        /** 上拉事件 */
        onEndReached = (event) => {
            this.setState({ isLoading: true })
            this.props.dispatch({
                type: 'zncx/fetch',
                payload: {
                    tablename: this.props.tabs[this.state.pageSize].tablename,
                    count: this.state.count,
                },
            }).then(e => {
                this.setState({ count: this.state.count + 1 });
                if (this.props.list.length > 0) {
                    this.resa = [...this.resa, ...this.props.list[0]];
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.resa),
                        isLoading: false,
                        PageDisplayDate: this.props.list[0],
                    });
                }
            });
        }
        /** 回滚 */
        fecthData() {
            const hei = document.documentElement.clientHeight - 5;
            this.props.dispatch({
                type: 'zncx/fetch',
                payload: {
                    tablename: this.props.tabs[this.state.pageSize].tablename,
                    count: 1,
                },
            }).then(e => {
                if (this.props.list.length > 0) {
                    this.resa = this.props.list[0];         //支持旧数据
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.resa),        //分类
                        height: hei,
                        refreshing: false,
                        isLoading: true,
                        refreshing: false,
                        PageDisplayDate: this.props.list[0],
                        PageTitleDate: this.props.list[1][0][this.props.tabs[this.state.pageSize].type]
                    });
                }
            });
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
            const row = (rowData, sectionID, rowID) => {
                if (index < 0) index = PageDisplayDate.length - 1;
                const obj = PageDisplayDate[index--];
                return (
                    <div key={rowID} className="zncx_table">
                        <div className="zncx_table_img">  <img src={tabs[this.state.pageSize].icon} /> </div>
                        <div className="zncx_table_view">
                            {
                                PageDisplayDate.length > 0 ? Object.keys(PageTitleDate).map((key, id) => {
                                    if (id < 5) {
                                        return (
                                            <div key={id + key} className={id === 0 ? "zncx_views" : "zncx_view"}>
                                                <div className="zncxTop">{PageTitleDate[key]} :</div>
                                                <div>{obj[key]}</div>
                                            </div>
                                        )
                                    }
                                }) : <div />
                            }
                        </div>
                    </div>
                );
            };
            if (pageSize === 0) {
                items = [
                    <div key="zncx_Search">
                        <div key="valChange" style={{ margin: 5 }}>
                            <SegmentedControl values={['SCT', 'CCT', 'MCT']} onValueChange={e => { this.seasonsValue = e }} />
                        </div>
                        <div className="zncxSea">
                            <input className="zncxSea_left" type="text" id="IMO" placeholder="请输入IMO编号" type="search" />
                            <input className="zncxSea_right" type="text" id="hc" placeholder="请输入商业航次号" type="search" />
                            <Button style={{ height: '100%' }} type="primary" size="small" inline onClick={this.handeFindxx}>查询</Button>
                        </div>
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
                    </div>
                ]
            }
            if (pageSize === 1) {
                items = [
                    <div key="valChanges">
                        <div className="zncx_bar">
                            <SearchBar placeholder="请输入箱号" onSubmit={value => this.handeViewfind(value)} ref={ref => this.autoFocusInst = ref} />
                        </div>
                        {
                            this.props.newJson.length > 0 ? <div key="td_id" style={{ padding: '0 15px', backgroundColor: '#F7F7F7', marginTop: 10, marginBottom: 10 }}>
                                <Accordion accordion openAnimation={{}} className="my-accordion">
                                    {
                                        this.props.newJson.map((a, ab) => {
                                            return (
                                                <AccordionPanel key={ab} header={"操作时间：" + a[3]['value']}>
                                                    <List className="my-list">
                                                        {
                                                            a.map((key, id) => {
                                                                if (id < 1) {
                                                                    return (
                                                                        <List.Item key={id}>
                                                                            <div style={{ color: "#1890ff" }} ><img className="imgss" src={tabs[this.state.pageSize].icon} alt="" />{key['key']}</div>
                                                                            <div style={{ color: "#1890ff" }} >{key['value']}</div>
                                                                        </List.Item>
                                                                    )
                                                                }
                                                                if (id > 1) {
                                                                    return (
                                                                        <List.Item key={id}>
                                                                            <div>{key['key']}</div>
                                                                            <div>{key['value']}</div>
                                                                        </List.Item>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </List>
                                                </AccordionPanel>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div> : <div></div>
                        }
                    </div>
                ]
            }
            if (pageSize === 2) {
                items = [
                    <div key="valChanges">
                        <div className="zncx_bar">
                            <SearchBar placeholder="请输入箱号" onSubmit={value => this.handeViewfind(value)} ref={ref => this.autoFocusInst = ref} />
                        </div>
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
                    </div>
                ];
            }
            return (
                <Tabs
                    tabs={tabs.map(tab => ({ title: tab.title }))}
                    swipeable={false}
                    initialPage={0}
                    prerenderingSiblingsNumber={0}
                    onChange={null}
                    onTabClick={(tab, index, type) => this.handefind(tab, index, type)}
                >
                    {tabs.map((tab, idsx) => {
                        let { icon, tip, type, tablename } = tab;
                        return (
                            <div key={idsx} className="zncx">
                                {items}
                                <Modal
                                    popup
                                    visible={this.state.modal}
                                    transparent
                                    maskClosable={false}
                                    // title="查询详情"
                                    footer={[{ text: '关闭', onPress: () => { this.setState({ modal: false }) } }]}
                                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                                    animationType="slide-up"
                                >
                                    <Tabos val={this.props.newJson} />
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
