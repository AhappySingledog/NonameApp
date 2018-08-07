import { Toast, Picker, List } from "antd-mobile";
import { GridFill, MoreCharts } from "../../componets";
import React, { Component } from "react";
import { connect } from "dva";
import './action';
import "./jzxsbqk.less";

function jsonTodate(e) {
    let data = new Date();
    let date = null;
    if (e == '1') {
        const y = data.getFullYear();
        const m = data.getMonth();
        const d = data.getDate();
        date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
    } else if (e == '2') {
        const y = data.getFullYear();
        const m = data.getMonth();
        date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1));
    } else if (e == '3') {
        const y = data.getFullYear();
        date = '' + y;
    }
    return date;
}

/** 筛选数据 */
function filt(list, fil, name) {
    const date = list.filter(res => res[fil] === name);
    return date;
}

/** 区分三个类别数据 */
function chatDate(json) {
    let gjyzw = [[], [], []];
    let zsjcjjzx = [[], [], []];
    let jckhw = [[], [], []];
    for (let o in json) {
        json[o].CARGOSTATUSCODE === '进出口货物' ? (gjyzw[0].push(json[o]['INO']), gjyzw[1].push(json[o]['ENO']), gjyzw[2].push(json[o]['STATISTICSDATE'])) : [];
        json[o].CARGOSTATUSCODE === '暂时进出境集装箱' ? (zsjcjjzx[0].push(json[o]['INO']), zsjcjjzx[1].push(json[o]['ENO']), zsjcjjzx[2].push(json[o]['STATISTICSDATE'])) : [];
        json[o].CARGOSTATUSCODE === '国际转运货物' ? (jckhw[0].push(json[o]['INO']), jckhw[1].push(json[o]['ENO']), jckhw[2].push(json[o]['STATISTICSDATE'])) : [];
    };
    return [gjyzw, zsjcjjzx, jckhw]
}

export default connect(({ jzxsbqk, loading }) => ({ ...jzxsbqk }))(
    class Jzxsbqk extends Component {
        state = {
            inex: 0,                    //翻页
            pickerValue: ['SCT', '1'],  //下拉框
            title: 'SCT',              //标题
            json: [],                  //传入chart的值
            oldpmqk: [],
        }
        componentDidMount() {
            Toast.loading('正在查询...', 0);
            this.props.dispatch({
                type: 'jzxsbqk/Query',
                payload: {
                    where: " STATISTICSDATE = '20180613' ORDER BY DOCKCODE"
                }
            }).then(e => {
                const jsons = chatDate(filt(this.props.jsons[0].data, 'DOCKCODE', 'SCT'));
                let pmqk = [[], []];
                const pmqkjson = filt(this.props.jsons[0].data, 'CARGOSTATUSCODE', '进出口货物');
                pmqkjson.map((val, key) => { pmqk[0].push(Number(val.INO) + Number(val.ENO)), pmqk[1].push(val.DOCKCODE) });
                this.setState({ oldpmqk: pmqk }, () => { this.setState({ json: [this.state.oldpmqk, jsons[0], jsons[1], jsons[2]] }) })
            })
        }

        /** 传入chart */
        HandleAction = (e) => {
            this.props.dispatch({
                type: 'jzxsbqk/Query',
                payload: {
                    where: "DOCKCODE = '" + e[0] + "' AND STATISTICSDATE like '%" + jsonTodate(e[1]) + "%'"
                }
            }).then(e => {
                const jsons = chatDate(this.props.jsons[0].data);
                this.setState({ json: [this.state.oldpmqk, jsons[0], jsons[1], jsons[2]] }) 
            })
        }

        render() {
            let { datas = [] } = this.props;
            return (
                <GridFill header={
                    <div key="wc" className="zntj_dc">
                        <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
                            <Picker
                                data={datas}
                                title="请选择码头"
                                extra={this.state.title}
                                cascade={false}
                                value={this.state.pickerValue}
                                onChange={v => this.setState({ pickerValue: v })}
                                onOk={v => {
                                    this.setState({ pickerValue: v, title: v[0] }, () => this.HandleAction(v));
                                }}
                            >
                                <List.Item arrow="horizontal">请选择码头</List.Item>
                            </Picker>
                        </div>
                    </div>
                }>
                    <div style={{ background: "#f9f9f9" }}>
                        {/* <LineChart source={source} /> */}
                        <MoreCharts view={[
                            { name: 'z_chars1', tabname: '今日集装箱申报排名情况' },
                            { name: 'z_chars2', tabname: this.state.title + '进出口货物' },
                            { name: 'z_chars3', tabname: this.state.title + '暂时进出境集装箱' },
                            { name: 'z_chars4', tabname: this.state.title + '国际转运货物' }
                        ]} list={this.state.json} groupData={"jzxsbqk/showCharts"} index={this.state.index} />
                    </div>
                </GridFill>
            );
        }

    }
);
