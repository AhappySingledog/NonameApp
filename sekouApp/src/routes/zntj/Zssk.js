import ReactDOM from "react-dom";
import { SegmentedControl } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { Chart, HeaderFill, LineChart, GridFill } from "../../componets";
import "./zssk.less";

export default connect(({ zssk, loading }) => ({ ...zssk }))(
  class Zssk extends Component {
    componentDidMount() {
      this.showCharts(0);
    }
    showCharts(e) {
      publish("zssk/showCharts", e).then((res) => {
        let [data1] = res[0];
        if (this.chart1) this.chart1.destroy();
        this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
      });
    }
    onchange(e) {
      this.props.dispatch({
        type: "zssk/select",
        payload: e
      });
      this.showCharts(e);
    }
    componentWillUnmount() {
      if (this.chart1) this.chart1.destroy();
    }
    render() {
      let { datas = [], data = {}, source = [] } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['本年', '本月']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
            </div>
          </div>
        }>
          <div style={{ background: "#f9f9f9", height: '80%' }}>
            <LineChart source={source} />

            <HeaderFill title="近一年征收税款同环比情况" style={{ margin: "8px 0", height: '90%' }}>
              <canvas ref="chart1" />
            </HeaderFill>
          </div>
        </GridFill>
      );
    }

  }
);