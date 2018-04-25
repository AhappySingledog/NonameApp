const datas = [
    {label: "本月", value: 1},
    {label: "今年", value: 2},
  ];
  
  export default {
      namespace: "zssk",
      state: { 
        datas: datas,
        data: [datas[0].value],
        source: [
          {
          headTitle:'本月征收税款占比情况',
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
              headTitle:'今年征收税款与历史总量占比情况',
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
    