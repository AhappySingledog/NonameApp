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
                    { num: '0', title: '进口7天未放行', botview: '进口集装箱到港后超7天未放行', type: "yj", col: 'color :#FEBA56', cla: 'ALTER01', img: require("../images/znyj/yj/wsb.svg") },
                    { num: '0', title: '进口14天未放行', botview: '进口集装箱到港后超14天未放行', type: "yj", col: 'color :#FEBA56', cla: 'ALTER02', img: require("../images/znyj/yj/wfx.svg") },
                    { num: '0', title: '进口90天未放行', botview: '进口集装箱到港后超90天未放行', type: "yj", col: 'color :#FEBA56', cla: 'ALTER03', img: require("../images/znyj/yj/wdr.svg") },
                    { num: '0', title: '进口14天未提离', botview: '进口集装箱放行后超15天未提离', type: "yj", col: 'color :#FEBA56', cla: 'ALTER04', img: require("../images/znyj/yj/wcy.svg") },
                    { num: '0', title: '出口7天未放行', botview: '出口集装箱进闸后超7天未放行', type: "yj", col: 'color :#FEBA56', cla: 'ALTER05', img: require("../images/znyj/yj/wlc.svg") },
                    { num: '0', title: '出口超90天未放行', botview: '出口集装箱进闸后超90天未放行', type: "yj", col: 'color :#FEBA56', cla: 'ALTER06', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '出口超10天未装船', botview: '出口集装箱放行后超10天未装船', type: "yj", col: 'color :#FEBA56', cla: 'ALTER07', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '进口含敏感词', botview: '进口舱单品名含敏感词', type: "yj", col: 'color :#FEBA56', cla: 'ALTER08', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '出口含敏感词', botview: '出口预配舱单品名含敏感词', type: "yj", col: 'color :#FEBA56', cla: 'ALTER09', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '超期滞留堆场', botview: '整船换装货物超期滞留堆场', type: "yj", col: 'color :#FEBA56', cla: 'ALTER10', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '未调入', botview: '收到查验指令24小时未调入CIC', type: "yj", col: 'color :#FEBA56', cla: 'ALTER11', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '未查验', botview: '调入CIC超24小时未查验', type: "yj", col: 'color :#FEBA56', cla: 'ALTER12', img: require("../images/znyj/yj/wtl.svg") },
                    { num: '0', title: '未调离', botview: '查验完毕超12小时未调离CIC', type: "yj", col: 'color :#FEBA56', cla: 'ALTER13', img: require("../images/znyj/yj/wtl.svg") },
                ]
            },
            {
                title: '报警', type: 'yq1',
                data: [
                    { num: '0', title: '滞港超90天', botview: '国际中转集装箱滞港超90天', type: "bj", col: 'color :#FE6668', cla: 'WARNING01', img: require("../images/znyj/bj/kgyh.svg") },
                    { num: '0', title: '滞港超180天', botview: '国际中转集装箱滞港超180天', type: "bj", col: 'color :#FE6668', cla: 'WARNING02', img: require("../images/znyj/bj/jgyc.svg") },
                    { num: '0', title: '出口提前申报后超3天未抵运', botview: '出口提前申报后超3天未抵运', type: "bj", col: 'color :#FE6668', cla: 'WARNING03', img: require("../images/znyj/bj/ycsb.svg") },
                    { num: '0', title: '装载舱单数据发送不及时', botview: '装载舱单数据发送不及时', type: "bj", col: 'color :#FE6668', cla: 'WARNING04', img: require("../images/znyj/bj/ycdf.svg") },
                    { num: '0', title: '船舶离港后超24小时未发送理货报告', botview: '船舶离港后超24小时未发送理货报告', type: "bj", col: 'color :#FE6668', cla: 'WARNING05', img: require("../images/znyj/bj/xhbj.svg") },
                    { num: '0', title: '海关未放行集装箱装船', botview: '海关未放行集装箱装船', type: "bj", col: 'color :#FE6668', cla: 'WARNING06', img: require("../images/znyj/bj/wfxcz.svg") },
                    { num: '0', title: '海关未放行集装箱出闸', botview: '海关未放行集装箱出闸', type: "bj", col: 'color :#FE6668', cla: 'WARNING07', img: require("../images/znyj/bj/cqdl.svg") },
                    { num: '0', title: '整船换装货物异常提离堆场', botview: '整船换装货物异常提离堆场', type: "bj", col: 'color :#FE6668', cla: 'WARNING08', img: require("../images/znyj/bj/yctl.svg") },
                    { num: '0', title: '整船换装货物异常预配载', botview: '整船换装货物异常预配载', type: "bj", col: 'color :#FE6668', cla: 'WARNING09', img: require("../images/znyj/bj/zpcw.svg") },
                    { num: '0', title: '同船运输集装箱异常装卸', botview: '同船运输集装箱异常装卸', type: "bj", col: 'color :#FE6668', cla: 'WARNING10', img: require("../images/znyj/bj/wsbyb.svg") },
                    { num: '0', title: '空柜重量异常', botview: '空柜重量异常', type: "bj", col: 'color :#FE6668', cla: 'WARNING11', img: require("../images/znyj/bj/yjycqk.svg") },
                    { num: '0', title: '调拨车辆超时停留', botview: '调拨车辆超时停留', type: "bj", col: 'color :#FE6668', cla: 'WARNING12', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '调拨车辆偏离路线', botview: '调拨车辆偏离路线', type: "bj", col: 'color :#FE6668', cla: 'WARNING13', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '调拨车辆运行超时', botview: '调拨车辆运行超时', type: "bj", col: 'color :#FE6668', cla: 'WARNING14', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '散杂货异常堆放', botview: '散杂货异常堆放', type: "bj", col: 'color :#FE6668', cla: 'WARNING15', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '收到查验指令72小时未调入CIC', botview: '收到查验指令72小时未调入CIC', type: "bj", col: 'color :#FE6668', cla: 'WARNING16', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '查验完毕超24小时未调离CIC', botview: '查验完毕超24小时未调离CIC', type: "bj", col: 'color :#FE6668', cla: 'WARNING17', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '行政通道车辆识别异常', botview: '行政通道车辆识别异常', type: "bj", col: 'color :#FE6668', cla: 'WARNING18', img: require("../images/znyj/bj/jtgzbj.svg") },
                    { num: '0', title: '行政通道车辆布控中控', botview: '行政通道车辆布控中控', type: "bj", col: 'color :#FE6668', cla: 'WARNING19', img: require("../images/znyj/bj/jtgzbj.svg") },
                ]
            },
        ],
        onGridItemClick: (e) => {
            dispatch(routerRedux.push("/znyj_xx/" + e.type + "/1"));
        },
        list: {},
    },
    effects: {
        *Query({ payload }, { call, put }) {
            let requireYJ = yield (publish('webAction', { svn: 'skhg_stage_service', path: 'queryTableByWhere', data: { tableName: 'IMAP_ALERTING_NEW' } }));
            let requireBJ = yield (publish('webAction', { svn: 'skhg_stage_service', path: 'queryTableByWhere', data: { tableName: 'IMAP_WARNING_NEW' } }));
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