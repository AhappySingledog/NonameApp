import ReactDOM from "react-dom";
import { SegmentedControl, SearchBar, Toast } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { Chart, HeaderFill, LineChart, GridFill, MoreCharts } from "../../componets";
import "./bghldqk.less";


function jsonTodate(e) {
	let data = new Date();
	let date = null;
	if (e == '0') {
		const y = data.getFullYear();
		const m = data.getMonth();
		const d = data.getDate();
		date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
	} else if (e == '1') {
		const y = data.getFullYear();
		const m = data.getMonth();
		date = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1));
	} else if (e == '2') {
		const y = data.getFullYear();
		date = '' + y;
	}
	return date;
}

export default connect(({ bghldqk, loading }) => ({ ...bghldqk }))(
	class Bghldqk extends Component {
		state = {
			inex: 0,
			title: '',				//标题名称
			company: {},             //公司名称
			show: false,			//隐藏下拉框
			options: [],			//输入框的值

		}
		componentDidMount() {
			this.props.dispatch({
				type: 'bghldqk/Query_company',
				payload: {
					where: '1=1'
				}
			}).then(e => {
				this.setState({ company: this.props.jsons });
				const payload = {
					where: "STATISTICSDATE = '" + jsonTodate(this.state.inex) + "' and ROWNUM < 10 order by to_number(NUM) DESC",
					// where: "STATISTICSDATE = '20180522' and ROWNUM < 10 order by to_number(NUM) DESC",
				};
				this.HandleAction(payload);
			})
		}

		/** 日 月 年 切换 */
		onchange = (e) => {
			Toast.loading('正在查询中...', 0);
			this.setState({ inex: e.nativeEvent.selectedSegmentIndex }, () => {
				const xzsj = {
					0: " BGHNAME like '%" + this.state.title + "%' AND STATISTICSDATE = '20180522' and ROWNUM < 10 order by to_number(NUM) DESC",
					1: " BGHNAME like '%" + this.state.title + "%' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' and ROWNUM < 10 order by to_number(NUM) DESC",
					2: " BGHNAME like '%" + this.state.title + "%' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' and ROWNUM < 10 order by to_number(NUM) DESC",
				};
				const payload = {
					where: xzsj[this.state.inex]
				};
				this.HandleAction(payload);
			})
		}

		componentWillUnmount() {
			if (this.chart1) this.chart1.destroy();
			if (this.chart2) this.chart2.destroy();
		}


		/** 输入框模糊查询 */
		handleChange(e) {
			if (e.length > 0) {
				let mhcx = [];
				for (let i in this.state.company[0].data) {
					if ((this.state.company[0].data[i].BGHNAME).indexOf(e) >= 0) {
						mhcx.push(this.state.company[0].data[i])
					}
				};
				if (mhcx.length > 0) {
					this.setState({ options: mhcx, show: true })
				};
			}
		}

		/** 下拉框点击事件 */
		handelUlOnclick = (e) => {
			Toast.loading('正在查询...', 0);
			this.setState({ title: e.target.innerHTML }, () => {
				const xzsj = {
					0: "BGHNAME = '" + this.state.title + "' AND STATISTICSDATE = '" + jsonTodate(this.state.inex) + "' order by STATISTICSDATE",
					1: "BGHNAME = '" + this.state.title + "' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by STATISTICSDATE",
					2: "BGHNAME = '" + this.state.title + "' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by STATISTICSDATE",
				};
				const payload = {
					where: xzsj[this.state.inex]
				};
				this.HandleAction(payload);
				this.setState({ show: false, options: [] });
			});
		}


		/** 查询输入框 Enter提交 */
		onSubmits = (e) => {
			Toast.loading('正在查询...', 0);
			const xzsj = {
				0: "BGHNAME = '" + e + "' AND STATISTICSDATE = '" + jsonTodate(this.state.inex) + "' order by STATISTICSDATE",
				1: "BGHNAME = '" + e + "' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by STATISTICSDATE",
				2: "BGHNAME = '" + e + "' AND STATISTICSDATE like '" + jsonTodate(this.state.inex) + "%' order by STATISTICSDATE",
			};
			const payload = {
				where: xzsj[this.state.inex]
			};
			this.HandleAction(payload);
		}

		/** 按钮清除 ： 取消  事件 */
		handleOnclearn = () => {
			this.setState({ show: false, options: [], title: '' },() =>{
				const payload = {
					where: "STATISTICSDATE = '" + jsonTodate(this.state.inex) + "' and ROWNUM < 10 order by to_number(NUM) DESC",
					// where: "STATISTICSDATE = '20180522' and ROWNUM < 10 order by to_number(NUM) DESC",
				};
				this.HandleAction(payload);
			});
		}

		HandleAction = (payload) => {
			this.props.dispatch({
				type: 'bghldqk/Query_Info',
				payload: payload
			}).then(e => {
				if (this.props.HBjsons[0].data.length < 1) { Toast.offline('未查询到数据', 1.5) };
				let pmqk = [[], [], [], [], []];
				for (let i in this.props.HBjsons[0].data) {
					pmqk[0].push(this.props.HBjsons[0].data[i]['NUM']);
					pmqk[1].push((this.props.HBjsons[0].data[i]['BGHNAME']).replace('深圳市', '').replace('代理有限公司', '').replace('有限公司', ''));
					pmqk[2].push(this.props.HBjsons[0].data[i]['STATISTICSHOUR'])
					pmqk[3].push(this.props.HBjsons[0].data[i]['STATISTICSDATE']);
				};
				pmqk[4].push(this.state.title == '' ? 0 : 1);
				this.setState({ json: pmqk });
			})
		}


		render() {
			let { datas } = this.props;
			const { show, options ,title } = this.state;
			return (
				<GridFill header={
					<div key="wc" className="zntj_dc">
						<div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
							<SegmentedControl values={['今日', '本月', '本年']} selectedIndex={this.state.inex} onChange={this.onchange} />
						</div>
						<div className="wrapper">
							<SearchBar
								placeholder="输入公司可单独查询"
								showCancelButton={true}
								cancelText={'重置'}
								maxLength={32}
								onFocus={v => { this.setState({ show: false, options: false }) }}
								onChange={v => this.handleChange(v)}
								onSubmit={v => this.onSubmits(v)}
								onCancel={this.handleOnClearn}
								onClear={this.handleOnclearn} />
							{
								show === true && options.length > 0 ? <ul className={"ulOptions"}>
									{
										options.map((item, index) => {
											return (
												<li key={index} className="ulOptions_active" onClick={this.handelUlOnclick} >
													{item.BGHNAME}
												</li>
											)
										})
									}
								</ul> : <div />
							}
						</div>
						<div>

						</div>
					</div>
				}>
					<div style={{ background: "#f9f9f9" }}>
						<MoreCharts view={title.length > 0 ? [
							{ name: datas[1].name, tabname: title + datas[1].tabname },
							{ name: datas[2].name, tabname: title + datas[2].tabname }] :
							[
								{ name: datas[0].name, tabname: title + datas[0].tabname },
								{ name: datas[1].name, tabname: title + datas[1].tabname },
								{ name: datas[2].name, tabname: title + datas[2].tabname }]
						} list={this.state.json} groupData={"bghldqk/showCharts"} index={this.state.index} />
					</div>
				</GridFill>
			);
		}

	}
);
