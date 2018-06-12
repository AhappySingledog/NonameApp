/** 预警详细信息展示 */
import React, { Component } from "react";
import pathToRegexp from "path-to-regexp";
import './bjxx.less';
import ReactDOM from 'react-dom';
import { connect } from "dva";
import $ from 'jquery';
import { subscribe, unsubscribe } from "../../core/arbiter";
import {
	Toast,
	ListView,
	SearchBar,
	PullToRefresh,
	Modal,
	SwipeAction,
	Picker,
	List,
	SegmentedControl
} from "antd-mobile";

function closest(el, selector) {
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
}


/** 详情 */
class Tabos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newHi: document.documentElement.clientHeight - 201,
		}
	}

	handleview(e, view) {
		if (this.oldid) {
			let oldoUl = document.getElementById(this.oldid);
			var oldchildren = oldoUl.childNodes;
			for (let i in oldchildren) {
				if (oldchildren[i].nodeType === 1) {
					oldchildren[i].style.background = '';
					oldchildren[i].style.color = '#888';
				}
			}
		}
		let oUl = document.getElementById(e);
		var children = oUl.childNodes;
		for (let i in children) {
			if (children[i].nodeType === 1) {
				this.oldid = e;
				children[i].style.background = '#39a3ef';
				children[i].style.color = 'white';
				this.props.clyjnr(view.view)
				// console.log(view);
			}
		}
	}

	render() {
		let { val = {}, title = {}, lx = {} } = this.props;
		const clyj = [{ view: "催促办理", value: '1' }, { view: "转科室办理", value: '2' }, { view: "锁柜", value: '3' },
		{ view: "锁定录证", value: '4' }, { view: "派遣无人机", value: '5' }, { view: "专员到场", value: '6' }]
		return (
			<div key="xq" className="yjxq_table" style={{ height: 500, width: '100%', overflow: 'scroll' }}>
				<div className="yjxq_table_xxxx">
					<div className="yjxq_table_xxxx_span">详细信息</div>
					<div className="yjxq_table_xxxx_glx"></div>
					{
						Object.keys(title).map((key, id) => {
							if (id > 0) {
								return (
									<div key={key}>
										<div key={id + key} className="yjxq_table_xxxx_view">
											<div>{title[key]}：</div>
											<div className="yjxq_table_xxxx_view_vla" >{val[key] || '--'}</div>
										</div>
										<div className="yjxq_table_xxxx_kg"></div>
									</div>
								)
							}
						})
					}
				</div>
				{lx == 'yj' ? <div /> : <div>
					<div className="yjxq_cglx"></div>
					<div className="yjxq_table_xxxx_span">跟进情况反馈</div>
					<div className="yjxq_table_xxxx_glx"></div>
					<div className="yjxq_btn">
						{
							clyj.map((e, i) => {
								return <div id={"btn" + i} key={e.view + i} className="yjxq_btn_view" onClick={() => this.handleview("btn" + i, e)}>
									<div className="yjxq_btn_view_bout"> {e.view} </div>
								</div>
							})
						}
					</div>
				</div>}
			</div>
		)
	}
}



export default connect(({ yjxxinfo, loading }) => ({ ...yjxxinfo }))(
	class Yjxx extends Component {
		state = {
			tableName: (window.localStorage.getItem('tableName') || ""),
			userid: (window.localStorage.getItem('userid') || ""),
			count: 2,
			dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),//规划数据
			refreshing: true,
			isLoading: true,        //是否显示加载
			height: document.documentElement.clientHeight, //屏幕高度
			useBodyScroll: false,   //加载
			PageDisplayDate: [],   //页面展示数据
			PageTitleDate: {},     //页面标题数据
			modal: false,			//控制面板详情
		}
		componentDidMount() {
			const { location, dispatch, routerData, kfiled } = this.props;
			const key = Object.keys(routerData).find(key =>
				pathToRegexp(key).test(location.pathname)
			);
			Toast.loading("", 0)
			dispatch({
				type: "yjxxinfo/findTable",
				payload: pathToRegexp(key).exec(location.pathname)
			}).then(e => {
				this.fecthData();
			});

		}

		// componentWillReceiveProps(nextPor) {
		// document.addEventListener('touchstart', function (event) {
		// 	// 判断默认行为是否可以被禁用
		// 	if (event.cancelable) {
		// 		// 判断默认行为是否已经被禁用
		// 		if (!event.defaultPrevented) {
		// 			event.preventDefault();
		// 		}
		// 	}
		// }, false);
		// }

		/** 输入框查询内容（要经过多样化的） */
		handeViewfind = (val) => {
			// Toast.fail('通宵开发中', 1)
			const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
			Toast.loading('查询中...', 0)
			let title = this.state.PageTitleDate;
			this.jsons = [];
			this.jsons = [Object.keys(title)[0]] + " = '" + val + "' or "
			Object.keys(title).map(((e, i) => { if (i < 6 && i > 0) this.jsons = this.jsons + e + " like '" + val + "%' or "; }));
			this.jsons = this.jsons + Object.keys(title)[Object.keys(title).length - 1] + " like '" + val + "%' and rownum<500";
			this.setState({ count: 2 }, () => this.props.dispatch({
				type: 'yjxxinfo/QueryXX',
				payload: {
					count: 1,
					tableName: this.state.tableName,
					jsons: this.jsons
				}
			}).then(() => {
				this.resa = this.props.newJson[0];         //支持旧数据
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(this.resa),        //分类
					height: hei,
					refreshing: false,
					isLoading: true,
					PageDisplayDate: this.props.newJson[0],
					PageTitleDate: this.props.newJson[1]
				});
			}));
		}


		/** 下拉 */
		onRefresh = () => {
			this.setState({ count: 2 }, () => this.fecthData());
		};

		/** 上拉事件 */
		onEndReached = () => {
			this.props.dispatch({
				type: this.props.newJson ? 'yjxxinfo/QueryXX' : 'yjxxinfo/QueryTable',
				payload: {
					tableName: this.state.tableName,
					count: this.state.count,
					jsons: this.jsons
				},
			}).then(e => {
				this.setState({ count: this.state.count + 1 });
				if (this.props.list.length > 0) {
					this.resa = [...this.resa, ...this.props.list[0]];
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this.resa),
						isLoading: true,
						PageDisplayDate: this.props.list[0],
					});
				} else {
					Toast.fail('没有多余的数据了！', 1);
					this.setState({ isLoading: false, });
				}
			});
		}

		/** 回滚 */
		fecthData() {
			const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
			this.props.dispatch({
				type: "yjxxinfo/QueryTable",
				payload: {
					tableName: this.state.tableName,
					count: 1
				},
			}).then(e => {
				if (this.props.list.length > 0) {
					this.resa = this.props.list[0];         //支持旧数据
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this.resa),        //分类
						height: hei,
						refreshing: false,
						isLoading: true,
						PageDisplayDate: this.props.list[0],
						PageTitleDate: this.props.list[1]
					});
				}
			});

		}

		onWrapTouchStart = (e) => {
			// fix touch to scroll background page on iOS
			if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
				return;
			}
			const pNode = closest(e.target, '.am-modal-content');
			if (!pNode) {
				e.preventDefault();
			}
		}

		/** 处理 */
		Handle = (e) => {
			if (this.clyj) {
				console.log(this.state.clsj);
				let cname = null;
				let cnum = null;
				if (this.state.clsj.CONTAINERNO) { cname = "CONTAINERNO", cnum = this.state.clsj.CONTAINERNO } else { cname = "CARNO", cnum = this.state.clsj.CONTAINERNO.CARNO }
				Toast.loading("请稍等...", 0);
				this.props.dispatch({
					type: 'yjxxinfo/QueryUser',
					payload: {
						tableName: this.state.tableName,
						HANDLER: this.state.userid,
						HANDLINGRESULT: this.clyj,
						CNAME: cname,
						CNUM: cnum
					}
				}).then(() => {
					/** 处理完成关闭面板并且回滚 */
					this.setState({ modal: false }, () => this.fecthData());
				})
			} else {
				Toast.offline('您未选择反馈意见', 1.5);
			}
		}

		handleClik(obj) {
			this.setState({ clsj: obj, modal: true });
			let cname = null;
			let cnum = null;
			if (obj.CONTAINERNO) { cname = "CONTAINERNO", cnum = obj.CONTAINERNO } else { cname = "CARNO", cnum = obj.CONTAINERNO.CARNO }
			this.props.dispatch({
				type: 'yjxxinfo/UpdateXX',
				payload: {
					tableName: this.state.tableName,
					CNAME: cname,
					CNUM: cnum
				}
			})
		}

		render() {
			let items = [];
			const clyj = ['催促办理', '转科室办理', '锁柜', '锁定录证', '派遣无人机', '专员到场'];
			let { PageDisplayDate, PageTitleDate } = this.state;
			let index = PageDisplayDate.length - 1;
			const separator = (sectionID, rowID) => (<div key={`${sectionID}-${rowID}`} style={{ backgroundColor: '#F5F5F9', height: 8, borderTop: '1px solid #ECECED', borderBottom: '1px solid #ECECED', }} />);
			const row = (rowData, sectionID, rowID) => {
				if (index < 0) index = PageDisplayDate.length - 1;
				const obj = PageDisplayDate[index--];
				return (
					<SwipeAction
						style={{ backgroundColor: 'gray' }}
						autoClose
						disabled={this.props.kfiled === 'yj' ? true : false}
						right={[
							{
								text: '反馈', onPress: () => { this.setState({ modal: true, clsj: obj }) },
								style: { backgroundColor: '#F4333C', color: 'white' },
							},
						]}
					>
						<div key={rowID} className="znyj_table">
							<div className="znyj_table_img" style={{ background: this.props.kfiled === 'yj' ? "#ffb423" : "#ff7625" }}><img src={this.props.znyj[window.localStorage.getItem('znyj_index')].img} /> </div>
							<div className="znyj_table_view">
								{
									PageDisplayDate.length > 0 ? Object.keys(PageTitleDate).map((key, id) => {
										if (id < 5) {
											return (
												<div key={id + key} className={id === 0 ? "znyj_views" : "znyj_view"} onClick={() => this.handleClik(obj)}>
													<div className="znyjTop">{PageTitleDate[key]} :</div>
													<div>{obj[key]}</div>
												</div>
											)
										}
									}) : <div />
								}
							</div>
						</div>
					</SwipeAction>
				);
			};
			items = [
				<div key="yj">
					<div className="znyj_bar">
						<SearchBar placeholder="请输入查询条件" onSubmit={value => this.handeViewfind(value)} ref={ref => this.autoFocusInst = ref} />
					</div>
					<ListView
						key={this.state.useBodyScroll}
						ref={el => this.lv = el}
						dataSource={this.state.dataSource}
						renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}> {this.state.isLoading ? '加载中...' : '暂无更多数据'} </div>)}
						renderRow={row}
						renderSeparator={separator}
						useBodyScroll={this.state.useBodyScroll}
						style={{ height: this.state.height, border: '1px solid #ddd', margin: '5px 0', }}
						pullToRefresh={<PullToRefresh refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
						onEndReached={this.onEndReached}
						pageSize={5}
					/>
					<Modal
						popup
						visible={this.state.modal}
						// transparent
						maskClosable={false}
						// title={this.props.kfiled === 'yj' ? "预警详情" : "报警处理"}
						footer={this.props.kfiled === 'yj' ? [{ text: '关闭', onPress: () => { this.setState({ modal: false }) } }] : [{ text: '关闭', onPress: () => { this.setState({ modal: false }) } }, { text: '提交', onPress: this.Handle }]}
						wrapProps={{ onTouchStart: this.onWrapTouchStart }}
						animationType="slide-up"
					>
						<Tabos lx={this.props.kfiled} val={this.state.clsj} title={this.state.PageTitleDate} clyjnr={e => { this.clyj = e }} />
					</Modal>
					<div />
				</div>
			]
			return (
				<div>
					{items}
				</div>
			)
		}
	}
)
