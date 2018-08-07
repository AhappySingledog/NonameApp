import { publish } from "../../../core/arbiter";
import { Toast } from 'antd-mobile';

export default {
    namespace: "yqcl",
    state: {
        datas: [{ name: 'z_chars1', tabname: '近一周进闸车辆变化' }],
        // tabs: [
        //     {
        //         title: '全部', type: 'all',
        //         datas: [{ name: 'z_chars1' , tabname: '今日园区库存量占比情况'},
        //              { name: 'x_chars2' , tabname: '今日园区库存量占比情况'}],
        //         data: [
        //             { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../../../images/zntj/jcg/jg.svg") },
        //             { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../../../images/zntj/jcg/cg.svg") }]
        //     },
        //     {
        //         title: '园区1', type: 'yq1',
        //         datas: [{ name: 'z_chars3', tabname: '近一周进闸车辆变化' }, { name: 'x_chars4' , tabname: '近一周出闸车辆变化'}],
        //         data: [
        //             { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../../../images/zntj/jcg/jg.svg") },
        //             { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../../../images/zntj/jcg/cg.svg") }]
        //     },
        //     {
        //         title: '园区2', type: 'yq2',
        //         datas: [{ name: 'z_chars5', tabname: '近一周进闸车辆变化' }, { name: 'x_chars6', tabname: '近一周出闸车辆变化' }],
        //         data: [
        //             { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../../../images/zntj/jcg/jg.svg") },
        //             { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../../../images/zntj/jcg/cg.svg") }]
        //     },
        //     {
        //         title: '园区3', type: 'yq3',
        //         datas: [{ name: 'z_chars7', tabname: '近一周进闸车辆变化' }, { name: 'x_chars8' , tabname: '近一周出闸车辆变化'}],
        //         data: [
        //             { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../../../images/zntj/jcg/cg.svg") },
        //             { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../../../images/zntj/jcg/cg.svg") }]
        //     }
        // ],
    },
    reducers: {
        setInfo(state, { payload }) {
            return {
                ...state,
                jsons: payload
            }
        },
        select(state, {
            payload
        }) {
            return {
                ...state,
                data: payload,
            };
        }
    },
    effects: {
        *Query_Info({ payload }, { put }) {
            let queyrCompany = yield (publish('webAction', { svn: 'skhg_stage_service', path: 'queryTableByWhere', data: { tableName: 'CMBL_2RD', where: payload.where } }));
            yield put({ type: 'setInfo', payload: queyrCompany });
            Toast.hide();
        }
    },
    subscriptions: {
    },
}