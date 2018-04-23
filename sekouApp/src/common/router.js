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
    models: ["bgdl"],
    router: () => import('../routes/zntj/Bgdl')
  },
  "/zntj_zssk": {
    props: { title: "征收税款" },
    models: ["zssk"],
    router: () => import('../routes/zntj/Zssk')
  },
  "/zntj_tgxl": {
    props: { title: "通关效率" },
    models: ["tgxl"],
    router: () => import('../routes/zntj/Tgxl')
  },
  "/zntj_mtcb": {
    props: { title: "码头船舶情况" },
    models: ["mtcbqk"],
    router: () => import('../routes/zntj/Mtcb')   
  },
  "/zntj_cbsbqk": {
    props: { title: "船舶申报情况" },
    models: ["cbsbqk"],
    router: () => import('../routes/zntj/Cbsbqk')   
  },
  "/zntj_tdsbqk": {
    props: { title: "提单申报情况" },
    models: ["tdsbqk"],
    router: () => import('../routes/zntj/Tdsbqk')   
  },
  "/zntj_mtjzx": {
    props: { title: "码头集装箱情况" },
    models: ["mtjzxxq"],
    router: () => import('../routes/zntj/Mtjzx')   
  },

  "/zntj_yqcl" : {
    props: { title: "园区车辆" },
    models: ["yqcl"],
    router: () => import('../routes/zntj/yq/yqcl') 
  },
  "/zntj_yqqysb":{
    props: { title: "园区企业申报" },
    models: ["yqqysb"],
    router: () => import('../routes/zntj/yq/yqqysb') 
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
  // "/spjk": {
  //   props: { title: "视频监控",top: true },
  //   models: ["spjk"],
  //   router: () => import('../routes/spjk/App')
  // },
  "/znyj": {
    props: { title: "智能预警", top: true },
    models: ["znyj"],
    router: () => import('../routes/znyj/App')
  },
  "/znyj_xx/:lx/:id": {
    props: { title: "智能预警/报警" },
    models: ["yjxxinfo"],
    router: () => import('../routes/znyj/Yjxxinfo')
  }
};