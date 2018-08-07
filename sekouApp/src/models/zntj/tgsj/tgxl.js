

export default {
    namespace: "tgxl",
    state: { 
      monthTitle : '月通关效率情况',
      barTitle:'通关效率环比情况',
      tabs: [
        {
          title: "5304通关效率",
        },
        {
          title: "5349通关效率",
        },
      ],
    },
    reducers: {
      select(state, { payload }) {
        return {
          ...state,
          data: payload.num > 0 ? '本年' : payload.month,
        };
      }
    },
    effects: {
      
    }
  };
  
  