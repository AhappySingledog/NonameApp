export default {
    namespace: "yqsj",
    state: {
        tabs: [
            {
            datas: [{ name: 'yq_chars1', tabname: '园区车辆信息'},
                    { name: 'yq_chars2' , tabname: '企业申报'},
                    { name: 'yq_chars3' , tabname: '进出口备案制清单'},
                  ]
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