export default {
    namespace: "tgsj",
    state: {
        tabs: [
            {
            datas: [{ name: 'tg_chars1', tabname: '船舶申报信息'},
                    { name: 'tg_chars2' , tabname: '码头集装箱信息'},
                    { name: 'tg_chars3' , tabname: '船代申报信息'},
                    { name: 'tg_chars4' , tabname: '报关行录单信息'},
                    { name: 'tg_chars5' , tabname: '集装箱申报信息'},
                    { name: 'tg_chars6' , tabname: '海关查验信息'},
                    // { name: 'tg_chars7' , tabname: '报关单量'},
                    // { name: 'tg_chars8' , tabname: '征收税款金额'},
                    // { name: 'tg_chars9' , tabname: '通关效率'},
                    // { name: 'tg_chars10' , tabname: '查验时效'}
                ],
         
            }
        ],
        cdsb:[
            {  
             cd: [{ label: '船代1', tabname: ''},
                  { label: '船代2', tabname: ''},
                  { label: '船代3', tabname: ''},
                  { label: '船代4', tabname: ''},
                  { label: '船代5', tabname: ''},
                  { label: '船代6', tabname: ''},],
             cdname:'船舶申报信息'

            }
        ],
        mtjzx:[
            {
                seasons :[{ label: '所有', tabname: ''},
                        { label: '国际转运货物', tabname: ''},
                        { label: '暂时进出境集装箱', tabname: ''},
                        { label: '进出口货物', tabname: ''}, ],
             }
        ],
        hgcy:[
            {
                cy: [{ label: '查验班组1', tabname: ''},
                    { label: '查验班组2', tabname: ''},
                    { label: '查验班组3', tabname: ''},
                    { label: '查验班组4', tabname: ''},
                    { label: '查验班组5', tabname: ''},
                    { label: '查验班组6', tabname: ''},],
             }
        ]
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