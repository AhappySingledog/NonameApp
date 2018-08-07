export const routerConfig = {
  "/": {
    models: ["layout"],
    router: () => import('../layouts/BasicLayout')
  },
  "/zntj": {
    props: { title: "智能统计", top: true },
    models: ["zntj"],
    router: () => import('../routes/zntj/App')
  },
  "/zntj_bgdl": {
    props: { title: "报关单量" },
    models: ["zntj/tgsj/bgdl"],
    router: () => import('../routes/zntj/Bgdl')
  },
  "/zntj_zssk": {
    props: { title: "征收税款" },
    models: ["zntj/tgsj/zssk"],
    router: () => import('../routes/zntj/Zssk')
  },
  "/zntj_cysx": {
    props: { title: "查验时效" },
    models: ["zntj/tgsj/cysx"],
    router: () => import('../routes/zntj/Cysx')
  },
  "/zntj_tgxl": {
    props: { title: "通关效率" },
    models: ["zntj/tgsj/tgxl"],
    router: () => import('../routes/zntj/Tgxl')
  },
  "/zntj_mtcb": {
    props: { title: "码头船舶情况" },
    models: ["zntj/mtsj/mtcbqk"],
    router: () => import('../routes/zntj/mt/Mtcb')   
  },
  "/zntj_cbsbqk": {
    props: { title: "船舶申报情况" },
    models: ["zntj/tgsj/cbsbqk"],
    router: () => import('../routes/zntj/Cbsbqk')   
  },
  "/zntj_tdsbqk": {
    props: { title: "提单申报情况" },
    models: ["zntj/tgsj/tdsbqk"],
    router: () => import('../routes/zntj/Tdsbqk')   
  },
  "/zntj_cdsbqk": {
    props: { title: "船代申报情况" },
    models: ["zntj/tgsj/cdsbqk"],
    router: () => import('../routes/zntj/Cdsbqk')   
  },
  "/zntj_bghldqk": {
    props: { title: "报关行录单情况" },
    models: ["zntj/tgsj/bghldqk"],
    router: () => import('../routes/zntj/Bghldqk')   
  },
  "/zntj_jzxsbqk": {
    props: { title: "码头集装箱申报情况" },
    models: ["zntj/tgsj/jzxsbqk"],
    router: () => import('../routes/zntj/Jzxsbqk')   
  },
  "/zntj_hgcyqk": {
    props: { title: "海关查验情况" },
    models: ["zntj/tgsj/hgcyqk"],
    router: () => import('../routes/zntj/Hgcyqk')   
  },
  "/zntj_mtjzx": {
    props: { title: "码头集装箱情况" },
    models: ["zntj/mtsj/mtjzxxq"],
    router: () => import('../routes/zntj/mt/Mtjzx')   
  },

  "/zntj_mtwsbjzx": {
    props: { title: "码头未申报集装箱" },
    models: ["zntj/mtsj/mtwsbjzx"],
    router: () => import('../routes/zntj/mt/Mtwsbjzx')   
  },
  "/zntj_wxpjzxqk": {
    props: { title: "危险品集装箱情况" },
    models: ["zntj/mtsj/wxpjzxqk"],
    router: () => import('../routes/zntj/mt/Wxpjzxqk')   
  },
  "/zntj_mtcl" : {
    props: { title: "码头车辆信息" },
    models: ["zntj/mtsj/mtcl"],
    router: () => import('../routes/zntj/mt/Mtcl')  
  },
  "/zntj_mtdc" : {
    props: { title: "码头堆场信息" },
    models: ["zntj/mtsj/mtdc"],
    router: () => import('../routes/zntj/mt/Mtdc')  
  },
  "/zntj_yqcl" : {
    props: { title: "园区车辆" },
    models: ["zntj/yqsj/yqcl"],
    router: () => import('../routes/zntj/yq/yqcl') 
  },
  "/zntj_yqqysb":{
    props: { title: "园区企业申报" },
    models: ["zntj/yqsj/yqqysb"],
    router: () => import('../routes/zntj/yq/yqqysb') 
  },
  "/zntj_jckbazqd":{
    props: { title: "进出口备案制清单" },
    models: ["zntj/yqsj/jckbazqd"],
    router: () => import('../routes/zntj/yq/jckbazqd') 
  },
  "/zncx": {
    props: { title: "智能查询", top: true },
    models: ["zncx"],
    router: () => import('../routes/zncx/App')
 
  },
  "/zncx_xx/:lx/:id": {
    props: { title: "智能查询详情"},
    models: ["xxinfo"],
    router: () => import('../routes/zncx/Xxinfo')  
   },
  "/spjk": {
    props: { title: "视频监控",top: true },
    models: ["spjk"],
    router: () => import('../routes/spjk/App')
  },
  "/znyj": {
    props: { title: "智能预警", top: true },
    models: ["znyj"],
    router: () => import('../routes/znyj/App')
  },
  "/znyj_xx/:lx/:id": {
    props: { title: "智能预警/报警" },
    models: ["znyj/yj/yjxxinfo"],
    router: () => import('../routes/znyj/bjxxinfo')
  }
};