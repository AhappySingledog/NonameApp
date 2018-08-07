import { publish } from "../../../core/arbiter";
import { Toast } from 'antd-mobile';

const seasons = [
  [
    { label: 'SCT', value: 'SCT', },
    { label: 'CCT', value: 'CCT', },
    { label: 'MCT', value: 'MCT', },
  ],
  [
    { label: '今日', value: '1', },
    { label: '本月', value: '2', },
  ],
];
export default {
  namespace: "jzxsbqk",
  state: {
    datas: seasons,
  },
  reducers: {
    setInfo(state, { payload }) {
      return {
        ...state,
        jsons: payload
      }
    },
  },
  effects: {
    *Query({payload},{put}){
        let requestQuery = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'CMHIT_ENTRYDOCKCONTA', where: payload.where } }))
        yield put({ type: 'setInfo', payload: requestQuery });
        Toast.hide();
    }
  }
};