const datas = [
    {label: "本月", value: 1},
    {label: "今年", value: 2},
  ];
  
  export default {
      namespace: "zssk",
      state: {
        tabs: [
          {
            title: "总量",
            datas: [
              { name: 'y_chars1', tabname: '今年征收税款与历史总量同比情况' },
            ]
          },
          {
            title: "5304税款金额",
            datas: [
              { name: 'y_chars2', tabname: '5304关区征收税款同比情况' },
            ]
          },
          {
            title: "5349税款金额",
            datas: [
              { name: 'y_chars3', tabname: '5349关区征收税款同比情况' },
            ]
          },
        ],
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
    