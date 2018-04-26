import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { GridFill, Raingratio, MoreCharts } from "../../../componets";
import "./Mtdc.less";

export default connect(({ mtdc, loading }) => ({ ...mtdc }))(
  class Mtdc extends Component {
    state = {
      dataTime: new Date(Date.now()),
        index: 0,
    }

    onTabClick = (tab, index) => {
      this.setState({ index: index })
    }
    render() {
      let { tabs } = this.props;
      return (
        <GridFill header={
          <div className="yqcl_box">
            <DatePicker mode="date" title="选择时间" value={this.state.dataTime} onChange={(e) => this.onchange(e)}>
              <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
          </div>

        }>
          <Tabs
            tabs={tabs}
            swipeable={false}
            initialPage={0}
            onChange={(tab, index) => { }}
            onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
          >
            {tabs.map((va, key) => {
              return <div key={key}> <div className="boxS" /> <Raingratio val={va.data} />
                <div className="boxS" />
                <MoreCharts view={va.datas} groupData={"mtdc/showCharts"} index={this.state.index} />
              </div>
            })}
          </Tabs>

        </GridFill>
      );
    }
  }
);
