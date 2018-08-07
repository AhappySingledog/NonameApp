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
    namespace: "yqqysb",
    state: {
        datas: datas,
        data: [datas[0].value],
        tabs: [
            {
                title: '库存量', type: 'all',
                datas: [
                    { name: 'z_chars1', tabname: '今日园区库存量占比情况' },
                    { name: 'y_chars1', tabname: '一周园区库存量同环比情况' },
                ],
            },
            {
                title: '入库量', type: 'sct',
                datas: [
                    { name: 'z_chars2', tabname: '今日园区库存量占比情况' },
                    { name: 'y_chars2', tabname: '一周园区库存量同环比情况' },
                ],
            },
            {
                title: '出库量', type: 'cct',
                datas: [
                    { name: 'z_chars3', tabname: '今日园区库存量占比情况' },
                    { name: 'y_chars3', tabname: '一周园区库存量同环比情况' },
                ],
            },
            {
                title: '申报量', type: 'mct',
                datas: [
                    { name: 'z_chars4', tabname: '今日园区库存量占比情况' },
                    { name: 'y_chars4', tabname: '一周园区库存量同环比情况' },
                ],
            },
            {
                title: '游轮母港', type: 'ylmg',
                datas: [
                    { name: 'z_chars5', tabname: '今日园区库存量占比情况' },
                    { name: 'y_chars5', tabname: '一周园区库存量同环比情况' },
                ],
            },
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
        },
    },
    effects: {}
};