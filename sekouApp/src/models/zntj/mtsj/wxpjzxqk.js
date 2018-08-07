import { publish } from "../../../core/arbiter";
import { Toast } from 'antd-mobile';

const datas = [
  { label: "本月", value: 1 },
  { label: "今年", value: 2 },
];

export default {
  namespace: "wxpjzxqk",
  state: {
    datas: datas,
    data: [datas[0].value],
    tabs: [
      // {
      //   title: '全部', type: 'all',
      //   datas: [
      //     { name: 'z_chars1', tabname: '近一年各码头危险品箱数环比情况' },
      //   ],
      // },
      {
        title: 'SCT', type: 'SCT',
        datas: [
          { name: 'z_chars2', tabname: 'SCT危险品箱数环比情况' },
        ],
      },
      {
        title: 'CCT', type: 'CCT',
        datas: [
          { name: 'z_chars3', tabname: 'CCT危险品箱数环比情况' },
        ],
      },
      {
        title: 'MCT', type: 'MCT',
        datas: [
          { name: 'z_chars4', tabname: 'MCT危险品箱数环比情况' },
        ],
      }
    ],
    source: [
      {
        headTitle: '本月各码头超过三个月未放行的集装箱情况',
        items: [
          { title: "SCT", vl: "52%", value: "520" },
          { title: "CCT", vl: "30%", value: "300" },
          { title: "MCT", vl: "18%", value: "180" }
        ]
      }
    ]
  },
  reducers: {
    setInfo(state, { payload }) {
      return {
        ...state,
        jsons: payload
      }
    },
    select(state, { payload }) {
      return {
        ...state,
        data: payload,
        source: [
          {
            headTitle: '本年各码头超过三个月未放行的集装箱情况',
            items: [
              { title: "SCT", vl: "52%", value: "520" },
              { title: "CCT", vl: "30%", value: "300" },
              { title: "MCT", vl: "18%", value: "180" }
            ]
          }
        ]
      };
    }
  },
  effects: {
    *Query({ payload }, { put }) {
      let queyrCompany = yield (publish('webAction', { svn: 'skhg_stage_service', path: 'queryTableByWhere', data: { tableName: payload.tableName, where: payload.where } }));
      yield put({ type: 'setInfo', payload: queyrCompany });
      Toast.hide();
    }
  }
};