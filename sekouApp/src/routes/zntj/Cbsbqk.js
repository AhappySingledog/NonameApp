import { SegmentedControl, Tabs, Toast } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { GridFill, MoreCharts } from "../../componets";
import "./cbsbqk.less";

function jsonTodate(data) {
    let y = data.getFullYear();
    let m = data.getMonth();
    let d = data.getDate();
    let date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
    return date;
}

export default connect(({ cbsbqk, loading }) => ({ ...cbsbqk }))(
    class Cbsbqk extends Component {
        state = {
            toDayShip: [],                  // 今日船舶
            json: [],                       // 传入chart图的数据
            title: null,                    // 柱形图外面的标题
        }
        componentDidMount() {
            Toast.loading('', 0);
            this.props.dispatch({
                type: 'cbsbqk/Query_ShipName',
                payload: ("STATISTICSDATE = '" + jsonTodate(new Date()) + "'")
            }).then(res => {
                this.setState({
                    toDayShip: (this.props.hbjsons[0].data).sort((a, b) => (Number(b.ENO) + Number(b.INO)) - (Number(a.ENO) + Number(a.INO)))
                }, () => {
                    let chartjson = [[], [], []];
                    if(this.state.toDayShip.length > 0){
                        chartjson[0].push(this.state.toDayShip[0].INO);
                        chartjson[1].push(this.state.toDayShip[0].ENO);
                        chartjson[2].push(this.state.toDayShip[0].STATISTICSDATE);
                    }
                    this.setState({ title: this.state.toDayShip.length > 0 ? this.state.toDayShip[0].SHIPAGENCYCODE : '无', json: chartjson })
                });
            });
        }

        onchange = (e) => {
            this.setState({ inex: e.nativeEvent.selectedSegmentIndex }, () => {
                const xzsj = {
                    0: "SHIPAGENCYCODE = '" + this.state.title + "' AND STATISTICSDATE = '" + jsonTodate(new Date()) + "'",
                    1: "SHIPAGENCYCODE = '" + this.state.title + "' AND STATISTICSDATE like '" + (new Date().getFullYear() + (new Date().getMonth() < 9 ? "0" + new Date().getMonth() + 1 : new Date().getMonth() + 1)) + "%'",
                };
                this.HandleAction(xzsj[this.state.inex]);
            })
        }

        handleChart(e) {
            this.HandleAction(" SHIPAGENCYCODE = '" + e['SHIPAGENCYCODE'] + "' AND STATISTICSDATE = '" + jsonTodate(new Date()) + "'");
        }

        HandleAction = (names) => {
            this.props.dispatch({
                type: 'cbsbqk/Query_ShipName',
                payload: names
            }).then(e => {
                let chartjson = [[], [], []];
                for (let o in this.props.hbjsons[0]['data']) {
                    chartjson[0].push(this.props.hbjsons[0]['data'][o]['INO']);
                    chartjson[1].push(this.props.hbjsons[0]['data'][o]['ENO']);
                    chartjson[2].push(this.props.hbjsons[0]['data'][o]['STATISTICSDATE']);
                };
                this.setState({ json: chartjson })
            });
        }

        render() {
            return (
                <GridFill header={
                    <div key="wc" className="zntj_dc">
                        <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
                            <SegmentedControl values={['今日', '本月']} selectedIndex={this.state.inex} onChange={this.onchange} />
                        </div>
                    </div>
                }>
                    <div>
                        <div className="boxS" />
                        <div className="cb">
                            <div className="cb_sp">今日船代申报船舶进境数量排名情况</div>
                            <div className="cb_cb">
                                {
                                    this.state.toDayShip.map((e, key) => {
                                        return <div className="cb_cb_box" key={key} onClick={() => this.handleChart(e)}>
                                            <div className="cb_cb_box_name">{e.SHIPAGENCYCODE}</div>
                                            <div className="cb_cb_box_num">
                                                进境数量:<div>{e.INO}</div>
                                                出境数量:<div>{e.ENO}</div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="boxS" />
                        <MoreCharts view={[{ name: 'y_chars1', tabname: this.state.title + '进出境数量环比情况' }]} list={this.state.json} groupData={"cbsbqk/showCharts"} index={this.state.index} />
                    </div>
                </GridFill>
            );
        }
    }
);
