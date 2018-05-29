import ReactDOM from "react-dom";
import { SegmentedControl } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { Chart, HeaderFill, LineChart, GridFill } from "../../componets";
import "./tgxl.less";

export default connect(({ tgxl, loading }) => ({ ...tgxl }))(
  class Tgxl extends Component {
    componentDidMount() {
      this.showCharts(0);
    }
    showCharts(e) {
      publish("tgxl/showCharts", e).then((res) => {
        let [data2, data3] = res[0];
        if (this.chart2) this.chart2.destroy();
        this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
        if (this.chart3) this.chart3.destroy();
        this.chart3 = new Chart(ReactDOM.findDOMNode(this.refs.chart3), data3);
      });
    }
    onchange(e) {
      this.props.dispatch({
        type: "tgxl/select",
        payload: e
      });
      this.showCharts(e);
    }
    componentWillUnmount() {
      if (this.chart2) this.chart2.destroy();
      if (this.chart3) this.chart3.destroy();
    }
    render() {
      let { datas = [], num, data = {} } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['今天', '本周']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
            </div>
          </div>
        }>
          <div style={{ background: "#f9f9f9", height: '100%' }}>

            <HeaderFill title="本月通关效率情况" box='总效率:' num={num} style={{ margin: "8px 0" }}>
              <canvas ref="chart3" />
            </HeaderFill>

            <HeaderFill title="近一年通关效率同环比情况" style={{ margin: "8px 0", height: '60%' }}>
              <canvas ref="chart2" />
            </HeaderFill>
          </div>
        </GridFill>
      );
    }
  }
);
