import React from "react";
import "./selectChart.less";
import HeaderFill from './HeaderFill';
import Chart from "chart.js";
import ReactDOM from "react-dom";

export default class SelectChart extends React.Component {

    componentDidMount() {
        let  { groups } = this.props;
          if (this.chart) this.chart.destroy();
            this.chart = new Chart(ReactDOM.findDOMNode(this.refs.chart), groups[0].data);
        }
    componentWillUnmount() {
          if (this.chart) this.chart.destroy();
        }

    render(){
        let  { groups } = this.props;
        return(
            <HeaderFill title={groups[0].headTitle} style={{margin: "8px 0"}}>
                <canvas ref="chart" />
            </HeaderFill>
        )
    }
}