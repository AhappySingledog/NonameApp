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
                seasonsValue: 'SCT',
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

        componentDidMount() {
            this.setState({ pageSize: 0 });
            this.fecthData();
        };


        componentWillReceiveProps(nextProps) {
            if (nextProps.jzxxx.length > 0 && this.state.pageSize !== 1) {
                Toast.loading('请稍后...', 30);
                this.setState({ modal: true })
                Toast.hide();
            }
        }

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
                    pageSize: index, value: null, PageDisplayDate: [], PageTitleDate: {},
                    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                }, () => this.fecthData());
            } else {
                Toast.fail('正在通宵开发', 2)
                this.setState({ pageSize: index, value: null, PageDisplayDate: [], PageTitleDate: {} });
            }
        }

        /** 船舶输入框条件查询 */
        handeFindxx = () => {
            if ($('#IMO').val() !== "" || $('#hc').val() !== "" || this.state.seasonsValue !== 'null') {
                let type = this.props.tabs[this.state.pageSize].type;
                this.props.dispatch({
                    type: 'zncx/' + type,
                    payload: {
                        mt: this.state.seasonsValue,
                        imo: $('#IMO').val(),
                        hc: $('#hc').val(),
                    },
                });
            } else {
                Toast.fail('查询失败，请重新检查查询条件', 2);
            }
        }

        /** 集装箱(含历史轨迹的)输入框查询 */
        handeViewfind = (val) => {
            let type = this.props.tabs[this.state.pageSize].type;
            this.props.dispatch({
                type: 'zncx/' + type,
                payload: {
                    num: val
                },
            });
        }

        /** 下拉 */
        onRefresh = () => {
            this.setState({ count: 2 }, () => this.fecthData());
        };

        /** 上拉事件 */
        onEndReached = (event) => {
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
            const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
            this.props.dispatch({
                type: 'zncx/fetch',
                payload: {
                    tablename: this.props.tabs[this.state.pageSize].tablename,
                    count: 1,
                },
            });
            let num = 0;
            let abc = setInterval(()=>{
                num++;
                if (this.props.list.length > 0) {
                    this.resa = this.props.list[0];         //支持旧数据
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.resa),        //分类
                        height: hei,
                        refreshing: false,
                        isLoading: true,
                        PageDisplayDate: this.props.list[0],
                        PageTitleDate: this.props.list[1][0][this.props.tabs[this.state.pageSize].type]
                    });
                    clearInterval(abc);
                    Toast.hide();
                }else{
                    if(num === '10'){
                        clearInterval(abc);
                    }
                }
            },1000)
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
            if (pageSize === 0) {
                items = [
                    <div key="zncx_Search">
                        <div key="valChange" style={{ margin: 5 }}>
                            <SegmentedControl values={['SCT', 'CCT', 'MCT']} onChange={e => this.setState({ seasonsValue: e.nativeEvent.value })} />
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
                            this.props.jzxxx.length > 0 ? <div key="td_id" style={{ padding: '0 15px', backgroundColor: '#F7F7F7', marginTop: 10, marginBottom: 10 }}>
                                <Accordion accordion openAnimation={{}} className="my-accordion">
                                    {
                                        this.props.jzxxx.map((a, ab) => {
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
                                {items}
                                <Modal
                                    popup
                                    visible={this.state.modal}
                                    transparent
                                    maskClosable={false}
                                    title="查询详情"
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
