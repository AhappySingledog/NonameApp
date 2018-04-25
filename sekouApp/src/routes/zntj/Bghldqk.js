import ReactDOM from "react-dom";
import { Picker, List } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import {Chart, HeaderFill, LineChart, GridFill} from "../../componets";
import "./bghldqk.less";

export default connect(({ bghldqk, loading }) => ({ ...bghldqk }))(
  class Bghldqk extends Component {
    componentDidMount() {
      this.showCharts(this.props.data);
    }
    showCharts(e) {
      publish("bghldqk/showCharts", e).then((res) => {
        let [data1,data2] = res[0];
        if (this.chart1) this.chart1.destroy();
        this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
        if (this.chart2) this.chart2.destroy();
        this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
      });
    }
    onchange(e){
      this.props.dispatch({
        type: "bghldqk/select",
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

                <HeaderFill title="今日报关行录单排名情况" style={{margin: "8px 0"}}>
                <canvas ref="chart2" />
               </HeaderFill>

                <HeaderFill title="近一周报关行录单同环比情况" style={{margin: "8px 0"}}>
                  <canvas ref="chart1" />
                </HeaderFill>
            </div> 
          </GridFill>        
        );
      }

  }
);