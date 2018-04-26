import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { GridFill, Raingratio, MoreCharts } from "../../../componets";
import "./Mtcl.less";

export default connect(({ mtcl, loading }) => ({ ...mtcl }))(
  class Mtcl extends Component {
    state = {
      index: 0,
    }

    onTabClick = (tab, index) => {
      this.setState({ index: index })
    }
    render() {
      let { tabs } = this.props;
      return (
        <Tabs
          tabs={tabs.map(tab => ({ title: tab.title }))}
          swipeable={false}
          initialPage={0}
          onChange={(tab, index) => { }}
          onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
        >
          {tabs.map((va, key) => {
            return <div key={key}> <div className="boxS" /> <Raingratio val={va.data} />
              <div className="boxS" />
					<MoreCharts view={va.datas}  groupData={"mtcl/showCharts"} index={this.state.index} />
            </div>
          })}
        </Tabs>
      );
    }
  }
);
