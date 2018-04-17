import { Tabs, Icon } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import SelectDate from "./SelectDate";
import SelectChecks from "./SelectChecks";
import "./tdsbqk.less";

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

export default connect(({ tdsbqk, loading }) => ({ ...tdsbqk }))(
  class Tdsbqk extends Component {
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
      const { tabs, dateIdx, dataTitle, barType, dispatch, boats, filters } = this.props;
      let toolBar = <div/>;
      if(barType === "date") toolBar = <SelectDate lx={dateIdx} type="tdsbqk/dateChange" style={style} />;
      if(barType === "boat") toolBar = <SelectChecks type="tdsbqk/boatChange" groups={boats} style={style} />;
      if(barType === "filter") toolBar =  <SelectChecks type="tdsbqk/filterChange" groups={filters} style={style} />;      
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
            <table className="tdsbqk">
              <thead>
                <tr>
                  <td>日期</td>
                  <td>码头名称</td>
                  <td>进出口类型</td>
                  <td>货物海关状态</td>
                  <td>提单量</td>
                </tr>
              </thead>
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
                      type: "tdsbqk/showbar",
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
                      type: "tdsbqk/showbar",
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
              <div>
                <div
                  className="tabBar_bar_box"
                  style={{ color: barType === "filter" ? "#1b91ff" : "inherit" }}
                  onClick={() =>
                    dispatch({
                      type: "tdsbqk/showbar",
                      payload: barType === "filter" ? "" : "filter"
                    })
                  }
                >
                  <div>刷选</div>
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
