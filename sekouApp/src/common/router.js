export const routerConfig = {
  "/": {
    models: ["layout"],
    router: () => import('../layouts/BasicLayout')
  },
  "/zntj": {
    props: { title: "智能统计", root: true },
    models: ["zntj"],
    router: () => import('../routes/zntj/App')
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
  "/zncx": {
    props: { title: "智能查询", root: true },
    models: ["zncx"],
    router: () => import('../routes/zncx/App')

  },
  "/zncx_xx/:lx/:id": {
    props: { title: "智能查询详情" },
    models: ["xxinfo"],
    router: () => import('../routes/zncx/Xxinfo')
  },
  "/znyj": {
    props: { title: "智能预警", root: true },
    models: ["znyj"],
    router: () => import('../routes/znyj/App')
  },
  "/znyj_xx/:lx/:id": {
    props: { title: "智能预警/报警" },
    models: ["yjxxinfo"],
    router: () => import('../routes/znyj/Yjxxinfo')
  },
};