import ReactDOM from "react-dom";
import {DatePicker, Picker, List,Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import {Chart, HeaderFill, LineChart, GridFill,SelectChart} from "../../componets";
import "./bgdl.less";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
export default connect(({ bgdl, loading }) => ({ ...bgdl }))(
  class Bgdl extends Component {
    state={
      dataTime : now,
    }
    onchange(e){
      this.props.dispatch({
        type: "bgdl/select",
        payload: e
      });
    }
      render() {   
        let {datas =[], data= {}, source =[],source1=[],tabs,year,chart,chartPieMonth,chart1,monthchart1,yearchart1} = this.props;
        return (
          <GridFill header={
            <div id="abc" style={{borderBottom: "1px solid #ebebeb"}}>
              <DatePicker mode="date"  title="选择时间" value={this.state.dataTime}  extra="Optional" onChange={(e)=> this.onchange(e)}>
                <List.Item arrow="horizontal">时间</List.Item>
              </DatePicker>
            </div>
             }> 
             <Tabs
             tabs={tabs}
             swipeable={false}
             initialPage={0}
             >
                <div style={{background: "#f9f9f9"}}> 
                    <LineChart source={source}/>
                    <SelectChart  groups={chartPieMonth}/>
                    <SelectChart  groups={monthchart1}/>
                </div> 
                <div style={{background: "#ff0000"}}> 
                    <LineChart source={source}/>
                    <SelectChart  groups={chartPieMonth}/>
                    <SelectChart  groups={monthchart1}/>
                </div> 
                <div style={{background: "#000000"}}> 
                    <LineChart source={source}/>
                    <SelectChart  groups={chartPieMonth}/>
                    <SelectChart  groups={monthchart1}/>
                </div> 
           </Tabs>
          </GridFill>       
        );
      }
  }
);