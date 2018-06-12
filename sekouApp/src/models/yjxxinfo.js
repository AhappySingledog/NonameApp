
import { Toast } from "antd-mobile";
import { publish } from "../core/arbiter";

const map = {
    ALTER01: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '进口集装箱到港后超7天未放行', tableName: 'V_IMAP_ALERTING_01', query: '1=1' },
    ALTER02: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '进口集装箱到港后超14天未放行', tableName: 'V_IMAP_ALERTING_02', query: '1=1' },
    ALTER03: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '进口集装箱到港后超90天未放行', tableName: 'V_IMAP_ALERTING_03', query: '1=1' },
    ALTER04: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '进口集装箱放行后超15天未提离', tableName: 'V_IMAP_ALERTING_04', query: '1=1' },
    ALTER05: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '出口集装箱进闸后超7天未放行', tableName: 'V_IMAP_ALERTING_05', query: '1=1' },
    ALTER06: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '出口集装箱进闸后超90天未放行', tableName: 'V_IMAP_ALERTING_06', query: '1=1' },
    ALTER07: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '出口集装箱放行后超10天未装船', tableName: 'V_IMAP_ALERTING_07', query: '1=1' },
    ALTER08: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '进口舱单品名含敏感词', tableName: 'V_IMAP_ALERTING_08', query: '1=1' },
    ALTER09: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '出口预配舱单品名含敏感词', tableName: 'V_IMAP_ALERTING_09', query: '1=1' },
    ALTER10: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '整船换装货物超期滞留堆场', tableName: 'V_IMAP_ALERTING_10', query: '1=1' },
    ALTER11: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '收到查验指令24小时未调入CIC', tableName: 'V_IMAP_ALERTING_11', query: '1=1' },
    ALTER12: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '调入CIC超24小时未查验', tableName: 'V_IMAP_ALERTING_12', query: '1=1' },
    ALTER12: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '查验完毕超12小时未调离CIC', tableName: 'V_IMAP_ALERTING_13', query: '1=1' },
    ALTER12: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '进口通关时效超长预警', tableName: 'V_IMAP_ALERTING_14', query: '1=1' },
    ALTER12: { svn: 'skhg_loader', svns: 'skhg_loader_service', title: '出口通关时效超长预警', tableName: 'V_IMAP_ALERTING_15', query: '1=1' },


    WARNING01: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '国际中转集装箱滞港超90天', tableName: 'IMAP_WARNING_01', query: "ISHANDLED='N'" },
    WARNING02: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '国际中转集装箱滞港超180天', tableName: 'IMAP_WARNING_02', query: "ISHANDLED='N'" },
    WARNING03: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '出口提前申报后超3天未抵运', tableName: 'IMAP_WARNING_03', query: "ISHANDLED='N'" },
    WARNING04: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '装载舱单数据发送不及时', tableName: 'IMAP_WARNING_04', query: "ISHANDLED='N'" },
    WARNING05: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '船舶离港后超24小时未发送理货报告', tableName: 'IMAP_WARNING_05', query: "ISHANDLED='N'" },
    WARNING06: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '海关未放行集装箱装船', tableName: 'IMAP_WARNING_06', query: "ISHANDLED='N'" },
    WARNING07: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '海关未放行集装箱出闸', tableName: 'IMAP_WARNING_07', query: "ISHANDLED='N'" },
    WARNING08: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '整船换装货物异常提离堆场', tableName: 'IMAP_WARNING_08', query: "ISHANDLED='N'" },
    WARNING09: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '整船换装货物异常预配载', tableName: 'IMAP_WARNING_09', query: "ISHANDLED='N'" },
    WARNING10: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '同船运输集装箱异常装卸', tableName: 'IMAP_WARNING_10', query: "ISHANDLED='N'" },
    WARNING11: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '空柜重量异常', tableName: 'IMAP_WARNING_11', query: "ISHANDLED='N'" },
    WARNING12: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '调拨车辆超时停留', tableName: 'IMAP_WARNING_12', query: "ISHANDLED='N'" },
    WARNING13: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '调拨车辆偏离路线', tableName: 'IMAP_WARNING_13', query: "ISHANDLED='N'" },
    WARNING14: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '调拨车辆运行超时', tableName: 'IMAP_WARNING_14', query: "ISHANDLED='N'" },
    WARNING15: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '散杂货异常堆放', tableName: 'IMAP_WARNING_15', query: "ISHANDLED='N'" },
    WARNING16: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '收到查验指令72小时未调入CIC', tableName: 'IMAP_WARNING_16', query: "ISHANDLED='N'" },
    WARNING17: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '查验完毕超24小时未调离CIC', tableName: 'IMAP_WARNING_17', query: "ISHANDLED='N'" },
    WARNING18: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '行政通道车辆识别异常', tableName: 'IMAP_WARNING_18', query: "ISHANDLED='N'" },
    WARNING19: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '行政通道车辆布控中控', tableName: 'IMAP_WARNING_19', query: "ISHANDLED='N'" },
    WARNING20: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '旅检船舶未审批即移泊', tableName: 'IMAP_WARNING_20', query: "ISHANDLED='N'" },
    WARNING21: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '旅检船舶夜间异常', tableName: 'IMAP_WARNING_21', query: "ISHANDLED='N'" },
    WARNING22: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '船舶抵港时间异常报警', tableName: 'IMAP_WARNING_22', query: "ISHANDLED='N'" },
    WARNING23: { svn: 'skhg_stage', svns: 'skhg_stage_service', title: '船舶离港时间异常报警', tableName: 'IMAP_WARNING_23', query: "ISHANDLED='N'" },
};
export default {
    namespace: "yjxxinfo",
    state: { datas: {}, list: null, znyj: [{ img: require('../images/znyj/yj/yj.svg') }, { img: require('../images/znyj/bj/bj.svg') }] },
    effects: {
        *findTable({ payload }, { put }) {
            let json = {
                yj: {
                    title: "预警信息",
                    key: 'yj',
                },
                bj: {
                    title: "报警信息",
                    key: 'bj',
                }
            };
            let res = json[payload[1]];
            yield put({ type: "layout/Navgate", payload: res.title });
            yield put({ type: "setInfo", payload: res });
        },
        *QueryTable({ payload }, { call, put }) {
            /** 根据当前传入过来的唯一ID，查询表数据 */
            let tab = payload.tableName;
            let count = payload.count;
            let res = yield (publish('getData', { svn: map[tab].svn, tableName: map[tab].tableName, data: { pageno: count, pagesize: 10, where: map[tab].query } }));
            if (res[0]['features'].length > 0) {
                let datas = [];
                let attr = res[0].fieldAliases;
                delete attr.MODIFIER;
                delete attr.HANDLEDTIME;
                delete attr.HANDLINGRESULT
                res[0].features.map(x => datas.push(x.attributes));
                Toast.hide();
                yield put({
                    type: 'NoData',
                    payload: [datas, attr]
                });
            } else {
                yield put({
                    type: 'NoData',
                    payload: []
                });
                Toast.offline("没有数据", 1.5);
            }
        },
        *QueryXX({ payload }, { call, put }) {
            let tab = payload.tableName;
            let count = payload.count;
            let jsons = payload.jsons;
            let res = yield (publish('getData', { svn: map[tab].svn, tableName: map[tab].tableName, data: { pageno: count, pagesize: 10, where: jsons } }));
            console.log(res);
            if (res[0]['features'].length > 0) {
                let datas = [];
                let attr = res[0].fieldAliases;
                delete attr.MODIFIER;
                delete attr.HANDLEDTIME;
                delete attr.HANDLINGRESULT
                res[0].features.map(x => datas.push(x.attributes));
                Toast.hide();
                yield put({
                    type: 'QueryXXX',
                    payload: [datas, attr]
                });
            } else {
                yield put({
                    type: 'QueryXXX',
                    payload: []
                });
                Toast.offline("没有数据", 1.5);
            }
        },
        *QueryUser({ payload }, { call, put }) {
            // publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'O_USER', where: "USERNAME = '" + payload.HANDLER + "'" } }).then(ors => {
            //     if (ors[0].data) {
            publish('webAction', {
                svn: 'skhg_stage_service', path: 'excuteSqlNoQuery', data: {
                    sql: "UPDATE " + map[payload.tableName].tableName + " SET ISHANDLED='Y', MODIFIER=" + payload.HANDLER + ", HANDLINGRESULT='" + payload.HANDLINGRESULT + "', HANDLEDTIME=SYSDATE WHERE " + payload.CNAME + "='" + payload.CNUM + "';"
                }
            }).then((res) => {
                if (res[0].success) {
                    publish('webAction', {
                        svn: 'skhg_stage_service', path: 'excuteSqlNoQuery', data: {
                            sql: "UPDATE IMAP_WARNING_NEW SET " + payload.tableName + "= " + payload.tableName + " - 1 where ISHANDLED = 'N'; UPDATE IMAP_WARNING_NEW SET " + payload.tableName + " = " + payload.tableName + " + 1 where ISHANDLED = 'Y';"
                        }
                    }).then(e =>{
                        if(e[0].success){
                            Toast.success('处理成功！', 2);
                        }
                    })
                } else {
                    Toast.fail('处理失败，请重新处理', 1);
                }
            });
            //     } else {
            //         Toast.fail('未能正确查询到当前用户，请联系管理员!', 1.5);
            //     }
            // })
        },
        *UpdateXX({ payload }, { call, put }) {
            if ((map[payload.tableName].tableName).indexOf('WARNING') > 0) {
                publish('webAction', {
                    svn: 'skhg_stage_service', path: 'excuteSqlNoQuery', data: {
                        sql: "UPDATE " + map[payload.tableName].tableName + " SET ISREADED='Y', READTIME=SYSDATE WHERE " + payload.CNAME + "='" + payload.CNUM + "'"
                    }
                }).then((res) => {
                    if (res[0].success) {
                    } else {
                        Toast.fail('详情打开失败，请联系管理员', 0);
                    }
                });
            }
        }
    },
    reducers: {
        setInfo(state, { payload }) {
            return {
                ...state,
                kfiled: payload.key,
            }
        },
        /** 整理数据  */
        NoData(state, aciton) {
            return {
                ...state,
                list: aciton.payload,
            }
        },
        /** 条件查询结果 */
        QueryXXX(state, action) {
            return {
                ...state,
                newJson: action.payload,
            }
        }
    },


}