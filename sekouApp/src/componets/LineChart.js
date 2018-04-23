import React from "react";
import "./linechart.less";
import HeaderFill from './HeaderFill';

export default class LineChart extends React.Component {
    render() {
        const { source =[]} = this.props;
        return (
            <HeaderFill title={source[0].headTitle} style={{margin: "8px 0"}}>
                <table className="linechart">
                    <thead>
                    <tr>
                        <td></td>
                        <td style={{width: "100%"}}></td>
                        <td className="linechart_hight_light">总量</td>
                        <td>占比</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        source[0].items.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{whiteSpace:"nowrap"}}>{data.title}</td>
                                    <td><div className="linechart_press"><diV className="linechart_press_val" style={{width: data.vl}}></diV></div></td>
                                    <td className="linechart_hight_light">{data.value}</td>
                                    <td>{data.vl}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </HeaderFill>
        ); 
    }
}