/** 园区企业申报 */
import { connect } from "dva";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Picker, List, Tabs } from "antd-mobile";
import { subscribes, publish, unsubscribe } from '../../../core/arbiter';
import { Chart, HeaderFill, LineChart, GridFill, SelectChart } from "../../../componets";
import '../action';
import "./yqqysb.less";




export default connect(({ yqqysb, loading }) => ({ ...yqqysb }))(
    class Yqqysb extends Component {
        state = {
            title: '本月',
            datas: [
                {
                    chars1: { name: 'z_chars1' }, chars2: { name: 'x_chars2' }
                }, {
                    chars1: { name: 'z_chars3' }, chars2: { name: 'x_chars4' }
                }, {
                    chars1: { name: 'z_chars5' }, chars2: { name: 'x_chars6' }
                }, {
                    chars1: { name: 'z_chars7' }, chars2: { name: 'x_chars8' }
                }],
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
                    if(i.indexOf('z_') > -1 ){
                        console.log(i);
                        let chars = new Chart(ReactDOM.findDOMNode(this.refs[i]), data1);
                    }else {
                        console.log(i);
                        let chars1 = new Chart(ReactDOM.findDOMNode(this.refs[i]), data2);
                    }
                }
            });
        }

        componentWillUnmount() {

        }


        onTabClick = (title, index) => {
            this.showCharts(index);
        }


        render() {
            let { datas = [], data = {}, tabs, source, chartPieMonth, monthchart1 } = this.props;
            const a = this.state.datas;
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
                            a.map((value, key) => {
                                return <div key={key} style={{ background: "#f9f9f9" }}>
                                    <LineChart source={source} />
                                    <HeaderFill title={this.state.title + "报关单量排名情况"} style={{ margin: "8px 0" }}>
                                        <canvas ref={value.chars1.name} />
                                    </HeaderFill>
                                    <HeaderFill title={this.state.title + "报关单量排名情况"} style={{ margin: "8px 0" }}>
                                        <canvas ref={value.chars2.name} />
                                    </HeaderFill>
                                </div>
                            })
                        }
                    </Tabs>
                </GridFill>
            )
        }
    }
)