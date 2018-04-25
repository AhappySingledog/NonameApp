import { Toast } from "antd-mobile";
import store from '../index';
import { routerRedux } from 'dva/router';

const { dispatch } = store;

export default {
    namespace: 'zntj',  
    state: {
      bgs: [
        require("../images/zntj/bg/1.jpg"),
        require("../images/zntj/bg/2.jpg"),
        require("../images/zntj/bg/3.jpg"),
        require("../images/zntj/bg/4.jpg"),
        require("../images/zntj/bg/5.jpg"),
      ],
      grids: [
        {
          name: "通关数据",
          items: [
            {title: '报关单量', color: '#58dabc', src: require("../images/zntj/tgsj/关单量.svg"), router: '/zntj_bgdl'},
            {title: '征收税款', color: '#52befc', src: require("../images/zntj/tgsj/征收税款.svg"), router: '/zntj_zssk'},
            {title: '查验时效', color: '#ffb84e', src: require("../images/zntj/tgsj/海关查验.svg"), router: '/zntj_cysx'},            
            {title: '通关效率', color: '#ffb84e', src: require("../images/zntj/tgsj/通关效率.svg"), router: '/zntj_tgxl'},
            {title: '船舶申报', color: '#259dfe', src: require("../images/zntj/tgsj/船舶申报.svg"), router: '/zntj_cbsbqk'},
            {title: '提单申报', color: '#58dabc', src: require("../images/zntj/tgsj/提单申报.svg"), router: '/zntj_tdsbqk'},
            {title: '船代申报', color: '#459ef2', src: require("../images/zntj/tgsj/船代申报.svg"), router: '/zntj_cdsbqk'},
            {title: '报关行录单', color: '#42cb93', src: require("../images/zntj/tgsj/报关行录单.svg"), router: '/zntj_bghldqk'},
            {title: '集装箱申报', color: '#42cb93', src: require("../images/zntj/tgsj/集装箱申报.svg"), router: '/zntj_jzxsbqk'},              
            {title: '海关查验情况', color: '#42cb93', src: require("../images/zntj/tgsj/集装箱申报.svg"), router: '/zntj_hgcyqk'}
          ]
        },
        {
          name: "码头数据",
          items: [
            { title: "码头船舶", color: "#5ea5fd", src: require("../images/zntj/mtsj/码头船舶.svg"), router: '/zntj_mtcb'},
            { title: "码头集装箱", color: "#4abbfd", src: require("../images/zntj/mtsj/码头集装箱.svg"), router: '/zntj_mtjzx' },
            { title: "码头车辆", color: "#57dabc", src: require("../images/zntj/mtsj/码头车辆.svg") },
            { title: "码头堆场", color: "#64cefb", src: require("../images/zntj/mtsj/码头堆场.svg") },
            { title: "未申报集装箱", color: "#fecc7f", src: require("../images/zntj/mtsj/未申报集装箱.svg") },
            { title: "危险品堆场", color: "#66b1f6", src: require("../images/zntj/mtsj/危险品堆场.svg") }
          ]
        },       
        {
          name: "园区数据",
          items: [
              {title: '园区车辆', color: '#ffb84e', src: require("../images/zntj/yqsj/园区车辆.svg"), router: '/zntj_yqcl'},
              {title: '企业申报', color: '#259dfe', src: require("../images/zntj/yqsj/企业申报.svg"), router: '/zntj_yqqysb'},
              {title: '进出口备案', color: '#62c174', src: require("../images/zntj/yqsj/进出口备案.svg"), router: '/zntj_jckbazqd'},
          ]
        }
      ],
      onGridItemClick : (el, idx) => {
        if (el.router) {
          dispatch(routerRedux.push(el.router));
        } else Toast.offline("正在通宵开发中", 1);
      }
    },
    reducers: {
      
    },
  };