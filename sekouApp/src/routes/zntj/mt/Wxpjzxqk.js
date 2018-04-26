import ReactDOM from "react-dom";
import { Picker, List, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import { Chart, HeaderFill, LineChart, GridFill, Raingratio, MoreCharts } from "../../../componets";
import '../action';
import "./wxpjzxqk.less";

export default connect(({ wxpjzxqk, loading }) => ({ ...wxpjzxqk }))(
  class Wxpjzxqk extends Component {

    state = {
      index: 0,
    }

    onchange(e) {
      this.props.dispatch({
        type: "wxpjzxqk/select",
        payload: e
      });
    }

    onTabClick = (tab, index) => {
      this.setState({ index: index })
    }
    render() {
      let { datas = [], data = {}, source = [], tabs } = this.props;
      return (

        <GridFill header={
          <div id="abc" style={{ borderBottom: "1px solid #ebebeb" }}>
            <Picker data={datas} title="选择时间" extra={data.label} value={data} onChange={(e) => this.onchange(e)}>
              <List.Item arrow="horizontal">时间</List.Item>
            </Picker>
          </div>
        }>
          <div style={{ background: "#f9f9f9" }}>
            <LineChart source={source} />
            <Tabs
              tabs={tabs}
              swipeable={false}
              initialPage={0}
              onChange={(tab, index) => { }}
              onTabClick={(tab, index) => { this.onTabClick(tab, index) }}>
              {tabs.map((va, key) => {
                return <div key={key}>
                  <div className="boxS" />
                  <MoreCharts source={""} view={va.datas} groupData={"yqqysb/showCharts"} index={this.state.index} />
                </div>
              })}
            </Tabs>
          </div>
        </GridFill >
      );
    }

  }
);