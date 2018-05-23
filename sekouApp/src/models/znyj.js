/** 智能预警model */
import { Toast } from "antd-mobile";
import store from '../index';
import { routerRedux } from 'dva/router';
import { publish } from "../core/arbiter";

const { dispatch } = store;

export default {
    namespace: "znyj",
    state: {
        tabs: [
            {
                title: '预警', type: 'all',
                data: [
                    { num: '0', title: '未申报', botview: '还柜后超2周未申报', type: "yj", col: 'color :#FEBA56', cla: 'ALTER1', img: require("../images/znyj/yj/wsb.svg") },
                    { num: '0', title: '未放行', botview: '到港3个月未放行', type: "yj", col: 'color :#FEBA56', cla: 'ALTER2', img: require("../images/znyj/yj/wfx.svg") },
                    { num: '0', title: '未调入', botview: '在场堆积压柜未调入CIC检查', type: "yj", col: 'color :#FEBA56', cla: 'ALTER3', img: require("../images/znyj/yj/wdr.svg") },
                    { num: '0', title: '未检查', botview: 'CICI在场积压未开始查验', type: "yj", col: 'color :#FEBA56', cla: 'ALTER4', img: require("../images/znyj/yj/wcy.svg") },
                    { num: '0', title: '未离场', botview: 'CICI查验完毕未离场柜数', type: "yj", col: 'color :#FEBA56', cla: 'ALTER5', img: require("../images/znyj/yj/wlc.svg") },
                    { num: '0', title: '未提离', botview: '收到海关放行信息为提离/装船', type: "yj", col: 'color :#FEBA56', cla: 'ALTER6', img: require("../images/znyj/yj/wtl.svg") }]
            },
            {
                title: '报警', type: 'yq1',
                data: [
                    { num: '0', title: '空柜有货', botview: '空柜有货报警', type: "bj", col: 'color :#FE6668', cla: 'WARNING1', img: require("../images/znyj/bj/kgyh.svg") },
                    { num: '0', title: '监管异常', botview: '调拨通道途中监管异常报警', type: "bj", col: 'color :#FE6668', cla: 'WARNING2', img: require("../images/znyj/bj/jgyc.svg") },
                    { num: '0', title: '识别异常', botview: '行政通道车辆识别异常', type: "bj", col: 'color :#FE6668', cla: 'WARNING3', img: require("../images/znyj/bj/ycsb.svg") },
                    { num: '0', title: '异常堆放', botview: '内外贸兼营码头散杂货异常堆放', type: "bj", col: 'color :#FE6668', cla: 'WARNING4', img: require("../images/znyj/bj/ycdf.svg") },
                    { num: '0', title: '卸货报警', botview: '外贸船舶未经批准卸货', type: "bj", col: 'color :#FE6668', cla: 'WARNING5', img: require("../images/znyj/bj/xhbj.svg") },
                    { num: '0', title: '未放行出闸', botview: '海关未放行集装箱装船/出闸', type: "bj", col: 'color :#FE6668', cla: 'WARNING6', img: require("../images/znyj/bj/wfxcz.svg") },
                    { num: '0', title: '超期滞留', botview: '整船换装柜超期滞留', type: "bj", col: 'color :#FE6668', cla: 'WARNING7', img: require("../images/znyj/bj/cqdl.svg") },
                    { num: '0', title: '装配错误', botview: '整船换装柜异常装配', type: "bj", col: 'color :#FE6668', cla: 'WARNING8', img: require("../images/znyj/bj/yctl.svg") },
                    { num: '0', title: '异常提离', botview: '装船换装柜异常提离', type: "bj", col: 'color :#FE6668', cla: 'WARNING9', img: require("../images/znyj/bj/zpcw.svg") },
                    { num: '0', title: '未申报漂泊', botview: '旅检船舶未申报即漂泊', type: "bj", col: 'color :#FE6668', cla: 'WARNING10', img: require("../images/znyj/bj/wsbyb.svg") },
                    { num: '0', title: '夜间异常情况', botview: '旅检船舶夜间异常情况', type: "bj", col: 'color :#FE6668', cla: 'WARNING11', img: require("../images/znyj/bj/yjycqk.svg") },
                    { num: '0', title: '镜头故障报警', botview: '镜头故障', type: "bj", col: 'color :#FE6668', cla: 'WARNING12', img: require("../images/znyj/bj/jtgzbj.svg") }]
            },
        ],
        onGridItemClick: (e) => {
            dispatch(routerRedux.push("/znyj_xx/" + e.type + "/1"));
        },
        list: null,
    },
    effects: {
        *Query({ payload }, { call, put }) {
            let requireYJ = yield (publish('webAction', { svn: 'skhg_stage_service', path: 'queryTableByWhere', data: { tableName: 'IMAP_ALERTING' } }));
            let requireBJ = yield (publish('webAction', { svn: 'skhg_stage_service', path: 'queryTableByWhere', data: { tableName: 'IMAP_WARNING' } }));
            if (requireYJ[0].data.length > 0 && requireBJ[0].data.length > 0) {
                const yjDatas = Object.keys(requireYJ[0].attr).map(e => { return { [e]: { key: requireYJ[0].attr[e], value: requireYJ[0].data[0][e] } } });
                const bjDatas = Object.keys(requireBJ[0].attr).map(e => { return { [e]: { key: requireBJ[0].attr[e], value: requireBJ[0].data[0][e] } } });
                const datas = Object.assign(...yjDatas, ...bjDatas);
                Toast.hide();
                yield put({
                    type: 'appendList',
                    payload: datas
                });
            }
        }
    },
    reducers: {
        appendList(state, action) {
            return {
                ...state,
                list: action.payload,
            };
        },
    }
}