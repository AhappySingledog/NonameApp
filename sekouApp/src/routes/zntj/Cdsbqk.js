import { SegmentedControl, Toast, Picker, List } from "antd-mobile";
import { GridFill, MoreCharts } from "../../componets";
import React, { Component } from "react";
import { connect } from "dva";
import './action';
import "./cdsbqk.less";

function jsonTodate(e) {
    let data = new Date();
    let date = null;
    if (e == '0') {
        const y = data.getFullYear();
        const m = data.getMonth();
        const d = data.getDate();
        date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
    } else if (e == '1') {
        const y = data.getFullYear();
        const m = data.getMonth();
        date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1));
    } else if (e == '2') {
        const y = data.getFullYear();
        date = '' + y;
    }
    return date;
}

function jsonOldTodate(e) {
    let data = new Date();
    let date = null;
    if (e == '0') {
        const y = data.getFullYear();
        const m = data.getMonth();
        const d = data.getDate();
        date = '' + y + (m + 1 > 9 ? m : (m != 0 ? 12 : '0' + m)) + (d > 9 ? d : '0' + d);
    } else if (e == '1') {
        const y = data.getFullYear();
        const m = data.getMonth();
        date = '' + y + (m + 1 > 9 ? m : (m != 0 ? 12 : '0' + m));
    } else if (e == '2') {
        const y = data.getFullYear();
        date = '' + y;
    }
    return date;
}

export default connect(({ cdsbqk, loading }) => ({ ...cdsbqk }))(
    class Cdsbqk extends Component {
        state = {
            inex: 0,
            json: [],                       // 传入chart图的数据
            title: null,                    // 柱形图外面的标题
            pickerValue: [],
            gsmc: [],
        }
        componentDidMount() {
            Toast.loading('', 0);
            this.props.dispatch({
                type: 'cdsbqk/Query',
                payload: {
                    tabName: 'V_IMAP_ENTRYSHIPAGENCYBILL',
                    where: ('1=1'),
                }
            }).then(res => {
                let asz = [];
                for (let c in this.props.jsons[0].data) {
                    let adx = {};
                    adx['label'] = (this.props.jsons[0].data[c].SHIPAGENCYCODE).replace('代理有限公司', '').replace('有限公司深圳分公司', '').replace('国际货运有限公司', '')
                    adx['value'] = (this.props.jsons[0].data[c].SHIPAGENCYCODE).replace('代理有限公司', '').replace('有限公司深圳分公司', '').replace('国际货运有限公司', '')
                    asz.push(adx);
                };
                this.setState({ gsmc: asz, title: this.props.jsons[0].data[0]['SHIPAGENCYCODE'] });
                const payload = {
                    tabName: 'CMHIT_ENTRYSHIPAGENCYBILL',
                    where: ("SHIPAGENCYCODE = '" + this.state.title + "' AND STATISTICSDATE = '" + jsonTodate(this.state.inex) + "'"),
                };
                this.HandleAction(payload);
            });
        }

        /** 今日、本月、本年 */
        onchangeSe = (e) => {

            this.setState({ inex: e.nativeEvent.selectedSegmentIndex }, () => {
                const xzsj = {
                    0: "SHIPAGENCYCODE = '" + this.state.title + "' AND STATISTICSDATE = '" + jsonTodate(this.state.inex) + "' order by CARGOSTATUSCODE",
                    1: "SHIPAGENCYCODE = '" + this.state.title + "' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by CARGOSTATUSCODE",
                    2: "SHIPAGENCYCODE = '" + this.state.title + "' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by CARGOSTATUSCODE",
                };
                const payload = {
                    tabName: 'CMHIT_ENTRYSHIPAGENCYBILL',
                    where: xzsj[this.state.inex]
                };
                this.HandleAction(payload);
            })
        };

        /** 选择公司 */
        handleOn = (e) => {
            const xzsj = {
                0: "SHIPAGENCYCODE like '" + this.state.pickerValue[0] + "%' AND STATISTICSDATE = '" + jsonTodate(this.state.inex) + "' order by CARGOSTATUSCODE",
                1: "SHIPAGENCYCODE like '" + this.state.pickerValue[0] + "%' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by CARGOSTATUSCODE",
                2: "SHIPAGENCYCODE like '" + this.state.pickerValue[0] + "%' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by CARGOSTATUSCODE",
            };
            const payload = {
                tabName: 'CMHIT_ENTRYSHIPAGENCYBILL',
                where: xzsj[this.state.inex]
            };

            this.setState({ title: this.state.pickerValue }, () => this.HandleAction(payload));
        }

        /** model方法，并且传入chart值 */
        HandleAction = (names) => {
            Toast.loading('', 0);
            this.props.dispatch({
                type: 'cdsbqk/Query_sj',
                payload: names
            }).then(e => {
                console.log(this.props.hbjsons);
                if (this.props.hbjsons[0].data.length < 1) { Toast.offline('未查询到数据', 1.5) };
                let a = this.props.hbjsons[0]['data'];
                let gjyzw = [[], [], []];
                let zsjcjjzx = [[], [], []];
                let jckhw = [[], [], []];
                for (let o in a) {
                    if (a[o].CARGOSTATUSCODE === '国际转运货物') {
                        gjyzw[0].push(a[o]['INO']);
                        gjyzw[1].push(a[o]['ENO']);
                        gjyzw[2].push(a[o]['STATISTICSDATE']);
                    } else if (a[o].CARGOSTATUSCODE === '暂时进出境集装箱') {
                        zsjcjjzx[0].push(a[o]['INO']);
                        zsjcjjzx[1].push(a[o]['ENO']);
                        zsjcjjzx[2].push(a[o]['STATISTICSDATE']);
                    } else if (a[o].CARGOSTATUSCODE === '进出口货物') {
                        jckhw[0].push(a[o]['INO']);
                        jckhw[1].push(a[o]['ENO']);
                        jckhw[2].push(a[o]['STATISTICSDATE']);
                    }
                };
                this.setState({ json: [gjyzw, zsjcjjzx, jckhw] })
            });
        };


        render() {
            const { datas } = this.props;
            return (
                <GridFill header={
                    <div key="wc" className="zntj_dc">
                        <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
                            <SegmentedControl values={['今日', '本月', '本年']} selectedIndex={this.state.inex} onChange={this.onchangeSe} />
                        </div>
                        <Picker
                            data={[ this.state.gsmc]}
                            title="请选择公司"
                            extra={this.state.title}
                            cascade={false}
                            value={this.state.pickerValue}
                            onChange={v => this.setState({ pickerValue: v })}
                            onOk={v => {
                                this.setState({ pickerValue: v }, () => this.handleOn());
                            }}
                        >
                            <List.Item arrow="horizontal">请选择公司名称</List.Item>
                        </Picker>
                    </div>
                }>
                    <div>
                        <div className="boxS" />
                        <MoreCharts view={[
                            { name: datas[0].name, tabname: this.state.title + datas[0].tabname },
                            { name: datas[1].name, tabname: this.state.title + datas[1].tabname },
                            { name: datas[2].name, tabname: this.state.title + datas[2].tabname }
                        ]} list={this.state.json} groupData={"cdsbqk/showCharts"} index={this.state.index} />
                    </div>
                </GridFill>
            );
        }
    }
);
