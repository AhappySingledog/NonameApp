import ReactDOM from "react-dom";
import { SegmentedControl, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { Chart, HeaderFill, LineChart, GridFill, SelectChart } from "../../componets";
import "./hgcyqk.less";

export default connect(({ hgcyqk, loading }) => ({ ...hgcyqk }))(
  class Hgcyqk extends Component {
    state = {
      inex: 0
    }
    onchange = (e) => {
      this.setState({ inex: e.nativeEvent.selectedSegmentIndex })
      this.props.dispatch({
        type: "hgcyqk/select",
        payload: e.nativeEvent.selectedSegmentIndex
      });
    }
    render() {
      let { datas = [], data = {}, source = [], tabs, chartPieMonth, monthchart1 } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={datas} selectedIndex={this.state.inex} onChange={this.onchange} />
            </div>
          </div>
        }>
          <Tabs
            tabs={tabs}
            swipeable={false}
            initialPage={0}
          >
            <div style={{ background: "#f9f9f9" }}>
              <LineChart source={source} />
              <SelectChart groups={chartPieMonth} />
              <SelectChart groups={monthchart1} />
            </div>
            <div style={{ background: "#f9f9f9" }}>
              <LineChart source={source} />
              <SelectChart groups={chartPieMonth} />
              <SelectChart groups={monthchart1} />
            </div>
          </Tabs>
        </GridFill>
      );
    }
  }
);