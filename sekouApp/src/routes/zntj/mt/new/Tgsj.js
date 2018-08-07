import ReactDOM from "react-dom";
import { DatePicker, Tabs,List, Picker } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import '../action';
import "./tgsj.less";
import { Chart, GridFill,MoreCharts,HeaderFill } from "../../../componets";

export default connect(({ tgsj, loading }) => ({ ...tgsj }))(
  class Mtsj extends Component {
    state = {
        dataTime: new Date(Date.now()),
        index: 0,
    }

    componentDidMount() {
        this.showCharts(0);
        this.cdChart(0);
    }
    onchange(e) {
        this.props.dispatch({
            type: "tgsj/select",
            payload: e
        });
        this.showCharts(e);
    }
    showCharts(e) {
        publish("tgsj/showCharts", e).then((res) => {
            let [data1, data2] = res[0];
            for (let i in this.refs) {
                if (i.indexOf('z_') > -1) {
                    let chars = new Chart(ReactDOM.findDOMNode(this.refs[i]), data1);
                } else {
                    let chars1 = new Chart(ReactDOM.findDOMNode(this.refs[i]), data2);
                }
            }
            this.setState({ index: e })
        });
    }

    componentWillUnmount() {
        if (this.chart1) this.chart1.destroy();
        if (this.chart2) this.chart2.destroy();
        if (this.chart3) this.chart3.destroy();
        if (this.chart4) this.chart4.destroy();
        if (this.chart5) this.chart5.destroy();
        if (this.chart6) this.chart6.destroy();
      }

    cdChart(e){
        publish("tgsj/showCharts", e).then((res) => {
            let [data1,data2,data3,data4,data5,data6] = res[0];
            if (this.chart1) this.chart1.destroy();
            this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);
            if (this.chart2) this.chart2.destroy();
            this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);
            if (this.chart3) this.chart3.destroy();
            this.chart3 = new Chart(ReactDOM.findDOMNode(this.refs.chart3), data3);
            if (this.chart4) this.chart4.destroy();
            this.chart4 = new Chart(ReactDOM.findDOMNode(this.refs.chart4), data4);
            if (this.chart5) this.chart5.destroy();
            this.chart5 = new Chart(ReactDOM.findDOMNode(this.refs.chart5), data5);
            if (this.chart6) this.chart6.destroy();
            this.chart6 = new Chart(ReactDOM.findDOMNode(this.refs.chart6), data6);
          });
    }

    onTabClick = (title, index) => {
        this.showCharts(index);
    }
    render() {
        let { mothdatas = [], nowdata = {}, tabs ,cdsb,mtjzx,hgcy } = this.props;
      return (
        <GridFill header={
         <div className="tgsj_box">
            <DatePicker mode="date" title="选择时间" value={this.state.dataTime} onChange={(e) => this.onchange(e)}>
                <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
        </div>
        }>
         <div style={{height:'100%',width:'100%',marginTop:10}}>
                <Picker data={cdsb[0].cd} cols={1}  className="forss">
                <List.Item arrow="horizontal">船代</List.Item>
               </Picker>
               <HeaderFill title="码头船舶申报情况" style={{ margin: "8px 0" }}>
                  <canvas ref="chart1" />
               </HeaderFill>
          
               <Picker data={mtjzx[0].seasons} cols={1}  className="forss">
               <List.Item arrow="horizontal">货物海关状态</List.Item>
              </Picker>
              <HeaderFill title="码头集装箱提单情况" style={{ margin: "8px 0" }}>
                 <canvas ref="chart2" />
              </HeaderFill>

              <Picker data={mtjzx[0].seasons} cols={1}  className="forss">
              <List.Item arrow="horizontal">货物海关状态</List.Item>
             </Picker>
             <HeaderFill title="船代申报情况" style={{ margin: "8px 0" }}>
                <canvas ref="chart3" />
             </HeaderFill>

             <HeaderFill title="报关行录单情况" style={{ margin: "8px 0" }}>
             <canvas ref="chart4" />
             </HeaderFill>

             <Picker data={mtjzx[0].seasons} cols={1}  className="forss">
             <List.Item arrow="horizontal">货物海关状态</List.Item>
            </Picker>
            <HeaderFill title="集装箱申报情况" style={{ margin: "8px 0" }}>
               <canvas ref="chart5" />
            </HeaderFill>

            <Picker data={hgcy[0].cy} cols={1}  className="forss">
            <List.Item arrow="horizontal">查验班组</List.Item>
           </Picker>
           <HeaderFill title="海关查验情况" style={{ margin: "8px 0" }}>
              <canvas ref="chart6" />
           </HeaderFill>
           </div>
        </GridFill>
      );
    }
  }
);