const datas = ['今日', '本周', '本月', '本年'];

export default {
    namespace: "tdsbqk",
    state: { 
      datas: datas,
      data: [datas[0].value],
      source: [
        {
        headTitle:'今日码头提单申报占比情况',
        items:[
          {title:"月占比", vl:"80%", value:"1000"},
          {title:"年占比", vl:"8%", value:"2300"}
        ]
      }
      ]
    },
    reducers: {
      select(state, { payload }) {
        return {
          ...state,
          data: payload,
          source:[
            {
            headTitle:'本周码头提单申报占比情况',
            items:[
              {title:"年占比", vl:"8%", value:"2300"}
            ]
          }
          ]
        };
      }
    },
    effects: {
      
    }
  };