/** 智能统计---园区车辆 */

import ReactDOM from "react-dom";
import { DatePicker, List, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { connect } from "dva";
import { Chart, HeaderFill, LineChart, GridFill, SelectChart } from "../../../componets";
import csvg from "../../../images/zntj/jcg/出港.svg";
import jsvg from "../../../images/zntj/jcg/进港.svg";
import "./yqcl.less";

export default connect(({ yqcl, loading }) => ({ tabs: yqcl.tabs, monthchart1: yqcl.monthchart1, monthchart2: yqcl.monthchart2 }))(
    class Yqcl extends Component {
        componentDidMount() { }
        state = {
            dataTime: new Date(Date.now()),
        }
        onchange(e) {
            this.props.dispatch({
                type: "yqcl/select",
                payload: e
            });
        }
        render() {
            let { mothdatas = [], nowdata = {}, tabs, monthchart1, monthchart2 } = this.props;
            console.log(this.props);
            return (
                <Tabs
                    tabs={tabs.map(tab => ({ title: tab.title }))}
                    swipeable={false}
                    initialPage={0}
                    onChange={(tab, index) => { }}
                    onTabClick={(tab, index) => { }}
                >
                    {tabs.map((tab, idx) => {
                        let { data: { jg = {}, cg = {} } } = tab;
                        return <div key={idx} className="yqcl_tab_content">
                            <div className="yqcl_segbox" />
                            <div className="yqcl_box">
                                <DatePicker mode="date" title="选择时间" value={this.state.dataTime} extra="Optional" onChange={(e) => this.onchange(e)}>
                                    <List.Item arrow="horizontal">时间</List.Item>
                                </DatePicker>
                            </div>
                            <div className="yqcl_segbox" />
                            <div className="yqcl_tj yqcl_box">
                                <div className="yqcl_tj_item">
                                    <div>
                                        <div className="yqcl_img">
                                            <img src={jsvg} alt="" />
                                        </div>
                                        <span className="yqcl_jgsl">进闸车辆</span>
                                    </div>
                                    <div className="yqcl_val">{jg.val}</div>
                                    <div>
                                        <span className="yqcl_hb">环比：</span>
                                        <span className={"yqcl_hb_" + jg.zb}>
                                            <span>{jg.hb}%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="yqcl_tj_sp" />
                                <div className="yqcl_tj_item">
                                    <div>
                                        <div className="yqcl_img">
                                            <img src={csvg} alt="" />
                                        </div>
                                        <span className="yqcl_cgsl"> 出闸车辆 </span>
                                    </div>
                                    <div className="yqcl_val">{cg.val}</div>
                                    <div>
                                        <span className="yqcl_hb">环比：</span>
                                        <span className={"yqcl_hb_" + cg.zb}>
                                            <span>{cg.hb}%</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <SelectChart groups={monthchart1} />
                            <SelectChart groups={monthchart2} />
                        </div>;
                    })}
                </Tabs>


            )
        }
    }
)