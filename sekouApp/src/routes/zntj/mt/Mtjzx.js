import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { GridFill, Raingratio, MoreCharts } from "../../../componets";
import "./mtcb.less";

export default connect(({ mtjzxxq, loading }) => ({ ...mtjzxxq }))(
  class Mtcb extends Component {
    state = {
      datas: [
        [
          { name: 'z_chars1' }, { name: 'x_chars2' }, { name: 'y_chars3' }
        ], [
          { name: 'z_chars4' }, { name: 'x_chars5' }, { name: 'y_chars6' }
        ], [
          { name: 'z_chars7' }, { name: 'x_chars8' }, { name: 'y_chars9' }
        ], [
          { name: 'z_chars10' }, { name: 'x_chars11' }, { name: 'y_chars12' }
        ]],
      title: '本月',
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
              <MoreCharts source={""} view={va.datas} title={va.data.tabname} groupData={"mtjzx/showCharts"} index={this.state.index} />
            </div>
          })}
        </Tabs>
      );
    }
  }
);
