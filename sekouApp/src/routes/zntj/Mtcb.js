import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import "./mtcb.less";
import csvg from "../../images/zntj/jcg/出港.svg";
import jsvg from "../../images/zntj/jcg/进港.svg";

export default connect(({ mtcbqk, loading }) => ({ tabs: mtcbqk.tabs }))(
  class Mtcb extends Component {
    render() {
      const { tabs } = this.props;
      return (
        <Tabs
          tabs={tabs.map(tab => ({ title: tab.title }))}
          swipeable={false}
          initialPage={0}
          onChange={(tab, index) => {}}
          onTabClick={(tab, index) => {}}
        >
          {tabs.map((tab, idx) => {
            let {data: {jg = {},cg = {}}} = tab;
            return <div key={idx} className="mtcb_tab_content">
                <div className="mtcb_segbox" />
                <div className="mtcb_box">
                  <DatePicker mode="date" title="选择时间" extra="今天" onChange={date => this.setState(// value={this.state.date}
                        { date })}>
                    <List.Item arrow="horizontal">
                      统计时间：
                    </List.Item>
                  </DatePicker>
                </div>
                <div className="mtcb_segbox" />
                <div className="mtcb_tj mtcb_box">
                  <div className="mtcb_tj_item">
                    <div>
                      <div className="mtcb_img">
                        <img src={jsvg} alt="" />
                      </div>
                      <span className="mtcb_jgsl">
                        进港船舶数量
                      </span>
                    </div>
                    <div className="mtcb_val">{jg.val}</div>
                    <div>
                      <span className="mtcb_hb">环比：</span>
                      <span className={"mtcb_hb_" + jg.zb}>
                        <span>{jg.hb}%</span>
                      </span>
                    </div>
                  </div>
                  <div className="mtcb_tj_sp" />
                  <div className="mtcb_tj_item">
                    <div>
                      <div className="mtcb_img">
                        <img src={csvg} alt=""/>
                      </div>
                      <span className="mtcb_cgsl">
                        出港船舶数量
                      </span>
                    </div>
                    <div className="mtcb_val">{cg.val}</div>
                    <div>
                      <span className="mtcb_hb">环比：</span>
                      <span className={"mtcb_hb_" + cg.zb}>
                        <span>{cg.hb}%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>;
          })}
        </Tabs>
      );
    }
  }
);
