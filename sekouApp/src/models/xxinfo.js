export default {
  namespace: "xxinfo",
  state: { icon: null, cls: {}, datas: {}, key: "" },
  reducers: {
    setInfo(state, { payload }) {
      return {
        ...state,
        icon: payload.icon,
        cols: payload.cols,
        datas: payload.datas,
        kfiled: payload.key,
        fStyle: payload.fStyle,
      };
    }
  },
  effects: {
    *getInfo({ payload }, { put }) {
      let data = {
        cbxx: {
          title: "船舶信息详情",
          icon: require("../images/zncx/船舶信息1.svg"),
          key: "imo",
          cols: {
            imo: "IMO号",
            shc: "商业航次号",
            cm: "船名",
            mhc: "码头航次号",
            mt: "靠泊码头",
            d1: "预计抵港时间",
            d2: "预计离港时间",
            d3: "实际抵港时间",
            d4: "实际离港时间",
            d5: "截编号时间",
            d6: "预计截关时间",
            d7: "截重时间",
            gs: "船公司"
          },
          datas: {
            imo: "QWE12345",
            shc: "B-SZ20170422",
            cm: "航海号1",
            mhc: "SFG100023",
            mt: "西海码头",
            d1: "2018年3月6日 12:12:12",
            d2: "2018年3月6日 12:12:12",
            d3: "2018年3月6日 12:12:12",
            d4: "2018年3月6日 12:12:12",
            d5: "2018年3月6日 12:12:12",
            d6: "2018年3月6日 12:12:12",
            d7: "2018年3月6日 12:12:12",
            gs: "英伦国际有限公司"
          }
        },
        tdxx: {
          title: "提单信息详情",
          icon: require("../images/zncx/提单信息1.svg"),
          fStyle: {
            tdh: {color: "#f9b45b"}
          },
          cols: {
            imo: "IMO号",
            shc: "商业航次号",
            cm: "船名",
            mhc: "码头航次号",
            tdh: "提单号",
            ydmt: "运抵码头",
            dzt: "单状态",
            xsl: "箱数量"
          },
          datas: {
              imo: "QWE123456",
              shc: "B-SZ20170422",
              cm: "航海号1",
              mhc: "SFG100023",
              tdh: "RT-13344899",
              ydmt: "TAARSPODSBJERG",
              dzt: "收货代运",
              xsl: 40
          },
          key: "imo"
        },
        jzxxx: {
          title: "集装箱信息详情",
          icon: require("../images/zncx/集装箱信息1.svg"),
          fStyle: {
            hgcyzt: {color: "#00cc66"},
            gjcyzt: {color: "#00cc66"},
          },
          cols: {
            imo: "IMO号",
            shc: "商业航次号",
            cm: "船名",
            mhc: "码头航次号",
            ywcm: "英文船名",
            zymt: "作业码头",
            ztydh: "总提运单号",
            dch: "订舱号",
            xh: "箱号",
            xscc:"箱型尺寸",
            xz: "箱主",
            hgfx:"海关放行",
            gjfx:"国检放行",
            hgcyzt: "海关查验状态",
            gjcyzt: "国检查验状态",
            jcsj: "进长时间",
            lgsj: "离港时间"
          },
          datas: {
              imo:"QWE12345",
              shc: "B-SZ20170422",
              cm: "航海号1",
              mhc: "SFG100023",
              ywcm: "MAHAGHI",
              zymt: "XXX",
              ztydh: "XXX",
              dch: "XXX",
              xh: "XX",
              xscc: "XXX",
              xz: "XXXX",
              hgfx: "XXXX",
              gjfx: "XX",
              hgcyzt: "检验通过",
              gjcyzt: "检验通过",
              jcsj: "2018年3月6日 9:10:15",
              lgsj: "2018年3月6日 9:10:15"
          },
          key: "imo"
        },
        clxx: {
          title: "车辆信息详情",
          icon: require("../images/zncx/车辆信息1.svg"),
          cols: {
              cph: "车牌号", 
              bm: "拖车海关编号", 
              mc: "企业名称",
              lxdh: "联系电话",
              clpp: "车辆牌名",
              fdjh: "发动机号",
              cshm: "车身号码",
              cllx: "车辆类型",
              cldw: "车辆吨位",
              csys:"车身颜色",
              clzz: "车辆自重"
            },
          datas: {
            cph: "粤BL2345", 
            bm: "B-SZ20170422", 
            mc: "上海一汽",
            lxdh: "13788888888",
            clpp: "HJ123456",
            fdjh: "S12345",
            cshm: "W123456",
            cllx: "本田",
            cldw: "7",
            csys:"绿军",
            clzz: "5000KG"
          },
          key: "cph"
        }
      };
      let res = data[payload[1]];
      yield put({ type: "layout/Navgate", payload: res.title });
      yield put({ type: "setInfo", payload: res });
    }
  }
};

