import { Toast } from 'antd-mobile';
import { publish } from "../core/arbiter";

export default {
  namespace: 'mtjzxxq',
  state: {
    tabs: [
      {
        title: 'SCT', type: 'SCT',
        datas: [
          { name: 'z_chars2', tabname: '近一周进闸情况' },
          { name: 'y_chars2', tabname: '近一周出闸情况' },
          { name: 'v_chars2', tabname: '近一周装船情况' },
          { name: 'b_chars2', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '出闸数量', img: require("../images/zntj/jcg/cg.svg") },
          { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
      {
        title: 'CCT', type: 'CCT',
        datas: [
          { name: 'z_chars3', tabname: '近一周进闸情况' },
          { name: 'y_chars3', tabname: '近一周出闸情况' },
          { name: 'v_chars3', tabname: '近一周装船情况' },
          { name: 'b_chars3', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '出闸数量', img: require("../images/zntj/jcg/cg.svg") },
          { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
      {
        title: 'MCT', type: 'MCT',
        datas: [
          { name: 'z_chars4', tabname: '近一周进闸情况' },
          { name: 'y_chars4', tabname: '近一周出闸情况' },
          { name: 'v_chars4', tabname: '近一周装船情况' },
          { name: 'b_chars4', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '出闸数量', img: require("../images/zntj/jcg/cg.svg") },
          { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
    ]
  },

  effects: {
    /** 重复查询船舶、箱子、车辆数据  */
    *QueryShip({ payload }, { call, put }) {
      let json = null;    //当天数据
      let oldjson = null;  //上个月的当天数据
      let olddt = null;    //上个月的星期数据
      if (payload.Todate) {
        let date = new Date(payload.Todate);
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let dt = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
        olddt = '' + y + (m = 0 ? m = 12 : m > 9 ? m : '0' + m) + (d > 9 ? d : '0' + d);
        json = " to_date('" + dt + "','yyyy/mm/dd')";
        oldjson = " to_date('" + olddt + "','yyyy/mm/dd')";
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
      let requestTodayQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: 'SCCT_DATA', data: { where: "TERMINALCODE='" + payload.type + "' AND TRUNC(RECORDDATE) = " + json } }));
      /** 查询当前星期的数据 */
      let requestToweekQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: 'SCCT_DATA', data: { where: "TERMINALCODE='" + payload.type + "' AND RECORDDATE >=(sysdate - " + [Number(new Date().getDay()) > 1 ? new Date().getDay() : 7] + ") and RECORDDATE <= sysdate " } }));
      /** 查询上个月当天的数据 */
      let requestOldQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: 'SCCT_DATA', data: { where: "TERMINALCODE='" + payload.type + "' AND TRUNC(RECORDDATE) = " + oldjson } }));
      /** 查询上个月的当前星期的数据  环比 */
      let requestOldToweekQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: 'SCCT_DATA', data: { where: "TERMINALCODE='" + payload.type + "' AND RECORDDATE >=(" + " to_date('" + (olddt - [Number(new Date().getDay()) - 1 < 0 ? 6 : new Date().getDay() - 1]) + "','yyyy/mm/dd')" + ") and RECORDDATE <= " + oldjson } }));
      if (requestTodayQuery[0].features.length > 0 && requestToweekQuery[0].features.length > 0) {
        yield put({ type: 'setInfo', payload: [requestTodayQuery[0].features, ...requestToweekQuery, ...requestOldQuery, ...requestOldToweekQuery] });
        Toast.hide();
      } else {
        Toast.fail('您查询的日期没有数据！', 1.5);
        return false;
      }
    }
  },
  reducers: {
    setInfo(state,{payload}){
      return {
        ...state,
        list : payload,
        today: payload[0],
        toWeek: payload[1],
        lastToday: payload[2],
        lastToweek: payload[3],
      }
    }
  },
};