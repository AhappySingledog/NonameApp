import ReactDOM from "react-dom";
import { SegmentedControl } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { Chart, HeaderFill, LineChart, GridFill } from "../../componets";
import "./tdsbqk.less";

export default connect(({ tdsbqk, loading }) => ({ ...tdsbqk }))(
  class Tdsbqk extends Component {
    state = {
      inex: 0
    }
    componentDidMount() {
      this.showCharts(0);
    }
    showCharts(e) {
      publish("tdsbqk/showCharts", e).then((res) => {
        let [data1, data2] = res[0];
        if (this.chart1) this.chart1.destroy();
        this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
        if (this.chart2) this.chart2.destroy();
        this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
      });
    }
    onchange = (e) => {
      this.setState({ inex: e.nativeEvent.selectedSegmentIndex })
      this.props.dispatch({
        type: "tdsbqk/select",
        payload: e.nativeEvent.selectedSegmentIndex
      });
      this.showCharts(e);
    }
    componentWillUnmount() {
      if (this.chart1) this.chart1.destroy();
      if (this.chart2) this.chart2.destroy();
    }
    render() {
      let { datas = [], data = {}, source = [] } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={datas} selectedIndex={this.state.inex} onChange={this.onchange} />
            </div>
          </div>
        }>
          <div style={{ background: "#f9f9f9" }}>
            <LineChart source={source} />

            <HeaderFill title="今日码头提单申报排名情况" style={{ margin: "8px 0" }}>
              <canvas ref="chart2" />
            </HeaderFill>

            <HeaderFill title="近一周码头提单申报同环比情况" style={{ margin: "8px 0" }}>
              <canvas ref="chart1" />
            </HeaderFill>
          </div>
        </GridFill>
      );
    }

  }
);
