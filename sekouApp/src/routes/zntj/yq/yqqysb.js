/** 园区企业申报 */
import { connect } from "dva";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { DatePicker, List, Tabs } from "antd-mobile";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { Chart, HeaderFill, LineChart, GridFill, SelectChart } from "../../../componets";

import "./yqqysb.less";

export default connect(({ yqqysb, loading }) => ({ ...yqqysb }))(
    class Yqqysb extends Component {
        state = {
            dataTime: new Date(Date.now()),
        }
        onchange(e) {
            this.props.dispatch({
                type: "bgdl/select",
                payload: e
            });
        }

        render() {
            let { tabs, source, chartPieMonth, monthchart1 } = this.props;
            return (
                <GridFill header={
                    <div id="abc" style={{ borderBottom: "1px solid #ebebeb" }}>
                        <DatePicker mode="date" title="选择时间" value={this.state.dataTime} extra="Optional" onChange={(e) => this.onchange(e)}>
                            <List.Item arrow="horizontal">时间</List.Item>
                        </DatePicker>
                    </div>
                }>
                    <Tabs
                        tabs={tabs}
                        swipeable={false}
                        initialPage={0}
                        onChange={(tab, index) => { }}
                        onTabClick={(tab, index) => { }}
                    >
                        <div style={{ background: "#f9f9f9" }}>
                            <LineChart source={source} />
                            <SelectChart groups={chartPieMonth} />
                            <SelectChart groups={monthchart1} />
                        </div>
                        <div style={{ background: "#f9f9f9" }}>
                            <LineChart source={source} />
                            <SelectChart groups={chartPieMonth} />
                            <SelectChart groups={monthchart1} />
                        </div>
                        <div style={{ background: "#f9f9f9" }}>
                            <LineChart source={source} />
                            <SelectChart groups={chartPieMonth} />
                            <SelectChart groups={monthchart1} />
                        </div>
                        <div style={{ background: "#f9f9f9" }}>
                            <LineChart source={source} />
                            <SelectChart groups={chartPieMonth} />
                            <SelectChart groups={monthchart1} />
                        </div>
                    </Tabs>
                </GridFill>
            )
        }
    }
)