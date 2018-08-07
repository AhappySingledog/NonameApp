
export default {
  namespace: "bgdl",
  state: {
    tabs: [
      {
        title: "总量",
        datas: [
          { name: 'z_chars1', tabname: '报关总量' },
          { name: 'y_chars1', tabname: '近一年报关单量环比情况' },
        ]
      },
      {
        title: "进口报关单量",
        datas: [
          { name: 'z_chars2', tabname: '报关总量' },
          { name: 'y_chars2', tabname: '近一年报关单量环比情况' },
        ]
      },
      {
        title: "出口报关单量",
        datas: [
          { name: 'z_chars3', tabname: '报关总量' },
          { name: 'y_chars3', tabname: '近一年报关单量环比情况' },
        ]
      },
    ],
  },
  reducers: {
    select(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    }
  },
  effects: {
    
  }
};