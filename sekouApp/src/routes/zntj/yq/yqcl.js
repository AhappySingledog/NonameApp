/** 智能统计---园区车辆 */

import ReactDOM from "react-dom";
import { DatePicker, List, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import { MoreCharts, Raingratio, Chart ,GridFill} from "../../../componets";
import "./yqcl.less";

export default connect(({ yqcl, loading }) => ({ ...yqcl }))(
    class Yqcl extends Component {
        componentDidMount() { }
        state = {
            dataTime: new Date(Date.now()),
            index: 0,
        }

        componentDidMount() {
            this.showCharts(0);
        }
        onchange(e) {
            this.props.dispatch({
                type: "yqcl/select",
                payload: e
            });
            this.showCharts(e);
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
        render() {
            let { mothdatas = [], nowdata = {}, tabs, monthchart1, monthchart2 } = this.props;
            return (
                <GridFill header={
                    <div className="yqcl_box">
                        <DatePicker mode="date" title="选择时间" value={this.state.dataTime} onChange={(e) => this.onchange(e)}>
                            <List.Item arrow="horizontal">时间</List.Item>
                        </DatePicker>
                    </div>
                }>
                    <Tabs
                        tabs={tabs.map(tab => ({ title: tab.title }))}
                        swipeable={false}
                        initialPage={0}
                        onChange={(tab, index) => { }}
                        onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
                    >
                        {tabs.map((va, key) => {
                            return <div key={key}> <div className="boxS" /> <Raingratio val={va.data} />
                                <MoreCharts view={va.datas} groupData={"yqcl/showCharts"} index={this.state.index} />
                            </div>
                        })}

                    </Tabs>
                </GridFill>

            )
        }
    }
)