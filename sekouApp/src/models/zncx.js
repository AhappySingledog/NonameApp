import store from "../index";
import { routerRedux } from "dva/router";
import { publish } from "../core/arbiter";
import $ from 'jquery';
const { dispatch } = store;

export default {
  namespace: "zncx",
  state: {
    tabs: [
      {
        title: "船舶信息", type: "cbxx", tablename: 'V_IMAP_SCCT_BERTH', icon: require('../images/zncx/船舶信息.svg'),
      },
      {
        title: "提单信息", type: "tdxx", tablename: '', icon: require('../images/zncx/提单信息.svg'),
      },
      {
        title: "集装箱信息", type: "jzxxx", tablename: 'V_IMAP_SCCT_ONYARD', icon: require('../images/zncx/集装箱信息.svg'),
      },
      {
        title: "车辆信息", type: "clxx", tablename: '', icon: require('../images/zncx/车辆信息.svg'),
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
      responseCXJG[0].features.map(x => datas.push(x.attributes));
      yield put({
        type: 'appendList',
        payload: [datas, responseCXBM] ? [datas, responseCXBM] : [],
      });
    },
    *jzxxx({ payload }, { call, put }) {
      let responseCXJZXXX = yield (publish('webAction', { svn: 'eportapisct', path: 'GContainerInfo', data: { System: '', PageIndex: 1, PageSize: 30, SortBy: '', IsDescending: false, ContainerNo: payload.num } }));
      let responseCXBM = yield (publish('tableName_find'));
      yield put({
        type: 'QueryJZX',
        payload: [responseCXJZXXX, responseCXBM]
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
    }
  }
};
