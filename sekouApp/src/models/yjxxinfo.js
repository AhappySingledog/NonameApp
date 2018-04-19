export default {
    namespace: "yjxxinfo",
    state: { datas: {} },
    reducers: {
        setInfo(state, { payload }) {
            return {
                ...state,
                cols: payload.cols,
                datas: payload.datas,
                kfiled: payload.key,
            }
        }
    },
    effects: {
        *findTable({ payload }, { put }) {
            let json = {
                yj: {
                    title: "预警信息",
                    key: "d3",
                    cols: {
                        d1: "码头编号",
                        d2: "泊位编号",
                        d3: "箱号",
                        d4: "进场时间",
                        d5: "箱型",
                        d6: "尺寸",
                        d7: "总量",
                        d8: "进场类型",
                        d9: "船名",
                        d10: "航次"
                    },
                    datas: {
                        d1: "MCT",
                        d2: "1A",
                        d3: "SITU9029867",
                        d4: "2018-04-09 15:38:02",
                        d5: "GP",
                        d6: "40",
                        d7: "4.86",
                        d8: "S",
                        d9: "ZHEN DONG 368",
                        d10: "F180408N"
                    }
                },
                bj: {
                    title: "报警信息",
                    key: "d3",
                    cols: {
                        d1: "码头编号",
                        d2: "泊位编号",
                        d3: "箱号",
                        d4: "进场时间",
                        d5: "箱型",
                        d6: "尺寸",
                        d7: "总量",
                        d8: "进场类型",
                        d9: "船名",
                        d10: "航次"
                    },
                    datas: {
                        d1: "MCT",
                        d2: "1A",
                        d3: "SITU9029867",
                        d4: "2018-04-09 15:38:02",
                        d5: "GP",
                        d6: "40",
                        d7: "4.86",
                        d8: "S",
                        d9: "ZHEN DONG 368",
                        d10: "F180408N"
                    }
                }
            };
            let res = json[payload[1]];
            yield put({ type: "layout/Navgate", payload: res.title });
            yield put({ type: "setInfo", payload: res });
        }
    }

}