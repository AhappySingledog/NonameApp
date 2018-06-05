export default {
    namespace: "mtsj",
    state: {
        tabs: [
            {
                title: '全部', type: 'all',
                datas: [{ name: 'all_chars1', tabname: '码头船舶信息'},
                        { name: 'all_chars2' , tabname: '码头集装箱信息'},
                        { name: 'all_chars3' , tabname: '码头车辆信息'},
                        { name: 'all_chars4' , tabname: '码头堆场信息'},
                        { name: 'all_chars5' , tabname: '码头未申报集装箱数量'},
                        { name: 'all_chars6' , tabname: '码头危险品集装箱情况'}]
            },
            {
                title: 'SCT', type: 'sct',
                datas: [{ name: 'sct_chars1', tabname: '码头船舶信息'},
                        { name: 'sct_chars2' , tabname: '码头集装箱信息'},
                        { name: 'sct_chars3' , tabname: '码头车辆信息'},
                        { name: 'sct_chars4' , tabname: '码头堆场信息'},
                        { name: 'sct_chars5' , tabname: '码头未申报集装箱数量'},
                        { name: 'sct_chars6' , tabname: '码头危险品集装箱情况'}]
            },
            {
                title: 'CCT', type: 'cct',
                datas: [{ name: 'cct_chars1', tabname: '码头船舶信息'},
                        { name: 'cct_chars2' , tabname: '码头集装箱信息'},
                        { name: 'cct_chars3' , tabname: '码头车辆信息'},
                        { name: 'cct_chars4' , tabname: '码头堆场信息'},
                        { name: 'cct_chars5' , tabname: '码头未申报集装箱数量'},
                        { name: 'cct_chars6' , tabname: '码头危险品集装箱情况'}]
            },
            {
                title: 'MCT', type: 'mct',
                datas: [{ name: 'mct_chars1', tabname: '码头船舶信息'},
                        { name: 'mct_chars2' , tabname: '码头集装箱信息'},
                        { name: 'mct_chars3' , tabname: '码头车辆信息'},
                        { name: 'mct_chars4' , tabname: '码头堆场信息'},
                        { name: 'mct_chars5' , tabname: '码头未申报集装箱数量'},
                        { name: 'mct_chars6' , tabname: '码头危险品集装箱情况'}]
            },
            {
                title: '游轮母港', type: 'yl',
                datas: [{ name: 'yl_chars1', tabname: '码头船舶信息'},
                        { name: 'yl_chars2' , tabname: '码头集装箱信息'},
                        // { name: 'yl_chars3' , tabname: '码头车辆信息'},
                        // { name: 'yl_chars4' , tabname: '码头堆场信息'},
                        // { name: 'yl_chars5' , tabname: '码头未申报集装箱数量'},
                        // { name: 'yl_chars6' , tabname: '码头危险品集装箱情况'}
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