export default {
  namespace: "layout",
  state: {
    title: "",
    link: () => {}
  },
  reducers: {
    Navgate(state, { payload }) {
      return {
        ...state,
        title: payload || ""
      };
    }
  }
};
