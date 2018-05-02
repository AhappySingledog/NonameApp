import ReactDOM from "react-dom";
import { Picker, List } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import {Chart, HeaderFill, LineChart, GridFill} from "../../componets";
import "./cysx.less";

export default connect(({ cysx, loading }) => ({ ...cysx }))(
  class Cysx extends Component {
    componentDidMount() {
        this.showCharts(this.props.data);
      }
      showCharts(e) {
        publish("cysx/showCharts", e).then((res) => {
          let [data1,data2] = res[0];
          if (this.chart1) this.chart1.destroy();
          this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
          if (this.chart2) this.chart2.destroy();
          this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
        });
      }
      onchange(e){
        this.props.dispatch({
          type: "cysx/select",
          payload: e
        });
        this.showCharts(e);
      }
      componentWillUnmount() {
        if (this.chart1) this.chart1.destroy();
        if (this.chart2) this.chart2.destroy();
      }
    render(){
        let {datas =[],num, data= {},barTitle} = this.props;
        return(
            <GridFill  header={
                <div id="abc" style={{borderBottom: "1px solid #ebebeb"}}>
                  <Picker data={datas} title="选择时间" extra={data.label} value={data} onChange={(e)=> this.onchange(e)}>
                    <List.Item arrow="horizontal">时间</List.Item>
                  </Picker>
                </div>
                 }>
                <div style={{background: "#f9f9f9",height :　'100%'}}> 

                    <HeaderFill title="本月查验时效情况" box='总效率:' num={num} style={{margin: "8px 0"}}>
                      <canvas ref="chart2" />
                    </HeaderFill>

                    <HeaderFill  title={barTitle} style={{margin: "8px 0",height:'60%'}}>
                      <canvas style={{height: '100%'}} ref="chart1" />
                    </HeaderFill>
                </div> 
              </GridFill>     
        )
    }

  })