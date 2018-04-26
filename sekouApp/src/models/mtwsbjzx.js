const datas = [
  { label: "本月", value: 1 },
  { label: "今年", value: 2 },
];

export default {
  namespace: "mtwsbjzx",
  state: {
    datas: datas,
    data: [datas[0].value],
    tabs: [
      {
        title: '全部', type: 'all',
        datas: [
          { name: 'z_chars1', tabname: '各码头近一年超过三个月未放行的集装箱同环比情况' },
        ],
      },
      {
        title: 'SCT', type: 'sct',
        datas: [
          { name: 'z_chars2', tabname: '各码头近一年超过三个月未放行的集装箱同环比情况' },
        ],
      },
      {
        title: 'CCT', type: 'cct',
        datas: [
          { name: 'z_chars3', tabname: '各码头近一年超过三个月未放行的集装箱同环比情况' },
        ],
      },
      {
        title: 'MCT', type: 'mct',
        datas: [
          { name: 'z_chars4', tabname: '各码头近一年超过三个月未放行的集装箱同环比情况' },
        ],
      }
    ],
    source: [
      {
        headTitle: '本月各码头超过三个月未放行的集装箱情况',
        items: [
          { title: "SCT", vl: "52%", value: "520" },
          { title: "CCT", vl: "30%", value: "300" },
          { title: "MCT", vl: "18%", value: "180" }
        ]
      }
    ]
  },
  reducers: {
    select(state, { payload }) {
      return {
        ...state,
        data: payload,
        source: [
          {
            headTitle: '本年各码头超过三个月未放行的集装箱情况',
            items: [
              { title: "SCT", vl: "52%", value: "520" },
              { title: "CCT", vl: "30%", value: "300" },
              { title: "MCT", vl: "18%", value: "180" }
            ]
          }
        ]
      };
    }
  },
  effects: {

  }
};