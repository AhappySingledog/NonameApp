

export default {
    namespace: "yqcl",
    state: {
        tabs: [
            { title: '全部', type: 'all', datas: [{ name: 'z_chars1' }, { name: 'x_chars2' }], data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") }, { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }] },
            { title: '园区1', type: 'yq1', datas: [{ name: 'z_chars3' }, { name: 'x_chars4' }], data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") }, { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }] },
            { title: '园区2', type: 'yq2', datas: [{ name: 'z_chars5' }, { name: 'x_chars6' }], data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") }, { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }] },
            { title: '园区3', type: 'yq3', datas: [{ name: 'z_chars7' }, { name: 'x_chars8' }], data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/出港.svg") }, { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }] },
            { title: '其他', type: 'other', datas: [{ name: 'z_chars9' }, { name: 'x_chars10' }], data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") }, { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }] },
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

    },
    subscriptions: {
    },
}