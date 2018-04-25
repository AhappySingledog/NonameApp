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
        }

    }
    componentWillUnmount() {
        if (this.chart) this.chart.destroy();
    }

    render() {
        let { groups, res } = this.props;
        return (
            <HeaderFill title={groups[0] ? groups[0].headTitle : groups} style={{ margin: "8px 0" }}>
                <canvas ref={res ? res : "chart"} />
            </HeaderFill>
        )
    }
}