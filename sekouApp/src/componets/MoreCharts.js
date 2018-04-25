import React from "react";
import HeaderFill from './HeaderFill';
import ReactDOM from "react-dom";
import { LineChart, SelectChart } from './index';

export default class MoreCharts extends React.Component {
    render() {
        let { view, source, title, groupData, index } = this.props;
        console.log(this.props)
        return (
            <div>
                {source ? <LineChart source={source} /> : null}
                {view.map((value, key) => {
                    return <div key={key} style={{ background: "#f9f9f9" }}>
                        <SelectChart groups={title} res={value.name} groupData={groupData} index={index} />
                    </div>
                })}
            </div>

        )
    }
}