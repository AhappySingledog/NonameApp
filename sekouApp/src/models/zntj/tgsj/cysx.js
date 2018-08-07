

export default {
    namespace: "cysx",
    state: { 
      monthTitle : '查验时效情况',
      barTitle:'查验时效环比情况',
      tabs: [
        {
          title: "5304查验时效",
        },
        {
          title: "5349查验时效",
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