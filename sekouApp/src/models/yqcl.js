

export default {
    namespace: "yqcl",
    state: {
        tabs: [
            {
                title: '全部', type: 'all',
                datas: [{ name: 'z_chars1' , tabname: '今日园区库存量占比情况'},
                     { name: 'x_chars2' , tabname: '今日园区库存量占比情况'}],
                data: [
                    { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") },
                    { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }]
            },
            {
                title: '园区1', type: 'yq1',
                datas: [{ name: 'z_chars3', tabname: '近一周进闸车辆变化' }, { name: 'x_chars4' , tabname: '近一周出闸车辆变化'}],
                data: [
                    { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") },
                    { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }]
            },
            {
                title: '园区2', type: 'yq2',
                datas: [{ name: 'z_chars5', tabname: '近一周进闸车辆变化' }, { name: 'x_chars6', tabname: '近一周出闸车辆变化' }],
                data: [
                    { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/进港.svg") },
                    { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }]
            },
            {
                title: '园区3', type: 'yq3',
                datas: [{ name: 'z_chars7', tabname: '近一周进闸车辆变化' }, { name: 'x_chars8' , tabname: '近一周出闸车辆变化'}],
                data: [
                    { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆', img: require("../images/zntj/jcg/出港.svg") },
                    { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆', img: require("../images/zntj/jcg/出港.svg") }]
            }
        ],
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