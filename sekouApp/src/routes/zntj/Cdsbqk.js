import ReactDOM from "react-dom";
import { Picker, List } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import {Chart, HeaderFill, LineChart, GridFill} from "../../componets";
import "./cdsbqk.less";

export default connect(({ cdsbqk, loading }) => ({ ...cdsbqk }))(
  class Cdsbqk extends Component {
    componentDidMount() {
      this.showCharts(this.props.data);
    }
    showCharts(e) {
      publish("cdsbqk/showCharts", e).then((res) => {
        let [data1,data2] = res[0];
        if (this.chart1) this.chart1.destroy();
        this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
        if (this.chart2) this.chart2.destroy();
        this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
      });
    }
    onchange(e){
      this.props.dispatch({
        type: "cdsbqk/select",
        payload: e
      });
      this.showCharts(e);
    }
    componentWillUnmount() {
      if (this.chart1) this.chart1.destroy();
      if (this.chart2) this.chart2.destroy();
    }
      render() {   
        let {datas =[], data= {}, source =[]} = this.props;
        return (
          <GridFill header={
            <div id="abc" style={{borderBottom: "1px solid #ebebeb"}}>
              <Picker data={datas} title="选择时间" extra={data.label} value={data} onChange={(e)=> this.onchange(e)}>
                <List.Item arrow="horizontal">时间</List.Item>
              </Picker>
            </div>
             }>
            <div style={{background: "#f9f9f9"}}> 
                <LineChart source={source}/>

                <HeaderFill title="今日船代申报提单排名情况" style={{margin: "8px 0"}}>
                <canvas ref="chart2" />
               </HeaderFill>

                <HeaderFill title="近一周船代申报提单同环比情况" style={{margin: "8px 0"}}>
                  <canvas ref="chart1" />
                </HeaderFill>
            </div> 
          </GridFill>        
        );
      }

  }
);