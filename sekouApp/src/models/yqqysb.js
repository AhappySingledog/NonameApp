export default {
    namespace: "yqqysb",
    state: {
        tabs: [{
                title: "库存量"
            },
            {
                title: "入库量"
            },
            {
                title: "出库量"
            },
            {
                title: "申报量"
            }
        ],
        source: [{
            headTitle: '今日园区库存量占比情况',
            items: [{
                    title: "本周占比",
                    vl: "80%",
                    value: "300"
                },
                {
                    title: "月占比",
                    vl: "8%",
                    value: "1000"
                },
                {
                    title: "年占比",
                    vl: "8%",
                    value: "2300"
                }
            ]
        }],
        chartPieMonth: [{
            headTitle: '本月报关单量排名情况',
            data: {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [29, 16, 14, 12, 10, 8, 6, 5],
                        backgroundColor: [
                            '#1890ff',
                            '#7fc0fe',
                            '#acd598',
                            '#47c39e',
                            '#f57874',
                            '#e76568',
                            '#f3e095',
                            '#f3d665'
                        ]
                    }],
                    labels: [
                        '仓库1',
                        '仓库2',
                        '仓库3',
                        '仓库4',
                        '仓库5',
                        '仓库6',
                        '仓库7',
                        'other'
                    ]
                },
                options: {
                    cutoutPercentage: 50,
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true
                        }
                    },
                    tooltips: {
                        intersect: true
                    }
                }
            }
        }],
        monthchart1: [{
            headTitle: '近一周园区库存量同环比情况',
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
        },
    },
    effects: {
    }
};