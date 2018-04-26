/** 园区企业申报 */
import { connect } from "dva";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Picker, List, Tabs } from "antd-mobile";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { Chart, HeaderFill, LineChart, GridFill, SelectChart, MoreCharts } from "../../../componets";
import '../action';
import "./yqqysb.less";

export default connect(({ yqqysb, loading }) => ({ ...yqqysb }))(
    class Yqqysb extends Component {
        state = {
            datas: [
                [
                    { name: 'z_chars1' }, { name: 'x_chars2' }
                ], [
                    { name: 'z_chars3' }, { name: 'x_chars4' }
                ], [
                    { name: 'z_chars5' }, { name: 'x_chars6' }
                ], [
                    { name: 'z_chars7' }, { name: 'x_chars8' }
                ]],
            title: '本月',
            index: 0,
        }

        componentDidMount() {
            this.showCharts(this.props.data[0]);
        }
        onchange(e) {
            e[0] > 1 ? this.setState({ title: '本年' }) : this.setState({ title: '本月' });
            this.props.dispatch({
                type: "yqqysb/select",
                payload: e
            });
            this.showCharts(e);
        }


        showCharts(e) {
            publish("yqqysb/showCharts", e).then((res) => {
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

        }


        onTabClick = (title, index) => {
            this.showCharts(index);
        }


        render() {
            let { datas = [], data = {}, tabs } = this.props;
            return (
                <GridFill header={
                    <div id="abc" style={{ borderBottom: "1px solid #ebebeb" }}>
                        <Picker data={datas} title="选择时间" extra={data.label} value={data} onChange={(e) => this.onchange(e)}>
                            <List.Item arrow="horizontal">时间</List.Item>
                        </Picker>
                    </div>
                }>
                    <Tabs
                        tabs={tabs}
                        swipeable={false}
                        initialPage={0}
                        onChange={(tab, index) => { }}
                        onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
                    >
                        {
                            tabs.map((val,key)=>{
                                return <MoreCharts key={key} view={val.datas} groupData={"yqqysb/showCharts"} index={this.state.index} />
                            })
                        }
                    </Tabs>
                </GridFill>
            )
        }
    }
)