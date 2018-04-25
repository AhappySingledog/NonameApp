const datas = [
  {label: "今天", value: 1},
  {label: "本周", value: 2},
];

export default {
    namespace: "tgxl",
    state: { 
      datas: datas,
      data:[datas[0].value],
      num:'70%'
    },
    reducers: {
      select(state, { payload }) {
        return {
          ...state,
          data: payload,
          num : '80%' 
        };
      }
    },
    effects: {
      
    }
  };
  
  