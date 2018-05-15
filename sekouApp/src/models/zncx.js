import store from "../index";
import { routerRedux } from "dva/router";
import { publish } from "../core/arbiter";
import { Toast } from "antd-mobile";
const { dispatch } = store;

export default {
	namespace: "zncx",
	state: {
		tabs: [
			{
				title: "船舶信息", type: "cbxx", tablename: 'V_IMAP_SCCT_BERTH', icon: require('../images/zncx/cbxx.svg'),
			},
			{
				title: "提单信息", type: "tdxx", tablename: '', icon: require('../images/zncx/tdxx.svg'),
			},
			{
				title: "集装箱信息", type: "jzxxx", tablename: 'V_IMAP_SCCT_ONYARD', icon: require('../images/zncx/jzxxx.svg'),
			},
			{
				title: "车辆信息", type: "clxx", tablename: '', icon: require('../images/zncx/clxx.svg'),
			}
		],
		itemClick: (obj, lx, idx) => {
			dispatch(routerRedux.push("/zncx_xx/" + lx + "/1"));
		},
		list: [],
		jzxxx: [],
	},
	effects: {
		*fetch({ payload }, { call, put }) {
			let datas = [];
			datas.splice(0, datas.length);
			let responseCXJG = yield (publish('getData', { svn: 'skhg_loader', tableName: payload.tablename, data: { pageno: payload.count, pagesize: 10, where: payload.value ? "TERMINALCODE like '%" + payload.value + "'" : "1=1" } }));
			let responseCXBM = yield (publish('tableName_find'));
			if (responseCXJG[0]['features'].length > 0) {
				responseCXJG[0].features.map(x => datas.push(x.attributes));
				yield put({
					type: 'appendList',
					payload: [datas, responseCXBM] ? [datas, responseCXBM] : [],
				});
			}else{
				yield put({
					type: 'appendList',
					payload: ''
				});
				Toast.offline("没有数据", 3);
			}
		},
		*jzxxx({ payload }, { call, put }) {
			let responseCXJZXXX = yield (publish('webAction', { svn: 'eportapisct', path: 'GContainerInfo', data: { System: '', PageIndex: 1, PageSize: 30, SortBy: '', IsDescending: false, ContainerNo: payload.num } }));
			let responseCXBM = yield (publish('tableName_find'));
			if (responseCXJZXXX[0].InnerList.length > 0) {
				let attr = responseCXBM[0]['jzxzsxx'];
				let datas = Object.keys(attr).map((e) => { return { key: attr[e], value: responseCXJZXXX[0].InnerList[0][e] } });
				yield put({
					type: 'QueryJZX',
					payload: datas
				});
			} else {
				yield put({
					type: 'QueryJZX',
					payload: ''
				});
				Toast.offline("没有数据", 3);
			}
		},
		*cbxx({ payload }, { call, put }) {
			let pa = [{ paramName: 'P_TERMINALCODE', value: payload.mt, },
			{ paramName: 'P_IMO', value: payload.imo, },
			{ paramName: 'P_BUSINESSVOY', value: payload.hc }];
			let res = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryPro', data: { proName: 'P_IMAP_SCCT_SHIPSCHEDULE', parms: JSON.stringify(pa) } }));
			if (res[0].data.length > 0) {
				let attr = res[0].attr;
				let datas = Object.keys(attr).map((e) => { return { key: attr[e], value: res[0].data[0][e] } });
				yield put({
					type: 'QueryJZX',
					payload: datas
				});
			} else {
				yield put({
					type: 'QueryJZX',
					payload: ''
				});
				Toast.offline("没有数据", 3);
			}
		},
		*tdxx({ payload }, { call, put }) {
			let responseCXJZXXX = yield (publish('webAction', { svn: 'eportapisct', path: 'GContainerHistoryInfo', data: { System: '', PageIndex: 1, PageSize: 30, SortBy: '', IsDescending: false, ContainerNo: payload.num } }));
			let responseCXBM = yield (publish('tableName_find'));
			if (responseCXJZXXX[0].InnerList.length > 0) {
				let attr = responseCXBM[0]['jzxlsgj'];
				let datas = [];
				for (let o in responseCXJZXXX[0].InnerList) {
					datas.push(Object.keys(attr).map((e) => { return { key: attr[e], value: responseCXJZXXX[0].InnerList[o][e] } }));
				}
				yield put({
					type: 'QueryJZX',
					payload: datas
				});
			} else {
				yield put({
					type: 'QueryJZX',
					payload: ''
				});
				Toast.offline("没有数据", 3);
			}
		},
		*clear({ payload }, { call, put }) {
			yield put({
				type: 'QueryJZX',
				payload: ''
			});
		}
	},
	reducers: {
		appendList(state, action) {
			return {
				...state,
				list: action.payload,
			};
		},
		QueryJZX(state, aciton) {
			return {
				...state,
				jzxxx: aciton.payload,
			}
		},

	}
};
