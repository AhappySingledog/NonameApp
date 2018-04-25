import ReactDOM from "react-dom";
import { Picker, List,Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import {Chart, HeaderFill, LineChart, GridFill,SelectChart} from "../../componets";
import "./cbsbqk.less";

export default connect(({ cbsbqk, loading }) => ({ ...cbsbqk }))(
  class Cbsbqk extends Component {
    onchange(e){
      this.props.dispatch({
        type: "cbsbqk/select",
        payload: e
      });
    }
      render() {   
        let {datas =[], data= {}, source =[],tabs,chartPieMonth,monthchart1} = this.props;
        return (
          <GridFill header={
            <div id="abc" style={{borderBottom: "1px solid #ebebeb"}}>
              <Picker data={datas} title="选择时间" extra={data.label} value={data} onChange={(e)=> this.onchange(e)}>
                <List.Item arrow="horizontal">时间</List.Item>
              </Picker>
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
                <div style={{background: "#f9f9f9"}}> 
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
