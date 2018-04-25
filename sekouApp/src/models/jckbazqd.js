const datas = [{
        label: "本月",
        value: 1
    },
    {
        label: "今年",
        value: 2
    },
];

export default {
    namespace: 'jckbazqd',
    state: {
        datas: datas,
        data: [datas[0].value],
        today: [{
            headTitle: '本月进出口备案制清单量占比情况',
            items: [{
                title: "月占比",
                vl: "20%",
                value: "150"
            }]
        }],
        year_data : [{
            headTitle: '本年进出口备案制清单量占比情况',
            items: [{
                title: "年占比",
                vl: "80%",
                value: "300"
            }]
        }],
        monthchart1: [{
            headTitle: '近一年进出口备案制清单量同环比情况',
            data: {
                type: 'bar',
                data: {
                    datasets: [{
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
                    }, {
                        label: '船代申报提单量',
                        data: [160, 190, 230, 260, 160, 230, 210, 160, 190, 230, 260, 160],
                        backgroundColor: '#f57874'
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

    }
};