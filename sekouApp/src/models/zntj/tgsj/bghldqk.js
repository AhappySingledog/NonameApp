import { publish } from "../../../core/arbiter";
import { Toast } from 'antd-mobile';
export default {
  namespace: "bghldqk",
  state: {

    datas : [
      { name: 'z_chars1', tabname: '报关行录单进出口申报提单数据排名情况' },
      { name: 'z_chars2', tabname: '进出口申报提单数据' },
      { name: 'z_chars3', tabname: '统计小时数' },
    ],
  },
  reducers: {
    select(state, { payload }) {
      return {
        ...state,
        data: payload,
        source: [
          {
            headTitle: '本周报关行录单占比情况',
            items: [
              { title: "年占比", vl: "8%", value: "2300" }
            ]
          }
        ]
      };
    },
    setInfo(state, { payload }) {
      return {
        ...state,
        jsons: payload
      }
    },
    HBsetInfo(state, { payload }) {
      return {
        ...state,
        HBjsons: payload
      }
    },
  },
  effects: {
    *Query_company({ payload }, { put }) {
      let queyrCompany = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'V_IMAP_ENTRYBGHBILL', where: payload.where } }));
      yield put({ type: 'setInfo', payload: queyrCompany });
      Toast.hide();
    },
    *Query_Info({ payload }, { put }) {
      let queyrCompany = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'CMHIT_ENTRYBGHBILL', where: payload.where } }));
      yield put({ type: 'HBsetInfo', payload: queyrCompany });
      Toast.hide();
    }
  }
};