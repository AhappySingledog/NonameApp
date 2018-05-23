
import { Toast } from "antd-mobile";
import { publish } from "../core/arbiter";

const map = {
    ALTER1: { svn: 'skhg_loader', svns: 'skhg_loader_service', ptah: 'queryTableByWhere', title: '还柜后超2周未申报', tableName: '', query: '1=1' },
    ALTER2: { svn: 'skhg_loader', svns: 'skhg_loader_service', ptah: 'queryTableByWhere', title: '到港3个月未放行', tableName: 'V_IMAP_SCCT_ONYARD_NOCUS90', query: '1=1' },
    ALTER3: { svn: 'skhg_loader', svns: 'skhg_loader_service', ptah: 'queryTableByWhere', title: '在场堆积压柜未调入CIC查验', tableName: '', query: '1=1' },
    ALTER4: { svn: 'skhg_loader', svns: 'skhg_loader_service', ptah: 'queryTableByWhere', title: 'CIC在场积压未开始查验', tableName: '', query: '1=1' },
    ALTER5: { svn: 'skhg_loader', svns: 'skhg_loader_service', ptah: 'queryTableByWhere', title: 'CIC查验完毕未离场柜数', tableName: '', query: '1=1' },
    ALTER6: { svn: 'skhg_loader', svns: 'skhg_loader_service', ptah: 'queryTableByWhere', title: '收到海关放行信息未提离/装船', tableName: 'V_IMAP_SCCT_ONYARD_RECCIQ', query: '1=1' },
    WARNING1: { svn: 'skhg_stage', svns: 'skhg_stage_service', ptah: 'queryTableByWhere', title: '空柜有货', tableName: 'IMAP_WARNING_LOG1', query: '1=1 and HANDLER is null ORDER BY GID ' },
    WARNING2: { svn: 'skhg_stage', svns: 'skhg_stage_service', ptah: 'queryTableByWhere', title: '调拨通道途中监管异常报警', tableName: 'IMAP_WARNING_LOG2', query: '1=1 and HANDLER is null ORDER BY GID' },
    WARNING3: { svn: 'skhg_stage', svns: 'skhg_stage_service', ptah: 'queryTableByWhere', title: '行政通道车辆识别异常报警', tableName: 'IMAP_WARNING_LOG3', query: '1=1 and HANDLER is null  ORDER BY GID' },
    WARNING10: { svn: 'skhg_stage', svns: 'skhg_stage_service', ptah: 'queryTableByWhere', title: '旅检船舶未审批即移泊', tableName: 'IMAP_WARNING_LOG10', query: '1=1 and HANDLER is null  ORDER BY GID' }
};
export default {
    namespace: "yjxxinfo",
    state: { datas: {}, list: null },
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
            // let res = yield (publish('webAction', { svn: svs, path: 'queryTableByWhere', data: { tableName: map[payload.tab].tableName, where: payload.jsons } }));
            let res = yield (publish('getData', { svn: map[tab].svn, tableName: map[tab].tableName, data: { pageno: count, pagesize: 10, where: jsons } }));
            if (res[0]['features'].length > 0) {
                let datas = [];
                let attr = res[0].fieldAliases;
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
            publish('webAction', { svn: 'skhg_loader_service', path: 'queryTableByWhere', data: { tableName: 'O_USER', where: "USERNAME = '" + payload.HANDLER + "'" } }).then(ors => {
                if (ors[0].data) {
                    publish('webAction', {
                        svn: 'skhg_stage_service', path: 'excuteSqlNoQuery', data: {
                            sql: "UPDATE " + map[payload.tableName].tableName + " SET ISHANDLED='Y', HANDLER='" + payload.HANDLER + "',USERID= '"+ ors[0].data[0].GID +"', HANDLINGRESULT='" + payload.HANDLINGRESULT + "', HANDLINGTIME=SYSDATE WHERE GID=" + payload.GID
                        }
                    }).then((res) => {
                        if (res[0].success) {
                            Toast.success('处理成功！', 2)
                        } else {
                            Toast.fail('处理失败，请重新处理', 1);
                        }
                    });
                } else {
                    Toast.fail('未能正确查询到当前用户，请联系管理员!', 1.5);
                }
            })
        },
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