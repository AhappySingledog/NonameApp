import React from "react";
import HeaderFill from './HeaderFill';
import ReactDOM from "react-dom";
import Chart from "chart.js";
import { publish } from '../core/arbiter';
import '../routes/zntj/action';

export default class MoreCharts extends React.Component {

    componentDidUpdate(){
        let {  groupData ,list} = this.props;
        publish(groupData, list).then((res) => {
            Object.keys(this.refs).map((a,b)=>{
                let chars = new Chart(ReactDOM.findDOMNode(this.refs[a]), res[0][b]);
            })
        });
    }

    render() {
        let { view } = this.props;
        return (
            <div>
                {view.map((value, key) => {
                    return <div key={key} style={{ background: "#f9f9f9" }}>
                        <HeaderFill title={value.tabname} style={{ margin: "4px 0" }}>
                            <canvas ref={value.name} />
                        </HeaderFill>
                    </div>
                })}
            </div>

        )
    }
}