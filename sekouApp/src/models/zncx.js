import store from "../index";
import { routerRedux } from "dva/router";

const { dispatch } = store;

export default {
  namespace: "zncx",
  state: {
    tabs: [
      {
        title: "船舶信息",
        type: "cbxx",
        tablename : 'V_IMAP_SCCT_BERTH',
        icon: require('../images/zncx/船舶信息.svg'),
        cols: {imo: "IMO号",shc: "商业航次号",cm: '船名', mhc: "码头航次号", mt: "靠泊码头"},
        tip: {
            fld: 'zt', 
            disp: [
                {iconStyle: {background: '#1fd781'}, tip:'离港', tipStyle: {color: '#1fd781'}},
                {iconStyle: {background: '#1890ff'}, tip:'靠泊', tipStyle: {color: '#1890ff'}},
            ]
        },
        datas: [
            {imo: "QWE12345", shc: "B-SZ20170422",cm: '航海号1', mhc: "SFG100023", mt: "西海码头", zt: 0},
            {imo: "ASD123000300", shc: "B-SZ20170422",cm: '航海号12', mhc: "SFG100023", mt: "一湾码头", zt: 1},
            {imo: "ASD123000300", shc: "B-SZ20170422",cm: '航海号I', mhc: "SFG100023", mt: "西海码头", zt: 0},
            {imo: "ASD123000300", shc: "B-SZ20170422",cm: '航海号12', mhc: "SFG100023", mt: "一湾码头", zt: 1},
            {imo: "ASD123000300", shc: "B-SZ20170422",cm: '航海号12', mhc: "SFG100023", mt: "一湾码头", zt: 1},
        ]
      },
      {
        title: "提单信息",
        type: "tdxx",
        tablename : '',
        icon: require('../images/zncx/提单信息.svg'),
        cols: {imo: "IMO号",shc: "商业航次号",cm: '船名', mhc: "码头航次号", tdh: "靠泊码头"},
        datas: [
            {imo: "QWE12345", shc: "B-SZ20170422",cm: '航海号1', mhc: "SFG100023", tdh: "RT-13344899"},
            {imo: "ASD123000300", shc: "B-SZ20170422",cm: '航海号12', mhc: "SFG100023", tdh: "RT-QW5673"},
        ]
      },
      {
        title: "集装箱信息",
        type: "jzxxx",
        tablename : 'V_IMAP_SCCT_ONYARD',
        icon: require('../images/zncx/集装箱信息.svg'),
        cols: {imo: "IMO号",shc: "商业航次号",cm: '船名', mhc: "码头航次号", zymt: "作业码头"},
        datas: [
            {imo: "QWE12345", shc: "B-SZ20170422",cm: '航海号1', mhc: "SFG100023", zymt: "西海码头"},
            {imo: "ASD123000300", shc: "B-SZ20170422",cm: '航海号12', mhc: "SFG100023", zymtzt: "一湾码头"},
        ]
      },
      {
        title: "车辆信息",
        type: "clxx",
        tablename : '',
        icon: require('../images/zncx/车辆信息.svg'),
        cols: {cph: "车牌号", bm: "拖车海关编号", mc: "企业名称",pm: '车辆牌名', no: "车身号码"},
        datas: [
            {cph: "粤BL2345", bm: "B-S20170422", mc: "上海一汽", pm: "HJ123456", no: "W123456"},
            {cph: "粤BA2345", bm: "B-S20170422", mc: "上海一汽", pm: "HJ123456", no: "W123456"},
        ]
      }
    ],
    itemClick: (obj, lx, idx) => {
        dispatch(routerRedux.push("/zncx_xx/" + lx + "/1"));
    }
  },
  reducers: {}
};
