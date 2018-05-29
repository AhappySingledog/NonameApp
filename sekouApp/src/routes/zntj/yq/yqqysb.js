/** 园区企业申报 */
import { connect } from "dva";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { SegmentedControl, Tabs } from "antd-mobile";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { Chart, HeaderFill, LineChart, GridFill, SelectChart, MoreCharts } from "../../../componets";
import '../action';
import "./yqqysb.less";

export default connect(({ yqqysb, loading }) => ({ ...yqqysb }))(
    class Yqqysb extends Component {
        state = {
            index: 0,
        }

        componentDidMount() {
            this.showCharts(this.props.data[0]);
        }

        onchange(e) {
            this.setState({ index: e })
            this.props.dispatch({
                type: "yqqysb/select",
                payload: e
            });
            this.showCharts(e);
        }

        showCharts(e) {
            publish("yqqysb/showCharts", e).then((res) => {
                let [data1, data2] = res[0];
                for (let i in this.refs) {
                    if (i.indexOf('z_') > -1) {
                        let chars = new Chart(ReactDOM.findDOMNode(this.refs[i]), data1);
                    } else {
                        let chars1 = new Chart(ReactDOM.findDOMNode(this.refs[i]), data2);
                    }
                }
            });
        }

        render() {
            let { datas = [], data = {}, tabs } = this.props;
            return (
                <GridFill header={
                    <div key="wc" className="zntj_dc">
                        <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
                            <SegmentedControl values={['本年', '本月']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
                        </div>
                    </div>
                }>
                    <Tabs
                        tabs={tabs}
                        swipeable={false}
                        initialPage={0}
                        onChange={(tab, index) => { }}
                        onTabClick={(tab, index) => { this.showCharts(index) }}
                    >
                        {
                            tabs.map((val, key) => {
                                return <MoreCharts key={key} view={val.datas} groupData={"yqqysb/showCharts"} index={this.state.index} />
                            })
                        }
                    </Tabs>
                </GridFill>
            )
        }
    }
)