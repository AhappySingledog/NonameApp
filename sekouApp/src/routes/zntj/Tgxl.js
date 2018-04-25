import ReactDOM from "react-dom";
import { Picker, List } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import {Chart, HeaderFill, LineChart, GridFill} from "../../componets";
import "./tgxl.less";

export default connect(({ tgxl, loading }) => ({ ...tgxl }))(
  class Tgxl extends Component {
    componentDidMount() {
      this.showCharts(this.props.data);
    }
    showCharts(e) {
      publish("tgxl/showCharts", e).then((res) => {
        let [data2,data3] = res[0];
        if (this.chart2) this.chart2.destroy();
        this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
        if (this.chart3) this.chart3.destroy();
        this.chart3 = new Chart(ReactDOM.findDOMNode(this.refs.chart3), data3);
      });
    }
    onchange(e){
      this.props.dispatch({
        type: "tgxl/select",
        payload: e
      });
      this.showCharts(e);
    }
    componentWillUnmount() {
      if (this.chart2) this.chart2.destroy();
      if (this.chart3) this.chart3.destroy();
    }
    render() {   
      let {datas =[],num, data= {}} = this.props;
      return (
        <GridFill header={
          <div id="abc" style={{borderBottom: "1px solid #ebebeb"}}>
            <Picker data={datas} title="选择时间" extra={data.label} value={data} onChange={(e)=> this.onchange(e)}>
              <List.Item arrow="horizontal">时间</List.Item>
            </Picker>
          </div>
        }>
          <div style={{background: "#f9f9f9",height:'100%'}}>  

              <HeaderFill title="本月通关效率情况" box='总效率:' num={num} style={{margin: "8px 0",height:'40%'}}>
                <canvas ref="chart3" />
              </HeaderFill>

              <HeaderFill title="近一年通关效率同环比情况" style={{margin: "8px 0",height:'60%'}}>
               <canvas ref="chart2" />
              </HeaderFill>
          </div>
        </GridFill>        
      );
    }
  }
);
