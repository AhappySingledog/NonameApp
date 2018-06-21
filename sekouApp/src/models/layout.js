
/** 此处为全局model  */
export default {
  namespace: "layout",
  state: {
    title: "",
    Cdate: null,
    link: () => { }
  },

  effects: {

  },
  reducers: {
    Navgate(state, { payload }) {
      console.log("1111");
      return {
        ...state,
        title: payload || ""
      };
    },
    /** 转换日期 */
    ChangeDate(state, { payload }) {
      var handleDate = new Date(payload);
      let Ndate = handleDate.getFullYear() + '' + (handleDate.getMonth() + 1 < 10 ? '0' + handleDate.getMonth() + 1 : handleDate.getMonth() + 1);
      return {
        ...state,
        Cdate: Ndate
      };
    },
  },

};
