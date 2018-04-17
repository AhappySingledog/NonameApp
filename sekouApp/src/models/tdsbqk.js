const toDateString = (dt) => dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
const timeLx = ['今日', '昨日', '本周', '上周', '本月', '本月', '自定义'];
export default {
    namespace: 'tdsbqk',  
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
      ],
      filters: [
        {
          title: "进出口类型",
          items: [
            { title: "进口", checked: true },
            { title: "出口", checked: false }
          ]
        },
        {
          title: "货物海关状态",
          items: [
            { title: "未通过审核", checked: true },
            { title: "已结关", checked: true },
            { title: "审核未接单", checked: false },
            { title: "接单未放行", checked: false },
            { title: "放行未结关", checked: false }
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
      },
      filterChange (state, { payload }) {
        if(!payload || Array.isArray(payload))
          return  { ...state, barType: false };
        let {gid, idx, checked} = payload;
        let filters = [...state.filters];
        filters[gid].items[idx].checked = checked;
        return {
          ...state, filters
        }
      }
    }, 
    effects: {
        *dateChange({ payload }, { put }) {
            yield put({ type: "setDataTitle", payload: payload });
        }
    } 
  };