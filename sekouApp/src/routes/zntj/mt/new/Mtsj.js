import ReactDOM from "react-dom";
import { DatePicker, Tabs,List  } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import '../action';
import "./mtsj.less";
import { Chart, GridFill,MoreCharts } from "../../../componets";

export default connect(({ mtsj, loading }) => ({ ...mtsj }))(
  class Mtsj extends Component {
    state = {
        dataTime: new Date(Date.now()),
        index: 0,
    }

    componentDidMount() {
        this.showCharts(0);
    }

    onchange(e) {
        this.props.dispatch({
            type: "mtsj/select",
            payload: e
        });
        this.showCharts(e);
    }
    showCharts(e) {
        publish("mtsj/showCharts", e).then((res) => {
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

    onTabClick = (title, index) => {
        this.showCharts(index);
    }
    render() {
        let { mothdatas = [], nowdata = {}, tabs, monthchart1, monthchart2 } = this.props;
      return (
        <GridFill header={
         <div className="mtsj_box">
            <DatePicker mode="date" title="选择时间" value={this.state.dataTime} onChange={(e) => this.onchange(e)}>
                <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
        </div>
        }>
                <Tabs
                tabs={tabs.map(tab => ({ title: tab.title }))}
                swipeable={false}
                initialPage={0}
                onChange={(tab, index) => { }}
                onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
            >
                {tabs.map((va, key) => {
                    return <div key={key}> <div className="boxS" /> 
                        <MoreCharts view={va.datas} groupData={"mtsj/showCharts"} index={this.state.index} />
                    </div>
                })}

            </Tabs>
          
        
        </GridFill>
      );
    }
  }
);