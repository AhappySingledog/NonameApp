import { Tabs, Icon } from "antd-mobile";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import { connect } from "dva";
import SelectDate from "./SelectDate";
import SelectChecks from "./SelectChecks";
import "./cbsbqk.less";

const style = { top: "84px" };

Chart.defaults.scale.ticks.fontSize = 10;
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.tooltips.backgroundColor = "rgba(0,0,0,0.5)";
Chart.defaults.global.tooltips.titleFontSize = 16;
Chart.defaults.global.tooltips.bodyFontStyle = 12;
Chart.defaults.global.tooltips.bodyFontStyle = "normal";
Chart.defaults.global.tooltips.footerFontSize = 12;
Chart.defaults.global.tooltips.xPadding = 6;
Chart.defaults.global.tooltips.yPadding = 6;
Chart.defaults.global.tooltips.cornerRadius = 4;

var data1 = {
  type: "line",
  data: {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    datasets: [
      {
        label: "指标1",
        fill: false,
        spointRadius: 6,
        pointHoverRadius: 8,
        borderColor: "rgb(24, 210, 187)",
        backgroundColor: "rgb(24, 210, 187)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "指标2",
        fill: false,
        spointRadius: 6,
        pointHoverRadius: 8,
        borderColor: "rgb(3, 169, 245)",
        backgroundColor: "rgb(3, 169, 245)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
};

var data2 = {
  type: "line",
  data: {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    datasets: [
      {
        label: "指标1",
        spointRadius: 6,
        pointHoverRadius: 8,
        borderColor: "rgba(24, 210, 187, 0.3)",
        backgroundColor: "rgba(24, 210, 187, 0.3)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "指标2",
        spointRadius: 6,
        pointHoverRadius: 8,
        borderColor: "rgba(3, 169, 245, 0.3)",
        backgroundColor: "rgba(3, 169, 245, 0.3)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
};



export default connect(({ cbsbqk, loading }) => ({ ...cbsbqk }))(
  class Cbsbqk extends Component {
    componentDidMount() {
      if (this.chart1) this.chart1.destroy();
        this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
    }
    onChange(tab, index) {
      if(index === 0){
        if (this.chart1) this.chart1.destroy();
        setTimeout(() => {
          this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
        }, 100);
        
      }
      else if(index === 1){
        if (this.chart2) this.chart2.destroy();
        setTimeout(() => {
          this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
        }, 100);        
      }  
    }
    componentWillUnmount() {
      if (this.chart1) this.chart1.destroy();
      if (this.chart2) this.chart2.destroy();
    }
    render() {
      const { tabs, dateIdx, dataTitle, barType, dispatch, boats } = this.props;
      let toolBar = barType ? (
        barType === "date" ? (
          <SelectDate lx={dateIdx} type="cbsbqk/dateChange" style={style} />
        ) : (
          <SelectChecks type="cbsbqk/boatChange" groups={boats} style={style} />
        )
      ) : null;
      return (
        <div className="tabBar">
          <Tabs
            tabs={tabs}
            swipeable={false}
            initialPage={0}
            onChange={this.onChange.bind(this)}
            onTabClick={(tab, index) => {}}
          >
            <div className="tabContent">
              <canvas style={{width:'100%', height: '50%'}} ref="chart1" />
            </div>
            <div className="tabContent">
              <canvas style={{width:'100%', height: '50%'}} ref="chart2" />
            </div>
            <div className="tabContent">
              <table className="cbsbqk">
                <thead>
                  <tr>
                    <td colSpan="2">名称</td>
                    <td>2017/12</td>
                    <td>2018/01</td>
                    <td>标准值</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">入库税款(亿元)</td>
                    <td>14.2</td>
                    <td>11.4</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td colSpan="2">报关量单(万票)</td>
                    <td>14.3</td>
                    <td>14.1</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">验收时效(小时)</td>
                    <td className="cbsbqk_jk">进口</td>
                    <td>3.95</td>
                    <td>2.69</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td className="cbsbqk_ck">出口</td>
                    <td>1.41</td>
                    <td>1.85</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">通关时效(小时)</td>
                    <td className="cbsbqk_jk">进口</td>
                    <td>18.45</td>
                    <td>19.55</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td className="cbsbqk_ck">出口</td>
                    <td>1</td>
                    <td>0.88</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tabs>
          <div className="tabBar_bar">
            <div className="tabBar_bar_box">
              <div>
                <div
                  className="tabBar_bar_box"
                  style={{ color: barType === "date" ? "#1b91ff" : "inherit" }}
                  onClick={() =>
                    dispatch({
                      type: "cbsbqk/showbar",
                      payload: barType === "date" ? "" : "date"
                    })
                  }
                >
                  <div>{dataTitle}</div>
                  <div>
                    <Icon type="down" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="tabBar_bar_box"
                  style={{ color: barType === "boat" ? "#1b91ff" : "inherit" }}
                  onClick={() =>
                    dispatch({
                      type: "cbsbqk/showbar",
                      payload: barType === "boat" ? "" : "boat"
                    })
                  }
                >
                  <div>船代名称</div>
                  <div>
                    <Icon type="down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {toolBar}
        </div>
      );
    }
  }
);
