import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import "./mtcb.less";
import csvg from "../../images/zntj/jcg/cg.svg";
import jsvg from "../../images/zntj/jcg/jg.svg";

export default connect(({ mtjzxxq, loading }) => ({ tabs: mtjzxxq.tabs }))(
  class Mtcb extends Component {
    render() {
      const { tabs } = this.props;
      return (
        <Tabs
          tabs={tabs.map(tab => ({ title: tab.title }))}
          initialPage={0}
          swipeable={false}
          onChange={(tab, index) => {}}
          onTabClick={(tab, index) => {}}
        >
          {tabs.map((tab, idx) => {
            let { data: { jz = {}, cz = {}, zc = {}, xc = {} } } = tab;
            return (
              <div key={idx} className="mtcb_tab_content">
                <div className="mtcb_segbox" />
                <div className="mtcb_box">
                  <DatePicker
                    mode="date"
                    title="选择时间"
                    extra="今天"
                    onChange={date =>
                      this.setState(
                        // value={this.state.date}
                        { date }
                      )
                    }
                  >
                    <List.Item arrow="horizontal">统计时间：</List.Item>
                  </DatePicker>
                </div>
                <div className="mtcb_segbox" />
                <div className="mtcb_tj mtcb_box">
                  <div className="mtcb_tj_item">
                    <div>
                      <div className="mtcb_img">
                        <img src={jsvg} alt="" />
                      </div>
                      <span className="mtcb_jgsl">进砸数量</span>
                    </div>
                    <div className="mtcb_val">{jz.val}</div>
                    <div>
                      <span className="mtcb_hb">环比：</span>
                      <span className={"mtcb_hb_" + jz.zb}>
                        <span>{jz.hb}%</span>
                      </span>
                    </div>
                  </div>
                  <div className="mtcb_tj_sp" />
                  <div className="mtcb_tj_item">
                    <div>
                      <div className="mtcb_img">
                        <img src={csvg} alt="" />
                      </div>
                      <span className="mtcb_cgsl">出砸数量</span>
                    </div>
                    <div className="mtcb_val">{cz.val}</div>
                    <div>
                      <span className="mtcb_hb">环比：</span>
                      <span className={"mtcb_hb_" + cz.zb}>
                        <span>{cz.hb}%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mtcb_segbox" />
                <div className="mtcb_tj mtcb_box">
                  <div className="mtcb_tj_item">
                    <div>
                      <div className="mtcb_img">
                        <img src={jsvg} alt="" />
                      </div>
                      <span className="mtcb_jgsl">装船箱量</span>
                    </div>
                    <div className="mtcb_val">{zc.val}</div>
                    <div>
                      <span className="mtcb_hb">环比：</span>
                      <span className={"mtcb_hb_" + zc.zb}>
                        <span>{zc.hb}%</span>
                      </span>
                    </div>
                  </div>
                  <div className="mtcb_tj_sp" />
                  <div className="mtcb_tj_item">
                    <div>
                      <div className="mtcb_img">
                        <img src={csvg} alt="" />
                      </div>
                      <span className="mtcb_cgsl">卸船箱量</span>
                    </div>
                    <div className="mtcb_val">{xc.val}</div>
                    <div>
                      <span className="mtcb_hb">环比：</span>
                      <span className={"mtcb_hb_" + xc.zb}>
                        <span>{xc.hb}%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Tabs>
      );
    }
  }
);
