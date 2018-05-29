/** 进出口备案制清单 */
import { connect } from "dva";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { SegmentedControl } from "antd-mobile";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { Chart, HeaderFill, LineChart, GridFill, SelectChart } from "../../../componets";
import '../action';

import "./jckbazqd.less";

export default connect(({ jckbazqd, loading }) => ({ ...jckbazqd }))(
    class Jckbazqd extends React.Component {
        state = {
            year_datas: this.props.today,
        }
        componentDidMount() {
            this.showCharts(this.props.data);
        }
        showCharts(e) {
            publish("jckbazqd/showCharts", e).then((res) => {
                let [data1] = res[0];
                if (this.chart1) this.chart1.destroy();
                this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
            });
        }

        onchange(e) {
            e > 0 ? this.setState({ year_datas: this.props.year_data }) : this.setState({ year_datas: this.props.today });
            this.props.dispatch({
                type: "jckbazqd/select",
                payload: e
            });
            this.showCharts(e);
        }

        componentWillUnmount() {
            if (this.chart1) this.chart1.destroy();
        }
        render() {
            let { datas = [], data = {}, today, monthchart1 } = this.props;
            return (
                <GridFill header={
                    <div key="wc" className="zntj_dc">
                        <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
                            <SegmentedControl values={['本年', '本月']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
                        </div>
                    </div>
                }>
                    <div style={{ background: "#f9f9f9" }}>
                        <LineChart source={this.state.year_datas} />
                        <HeaderFill title="本月报关单量排名情况" style={{ margin: "8px 0" }}>
                            <canvas ref="chart1" />
                        </HeaderFill>
                    </div>
                </GridFill>
            )
        }
    }
)