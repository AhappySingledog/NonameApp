const datas = ['今日', '本周', '本月', '本年'];
  
  export default {
      namespace: "jzxsbqk",
      state: { 
        datas: datas,
        data: [datas[0].value],
        source: [
          {
          headTitle:'今日集装箱申报占比情况',
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
              headTitle:'本周集装箱申报占比情况',
              items:[
                {title:"年占比", vl:"8%", value:"500"}
              ]
            }
            ]
          };
        }
      },
      effects: {
        
      }
    };