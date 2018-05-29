import ReactDOM from "react-dom";
import { SegmentedControl, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import { Chart, HeaderFill, LineChart, GridFill, Raingratio, MoreCharts } from "../../../componets";
import '../action';
import "./mtwsbjzx.less";

export default connect(({ mtwsbjzx, loading }) => ({ ...mtwsbjzx }))(
  class Mtwsbjzx extends Component {

    state = {
      index: 0,
    }

    onchange(e) {
      this.props.dispatch({
        type: "mtwsbjzx/select",
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
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['本年', '本月']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
            </div>
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
                  <div className="boxS" style={{ background: '#e8e8e8', marginBottom: '-5px' }} />
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