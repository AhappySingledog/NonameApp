const datas = [
    {label: "本月", value: 1},
    {label: "今年", value: 2},
  ];
  
  export default {
      namespace: "cysx",
      state: { 
        datas: datas,
        data: [datas[0].value],
        num : '70%',
        barTitle:'近一年查验时效同环比情况'
      },
      reducers: {
        select(state, { payload }) {
          return {
            ...state,
            data: payload,
            num :'20%',
            barTitle:'近五年查验时效同环比情况'
          };
        }
      },
      effects: {
        
      }
    };