import ReactDOM from "react-dom";
import { SegmentedControl, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { Chart, LineChart, GridFill, SelectChart } from "../../componets";
import "./bgdl.less";

export default connect(({ bgdl, loading }) => ({ ...bgdl }))(
  class Bgdl extends Component {
    onchange(e) {
      this.props.dispatch({
        type: "bgdl/select",
        payload: e
      });
    }
    render() {
      let { datas = [], data = {}, source = [], tabs, chartPieMonth, monthchart1 } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['本年', '本月']} onValueChange={e => this.onchange(e)} />
            </div>
          </div>
        }>
          <Tabs
            tabs={tabs}
            swipeable={false}
            initialPage={0}
          >

            {tabs.map((va, key) => {
              return <div key={key}>
                <div className="zntj_glx" />
                <div style={{ background: "#f9f9f9" }}>
                  <LineChart source={source} />
                  <SelectChart groups={chartPieMonth} />
                  <SelectChart groups={monthchart1} />
                </div>
              </div>
            })}
          </Tabs>
        </GridFill>
      );
    }
  }
);