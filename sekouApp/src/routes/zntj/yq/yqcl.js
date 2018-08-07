/** 智能统计---园区车辆 */

import ReactDOM from "react-dom";
import { DatePicker, List, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import { MoreCharts, Raingratio, Chart, GridFill } from "../../../componets";
import "./yqcl.less";

export default connect(({ yqcl, loading }) => ({ ...yqcl }))(
    class Yqcl extends Component {
        componentDidMount() { }
        state = {
            dataTime: new Date(Date.now()),
            index: 0,
            json: []
        }

        componentDidMount() {
            this.handleAction(' TRUNC(RECORDDATE) = TRUNC(SYSDATE) ')
            // this.showCharts(0);
        }
        onchange(e) {
            this.setState({ dataTime: e }, () => {
                let data = new Date(e);
                let y = data.getFullYear();
                let m = data.getMonth() + 1;
                let d = data.getDate();
                const date = '' + y + '/' + (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d);
                this.handleAction("TRUNC(RECORDDATE) = trunc(to_date('" + date + "' , 'YYYY/MM/DD'))")
            });
        }


        showCharts(e) {
            publish("yqcl/showCharts", e).then((res) => {
                let [data1, data2] = res[0];
                for (let i in this.refs) {
                    if (i.indexOf('z_') > -1) {
                        let chars = new Chart(ReactDOM.findDOMNode(this.refs[i]), data1);
                    } else {
                        let chars1 = new Chart(ReactDOM.findDOMNode(this.refs[i]), data2);
                    }
                }
                this.setState({ index: e })
            });
        }

        componentWillUnmount() {

        }


        onTabClick = (title, index) => {
            this.showCharts(index);
        }


        handleAction(where) {
            console.log(where)
            this.props.dispatch({
                type: 'yqcl/Query_Info',
                payload: {
                    where: where
                }
            }).then(e => {
                this.setState({ json: [this.props.jsons[0].data[0].I, this.props.jsons[0].data[0].E] })
            })
        }

        render() {
            let { datas } = this.props;
            return (
                <GridFill header={
                    <div className="yqcl_box">
                        <DatePicker mode="date" title="选择时间" value={this.state.dataTime} onChange={(e) => this.onchange(e)}>
                            <List.Item arrow="horizontal">时间</List.Item>
                        </DatePicker>
                    </div>
                }>
                    <div > <div className="boxS" />
                        <MoreCharts view={datas} groupData={"yqcl/showCharts"} list={this.state.json} index={this.state.index} />
                    </div>
                </GridFill>

            )
        }
    }
)