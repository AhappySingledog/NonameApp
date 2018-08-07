

import { Toast } from 'antd-mobile';
import { publish, subscribe } from '../core/arbiter';

/** 此处为全局model  */
export default {
  namespace: "layout",
  state: {
    title: "",
    Cdate: null,
    link: () => { }
  },
  effects: {
    /** 翻页查询出船舶数据  */
    *QueryShip({ payload }, { call, put }) {
      let json = null;    //当天数据
      let oldjson = null;  //上个月的当天数据
      let olddt = null;    //上个月的星期数据
      if (payload['Todate']) {
        let date = new Date(payload.Todate);
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let dt = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
        olddt = '' + y + (m = 0 ? m = 12 : m > 9 ? m : '0' + m) + (d > 9 ? d : '0' + d);
        json = " to_date('" + dt + "','yyyy/mm/dd')";
        oldjson = " to_date('" + olddt + "','yyyy/mm/dd') order by RECORDDATE";
      } else {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        olddt = '' + y + (m = 0 ? m = 12 : m > 9 ? m : '0' + m) + (d > 9 ? d : '0' + d);
        oldjson = " to_date('" + olddt + "','yyyy/mm/dd')";
        json = 'trunc (sysdate)';
      }
      /** 查询当天的数据 */
      let requestTodayQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: payload.tabName, data: { where: "TERMINALCODE='" + payload.type + "' AND TRUNC(RECORDDATE) = " + json } }));
      /** 查询当前星期的数据 */
      let requestToweekQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: payload.tabName, data: { where: "TERMINALCODE='" + payload.type + "' AND RECORDDATE >=(sysdate - " + [Number(new Date().getDay()) >= 1 ? new Date().getDay() : 7] + ") and RECORDDATE <= sysdate order by RECORDDATE " } }));
      /** 查询上个月当天的数据 */
      let requestOldQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: payload.tabName, data: { where: "TERMINALCODE='" + payload.type + "' AND TRUNC(RECORDDATE) = " + oldjson } }));
      /** 查询上个月的当前星期的数据  环比 */
      let requestOldToweekQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: payload.tabName, data: { where: "TERMINALCODE='" + payload.type + "' AND RECORDDATE >=(" + " to_date('" + (olddt - [Number(new Date().getDay()) - 1 <= 0 ? 6 : new Date().getDay() - 1]) + "','yyyy/mm/dd')" + ") and RECORDDATE <= " + oldjson } }));
      if (requestTodayQuery[0].features.length > 0 && requestToweekQuery[0].features.length > 0) {
        yield put({ type: 'setInfo', payload: [requestTodayQuery[0].features, ...requestToweekQuery, ...requestOldQuery, ...requestOldToweekQuery] });
        Toast.hide();
      } else {
        Toast.fail('您查询的日期没有数据！', 1.5);
        return false;
      }
    },
    *QueryBGDL({ payload }, { call, put, select }) {
      // const OtherInfo = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'HZ2011', where: " EFFECTDATE like '" + payload.year + "%' OR EFFECTDATE like '" + [payload.year - 1] + "%' " } }));
      const OtherInfo = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'HZ2011', where: payload.where } }));
      yield put({ type: 'BGDLsetInfo', payload: [...OtherInfo] });
    },
  },
  reducers: {
    Navgate(state, { payload }) {
      return {
        ...state,
        title: payload || ""
      };
    },
    /** 智能统计 --》 报关数据传输 */
    BGDLsetInfo(state, action) {
      console.log("订阅开始");
      subscribe('QueryBGDLxx', () => {
        return {
          list: action.payload,
        }
      });
      return {
        ...state,
      }
    },
    /** 智能统计 --》 码头数据传输 */
    setInfo(state, { payload }) {
      console.log("订阅开始");
      subscribe('QueryShips', () => {
        return {
          list: payload,
          today: payload[0],
          toWeek: payload[1],
          lastToday: payload[2],
          lastToweek: payload[3],
        }
      });
      return {
        ...state,
      }
    }
  },

};
