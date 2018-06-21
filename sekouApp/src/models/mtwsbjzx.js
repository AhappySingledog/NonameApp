import { Toast } from 'antd-mobile';
import { publish } from "../core/arbiter";

const datas = [
  { label: "本月", value: 1 },
  { label: "今年", value: 2 },
];

export default {
  namespace: "mtwsbjzx",
  state: {
    datas: datas,
    data: [datas[0].value],
    tabs: [
      // {
      //   title: '全部', type: 'all',
      //   datas: [
      //     { name: 'z_chars1', tabname: '各码头近一年超过三个月未放行的集装箱同环比情况' },
      //   ],
      // },
      {
        title: '超三个月未放行的集装箱', type: 'SCT',
        datas: [
          { name: 'z_chars2', tabname: '各码头超过三个月未放行的集装箱情况' },
        ],
      },
      // {
      //   title: 'CCT', type: 'CCT',
      //   datas: [
      //     { name: 'z_chars3', tabname: 'CCT超过三个月未放行的集装箱同环比情况' },
      //   ],
      // },
      // {
      //   title: 'MCT', type: 'MCT',
      //   datas: [
      //     { name: 'z_chars4', tabname: 'MCT超过三个月未放行的集装箱同环比情况' },
      //   ],
      // }
    ],
    // source: [
    //   {
    //     headTitle: '本月各码头超过三个月未放行的集装箱情况',
    //     items: [
    //       { title: "SCT", vl: "52%", value: "520" },
    //       { title: "CCT", vl: "30%", value: "300" },
    //       { title: "MCT", vl: "18%", value: "180" }
    //     ]
    //   }
    // ]
  },
  effects: {
    /** 重复查询船舶、箱子、车辆数据  */
    *QueryShip({ payload }, { call, put }) {
      let json = null;
      let oldjson = null;
      let olddt = null;
      if (payload.Todate) {
        let date = new Date(payload.Todate);
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let dt = '' + y + (m + 1 > 9 ? m + 1 : '0' + (m + 1)) + (d > 9 ? d : '0' + d);
        olddt = '' + y + (m = 0 ? m = 12 : m) + (d > 9 ? d : '0' + d);
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
      let requestTodayQuery = yield (publish('getData', { svn: 'skhg_stage', tableName: 'SCCT_DATA', data: { where: "TRUNC(RECORDDATE) = " + json } }));
      if (requestTodayQuery[0].features.length > 0) {
        yield put({ type: 'RdShip', payload: [requestTodayQuery[0]] })
        Toast.hide();
      } else {
        Toast.fail('您查询的日期没有数据！', 1.5);
        return false;
      }
    }
  },
  reducers: {
    RdShip(state, action) {
      return {
        ...state,
        list: action.payload
      }
    }
  },
};