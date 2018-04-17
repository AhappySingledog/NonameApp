import { Tabs } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import "./app.less";
import ssSvg from "../../images/zncx/搜索.svg";
import sxSvg from "../../images/zncx/筛选.svg";

export default connect(({ zncx, loading }) => ({ tabs: zncx.tabs, itemClick: zncx.itemClick }))(
  class Mtcb extends Component {
    state = {index: (window.localStorage.getItem('mthzx_tabs_indx') || 0) * 1}
    render() {
      const { tabs, itemClick = () => {} } = this.props;
      const { index } = this.state;
      return (
        <Tabs
          tabs={tabs.map(tab => ({ title: tab.title }))}
          swipeable={false}
          initialPage={index}
          onChange={(tab, index) => {window.localStorage.setItem('mthzx_tabs_indx', index);}}
          onTabClick={(tab, index) => {this.setState({index})}}
        >
          {tabs.map((tab, idx) => {
            let { datas: items = [], cols = {}, icon, tip, type } = tab;
            let keys = Object.keys(cols);
            return (
              <div key={idx} className="zncx">
                <div className="zncx_bar">
                  <div>
                    <img className="zncx_bar_img" src={ssSvg} alt="" />搜索
                  </div>
                  <div>
                    <img className="zncx_bar_img" src={sxSvg} alt="" />过滤
                  </div>
                </div>
                    {
                        items.map((item, idx) => {
                             return (
                                 <table key={type + idx} className="zncx_table" onClick={() => itemClick(item, type, idx)}>
                                    <tbody>
                                    {
                                        keys.map((key, id) => {
                                            if(id > 0) {
                                                return (
                                                    <tr key={id + type} style={{color: "#8e8e8e"}}>
                                                        <td></td>
                                                        <td>{cols[key]}:</td>
                                                        <td>{item[key]}</td>
                                                        <td></td>
                                                    </tr>
                                                );
                                            }
                                            if(tip) {
                                                let ts = tip.disp[item[tip.fld]];
                                                return (
                                                    <tr key={id + type} style={{color: "#1890ff"}}>
                                                        <td className="zncx_table_col_1">
                                                            <div className="zncx_table_img" style={ts.iconStyle}>
                                                                <img src={icon} alt="" />
                                                            </div>
                                                        </td>
                                                        <td>{cols[key]}:</td>
                                                        <td>{item[key]}</td>
                                                        <td className="zncx_table_col_4" style={ts.tipStyle}>{ts.tip}</td>
                                                    </tr>
                                                );
                                            }
                                            return (
                                                <tr key={id + type} style={{color: "#1890ff"}}>
                                                    <td className="zncx_table_col_1"><div className="zncx_table_img"><img src={icon} alt="" /></div></td>
                                                    <td>{cols[key]}:</td>
                                                    <td>{item[key]}</td>
                                                    <td></td>
                                                </tr>
                                            );
                                        })
                                    }
                                    </tbody>
                                 </table>
                             );   
                        })
                    }
                <div />
              </div>
            );
          })}
        </Tabs>
      );
    }
  }
);
