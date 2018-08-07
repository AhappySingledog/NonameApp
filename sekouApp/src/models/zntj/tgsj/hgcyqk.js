import { publish } from "../../../core/arbiter";
import { Toast } from 'antd-mobile';


export default {
    namespace: "hgcyqk",
    state: {
        datas: [
            { name: 'z_chars1', tabname: 'SCT码头' },
            { name: 'z_chars2', tabname: 'CCT_妈湾5号泊位' },
            { name: 'z_chars3', tabname: 'CCT' },
        ]
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
        *Query({ payload }, { put }) {
            let requestQuery = yield (publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'CMHIT_CCHKCHECK', where: payload.where } }))
            yield put({ type: 'setInfo', payload: requestQuery });
            Toast.hide();
        }
    }
};