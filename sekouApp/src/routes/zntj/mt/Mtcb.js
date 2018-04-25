import { Tabs, DatePicker, List } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { Chart, HeaderFill, LineChart, GridFill, SelectChart } from "../../../componets";
import "./mtcb.less";
import csvg from "../../../images/zntj/jcg/出港.svg";
import jsvg from "../../../images/zntj/jcg/进港.svg";

export default connect(({ mtcbqk, loading }) => ({ ...mtcbqk }))(
  class Mtcb extends Component {
    state = {
      dataTime: new Date(Date.now()),
      datas: [
        {
          chars1: { name: 'z_chars1' }, chars2: { name: 'x_chars2' }
        }, {
          chars1: { name: 'z_chars3' }, chars2: { name: 'x_chars4' }
        }, {
          chars1: { name: 'z_chars5' }, chars2: { name: 'x_chars6' }
        }, {
          chars1: { name: 'z_chars7' }, chars2: { name: 'x_chars8' }
        }],
    }

    onTabClick = (tab,index) => {

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
            {tabs.map((va,key)=>{
             
                return <div key ={key} className="mc">
                     {
                       va.data.map((valu,i)=>{
                         return <div className="mtcb_box">
                                <div className="mtcb_box_top">
                                  <div className={"mtcb_box_top_"+valu.cb}></div>
                                  <div className="mtcb_box_top_right">{valu.name}</div>
                                </div>
                                <div style={{fontSize : 20}}>{valu.val}</div>
                                <div className="mtcb_box_bot">
                                  <div>环比</div>
                                  <div>{valu.zb}</div>
                                  <div>{valu.hb}%</div>
                                </div>
                         </div>
                       })
                     }
                </div>
            })}
          </Tabs>

        </GridFill>
      );
    }
  }
);
