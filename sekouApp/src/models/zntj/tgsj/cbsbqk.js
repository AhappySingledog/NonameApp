
import {Toast} from 'antd-mobile';
import { publish } from "../../../core/arbiter";

export default {
  namespace: "cbsbqk",
  state: {
  },
  reducers: {
    hbsetInfo(state, { payload }) {
      return {
        ...state,
        hbjsons: payload
      }
    }
  },
  effects: {
    *Query_ShipName({ payload }, { put }) {
      let requestQuery = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'CMHIT_ENTRYSHIP', where: payload } }))
      yield put({ type: 'hbsetInfo', payload: requestQuery });
      Toast.hide();
    }
  }
};