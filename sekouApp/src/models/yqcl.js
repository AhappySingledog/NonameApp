import { GET } from '../servers/restful';

export default {
    namespace: "yqcl",
    state: {
        tabs: [{
            title: '全部',
            type: 'all',
            data: {
                jg: {
                    val: 203,
                    hb: 5,
                    zb: 'down'
                },
                cg: {
                    val: 320,
                    hb: 7,
                    zb: 'up'
                }
            }
        },
        {
            title: '园区1',
            type: 'yq1',
            data: {
                jg: {
                    val: 35,
                    hb: 7,
                    zb: 'down'
                },
                cg: {
                    val: 79,
                    hb: 8,
                    zb: 'up'
                }
            }
        },
        {
            title: '园区2',
            type: 'yq2',
            data: {
                jg: {
                    val: 65,
                    hb: 7,
                    zb: 'down'
                },
                cg: {
                    val: 89,
                    hb: 8,
                    zb: 'up'
                }
            }
        },
        {
            title: '园区3',
            type: 'yq3',
            data: {
                jg: {
                    val: 46,
                    hb: 7,
                    zb: 'down'
                },
                cg: {
                    val: 67,
                    hb: 8,
                    zb: 'up'
                }
            }
        },
        {
            title: '其他',
            type: 'other',
            data: {
                jg: {
                    val: 42,
                    hb: 2,
                    zb: 'down'
                },
                cg: {
                    val: 45,
                    hb: 6,
                    zb: 'up'
                }
            }
        },
        ],
        monthchart1: [{
            headTitle: '近一年报关单量同环比情况',
            data: {
                type: 'bar',
                data: {
                    datasets: [{
                        label: '船代申报提单量',
                        data: [160, 190, 230, 260, 160, 230, 210, 160, 190, 230, 260, 160],
                        backgroundColor: '#f57874'
                    }, {
                        label: '同比',
                        fill: false,
                        data: [160, 150, 160, 200, 140, 230, 250, 160, 150, 160, 200, 140],
                        backgroundColor: '#acd598',
                        borderColor: '#acd598',
                        type: 'line'
                    }, {
                        label: '环比',
                        fill: false,
                        data: [260, 170, 220, 200, 190, 260, 300, 260, 170, 220, 200, 190],
                        backgroundColor: '#1890ff',
                        borderColor: '#1890ff',
                        type: 'line'
                    }],
                    labels: ['2017/04', '2017/05', '2017/06', '2017/07', '2017/08', '2017/09', '2017/10', '2017/11', '2017/12', '2018/01', '2018/02', '2018/03']
                },
                options: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            }
        }],
        monthchart2: [{
            headTitle: '近一年报关单量同环比情况',
            data: {
                type: 'bar',
                data: {
                    datasets: [{
                        label: '船代申报提单量',
                        data: [160, 190, 230, 260, 160, 230, 210, 160, 190, 230, 260, 160],
                        backgroundColor: '#f57874'
                    }, {
                        label: '同比',
                        fill: false,
                        data: [160, 150, 160, 200, 140, 230, 250, 160, 150, 160, 200, 140],
                        backgroundColor: '#acd598',
                        borderColor: '#acd598',
                        type: 'line'
                    }, {
                        label: '环比',
                        fill: false,
                        data: [260, 170, 220, 200, 190, 260, 300, 260, 170, 220, 200, 190],
                        backgroundColor: '#1890ff',
                        borderColor: '#1890ff',
                        type: 'line'
                    }],
                    labels: ['2017/04', '2017/05', '2017/06', '2017/07', '2017/08', '2017/09', '2017/10', '2017/11', '2017/12', '2018/01', '2018/02', '2018/03']
                },
                options: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            }
        }],
    },
    reducers: {
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
        /** 初始化菜单 */
        INIT: function* ({ payload }, { select, call, put }) {
            const response = yield call(GET, '/api/sidebar');
            console.log(response);
            if (response && response.data) {
                // 更新数据流
            }
        },
    },
    subscriptions: {
        setup: function ({ dispatch, history }) {
            let bool = false;
            history.listen(function (location) {
                if (!bool) {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            pathname: location.pathname,
                        },
                    });
                    bool = true;
                }
            });
        },
    },
}