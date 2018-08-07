import { publish } from "../../../core/arbiter";
import { Toast } from 'antd-mobile';

export default {
  namespace: "cdsbqk",
  state: {
    datas : [
      { name: 'z_chars1', tabname: '国际转运货物情况' },
      { name: 'z_chars2', tabname: '暂时进出境集装箱情况' },
      { name: 'z_chars3', tabname: '进出口货物情况' },
    ]
  },
  reducers: {
    setInfo(state, { payload }) {
      return {
        ...state,
        jsons: payload
      }
    },
    hbsetInfo(state, { payload }) {
      return {
        ...state,
        hbjsons: payload
      }
    },
  },
  effects: {
    *Query({ payload }, { put }) {
      /** 查询视图，查询所有公司名称 */
      let requestQuery = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: payload.tabName, where: payload.where } }))
      yield put({ type: 'setInfo', payload: requestQuery });
      Toast.hide();
    },
    *Query_sj({payload},{put}){
      console.log(payload);
      let requestQuery = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: payload.tabName, where: payload.where } }))
      yield put({ type: 'hbsetInfo', payload: requestQuery });
      Toast.hide();
    }
  }
};