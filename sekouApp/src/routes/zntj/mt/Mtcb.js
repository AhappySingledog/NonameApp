import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { GridFill, Raingratio, MoreCharts } from "../../../componets";
import "./mtcb.less";
import csvg from "../../../images/zntj/jcg/出港.svg";
import jsvg from "../../../images/zntj/jcg/进港.svg";

export default connect(({ mtcbqk, loading }) => ({ ...mtcbqk }))(
  class Mtcb extends Component {
    state = {
      dataTime: new Date(Date.now()),
      datas: [
        [
          { name: 'z_chars1' }, { name: 'x_chars2' }
        ], [
          { name: 'z_chars3' }, { name: 'x_chars4' }
        ], [
          { name: 'z_chars5' }, { name: 'x_chars6' }
        ], [
          { name: 'z_chars7' }, { name: 'x_chars8' }
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
                <MoreCharts source={""} view={va.datas} title={this.state.title + "报关单量排名情况"} groupData={"yqqysb/showCharts"} index={this.state.index} />
              </div>
            })}

          </Tabs>

        </GridFill>
      );
    }
  }
);
