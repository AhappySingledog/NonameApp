const datas = [
    {label: "今日", value: 1},
    {label: "本周", value: 2},
    {label: "本月", value: 3},
    {label: "今年", value: 4},
  ];
  
  export default {
      namespace: "cdsbqk",
      state: { 
        datas: datas,
        data: [datas[0].value],
        source: [
          {
          headTitle:'今日船代申报提单占比情况',
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
              headTitle:'本周船代申报提单占比情况',
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