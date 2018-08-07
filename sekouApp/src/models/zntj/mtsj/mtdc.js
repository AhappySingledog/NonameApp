import { Toast } from 'antd-mobile';
import { publish } from '../../../core/arbiter';

export default {
    namespace: 'mtdc',
    state: {
      tabs: [
        // {
        //   title: '全部', type: 'all',
        //   datas: [
        //     { name: 'z_chars1', tabname: '近一周空箱情况' },
        //     { name: 'y_chars1', tabname: '近一周重箱情况' },
        //     { name: 'v_chars1', tabname: '近一周危险品箱情况' },
        //   ],
        //   data: [
        //     { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../../images/zntj/jcg/jg.svg") },
        //     { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '重箱数量', img: require("../../images/zntj/jcg/cg.svg") },
        //     { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../../images/zntj/jcg/jg.svg") },
        //   ]
        // },
        {
          title: 'SCT', type: 'SCT',
          datas: [
            { name: 'z_chars2', tabname: '近一周空箱情况' },
            { name: 'y_chars2', tabname: '近一周重箱情况' },
            { name: 'v_chars2', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../../../images/zntj/jcg/jg.svg") },
            { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '重箱数量',  img: require("../../../images/zntj/jcg/cg.svg") },
            { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../../../images/zntj/jcg/jg.svg") },
          ]
        },
        {
          title: 'CCT', type: 'CCT',
          datas: [
            { name: 'z_chars3', tabname: '近一周空箱情况' },
            { name: 'y_chars3', tabname: '近一周重箱情况' },
            { name: 'v_chars3', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../../../images/zntj/jcg/jg.svg") },
            { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '重箱数量',  img: require("../../../images/zntj/jcg/cg.svg") },
            { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../../../images/zntj/jcg/jg.svg") },
          ]
        },
        {
          title: 'MCT', type: 'MCT',
          datas: [
            { name: 'z_chars4', tabname: '近一周空箱情况' },
            { name: 'y_chars4', tabname: '近一周重箱情况' },
            { name: 'v_chars4', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../../../images/zntj/jcg/jg.svg") },
            { val: 0, hb: 0, zb: 'up', cb: 'jg', name: '重箱数量',  img: require("../../../images/zntj/jcg/cg.svg") },
            { val: 0, hb: 0, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../../../images/zntj/jcg/jg.svg") },
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