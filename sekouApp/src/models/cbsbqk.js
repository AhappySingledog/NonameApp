const toDateString = (dt) => dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
const timeLx = ['今日', '昨日', '本周', '上周', '本月', '本月', '自定义'];
export default {
    namespace: 'cbsbqk',  
    state: {
      tabs: [
        { title: "业务概览" }, 
        { title: "环比情况" },
        { title: "明细数据" }
      ],      
      dateIdx: 0,
      dataTitle: '今天(' + toDateString(new Date()) + ')',
      barType:'',
      boats: [
        {
          title: "船代名称",
          items: [
            { title: "船代ASD", checked: true },
            { title: "船代DFC", checked: true },
            { title: "船代DFC", checked: false }
          ]
        }
      ]
    },
    reducers: {
      showbar (state, { payload }) {
        return { ...state, barType: payload};
      },
      setDataTitle (state, { payload }) {
        return {
            ...state,
            barType: '',
            dateIdx: payload.idx || 0,
            dataTitle: timeLx[payload.idx] + "(" + payload.data.map(x=>x.replace(/-/g, '.')).join("-") + ")"
          };
      },
      boatChange (state, { payload }) {
        if(!payload || Array.isArray(payload))
          return  { ...state, barType: false };
        let {gid, idx, checked} = payload;
        let boats = [...state.boats];
        boats[gid].items[idx].checked = checked;
        return {
          ...state, boats
        }
      }
    }, 
    effects: {
        *dateChange({ payload }, { put }) {
            yield put({ type: "setDataTitle", payload: payload });
        }
    } 
  };