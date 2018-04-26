import React from "react";
import "./selectChart.less";
import HeaderFill from './HeaderFill';
import Chart from "chart.js";
import ReactDOM from "react-dom";
import { subscribes, publish, unsubscribe } from '../core/arbiter';

export default class SelectChart extends React.Component {

    componentDidMount() {
        let { groups, res, groupData, index } = this.props;
        if (res) {
            publish(groupData, index).then((res) => {
                for (let a in res[0]) {
                    for (let i in this.refs) {
                        if (i.indexOf('z_') > -1) {
                            let chars = new Chart(ReactDOM.findDOMNode(this.refs[i]), res[0][a]);
                        } else {
                            let chars1 = new Chart(ReactDOM.findDOMNode(this.refs[i]), res[0][a]);
                        }
                    }
                }
            });
        } else {
            if (this.chart) this.chart.destroy();
            this.chart = new Chart(ReactDOM.findDOMNode(this.refs.chart), groups[0].data);
        }

    }
    componentWillUnmount() {
        if (this.chart) this.chart.destroy();
    }

    render() {
        let { groups, res } = this.props;
        let abc = null;
        if (groups[0].headTitle != undefined) {
            abc = groups[0].headTitle;
        } else abc = groups;
        return (
            <HeaderFill title={abc} style={{ margin: "8px 0" }}>
                <canvas ref={res ? res : "chart"} />
            </HeaderFill>
        )
    }
}