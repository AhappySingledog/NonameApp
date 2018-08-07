import { Toast, DatePicker, List } from "antd-mobile";
import { GridFill, MoreCharts } from "../../componets";
import React, { Component } from "react";
import { connect } from "dva";
import './action';
import "./hgcyqk.less";

function dateTojson(date) {
    const Data = new Date(date);
    const y = Data.getFullYear();
    const m = Data.getMonth();
    const d = Data.getDate();
    return '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
}

export default connect(({ hgcyqk, loading }) => ({ ...hgcyqk }))(
    class Hgcyqk extends Component {
        state = {
            date: new Date(Date.now()),
            jsons : [],
        }
        componentDidMount() {
            this.HandleAction(dateTojson(new Date(Date.now())));
        }

        HandleAction = (e) => {
            this.props.dispatch({
                type: 'hgcyqk/Query',
                payload: {
                    // where: " STATISTICSDATE = '" + e + "'"
                    where: " STATISTICSDATE = '20180612' order by DOCKCODE"
                },
            }).then(e => {
                console.log(this.props.jsons);
                const a = this.props.jsons[0].data;
                let SCTsj = [[],[]];
                let CCTsj = [[],[]];
                let MCTsj = [[],[]];
                for(let o in a){
                    if((a[o]['DOCKCODE']).indexOf('SCT') >= 0){
                        SCTsj[0].push(a[o].FTZDEPT);
                        SCTsj[1].push(a[o].PASSNUM);
                    }
                    if((a[o]['DOCKCODE']).indexOf('CCT_妈湾') >= 0 ){
                        MCTsj[0].push(a[o].FTZDEPT);
                        MCTsj[1].push(a[o].PASSNUM);
                    }
                    if(a[o].DOCKCODE === 'CCT'){
                        CCTsj[0].push(a[o].FTZDEPT);
                        CCTsj[1].push(a[o].PASSNUM);
                    }
                };
                this.setState({ jsons :[SCTsj,CCTsj,MCTsj]})
            });
        }

        render() {
            let { datas } = this.props;
            return (
                <GridFill header={
                    <div key="wc" className="zntj_dc">
                        <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
                            <DatePicker mode="date" title="请选择日期" extra="Optional" value={this.state.date} onChange={date => this.setState({ date })} >
                                <List.Item arrow="horizontal">日期选择</List.Item>
                            </DatePicker>
                        </div>
                    </div>
                }>
                    <div>
                        <div className="boxS" />
                        <MoreCharts view={datas} list={this.state.jsons} groupData={"hgcyqk/showCharts"} index={this.state.index} />
                    </div>
                </GridFill>
            );
        }
    }
);