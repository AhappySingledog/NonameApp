export default {
  namespace: 'mtcbqk',
  state: {
    tabs: [{
        title: '全部',
        type: 'all',
        datas: [{
          name: 'z_chars1',
          tabname: '近一周进港船舶变化情况'
        },{
          name: 'y_chars1',
          tabname: '近一周出港船舶变化情况'
        }],
        data: [{
          val: 203,
          hb: 5,
          zb: 'down',
          cb: 'cg',
          name: '进港船舶数量',
          img: require("../images/zntj/jcg/进港.svg")
        }, {
          val: 320,
          hb: 7,
          zb: 'up',
          cb: 'jg',
          name: '出港船舶数量',
          img: require("../images/zntj/jcg/出港.svg")
        }]
      },
      {
        title: 'SCT',
        type: 'sct',
        datas: [{
          name: 'z_chars2',
          tabname: '近一周进港船舶变化情况'
        },{
          name: 'y_chars2',
          tabname: '近一周出港船舶变化情况'
        }],
        data: [{
          val: 203,
          hb: 5,
          zb: 'down',
          cb: 'cg',
          name: '进港船舶数量',
          img: require("../images/zntj/jcg/进港.svg")
        }, {
          val: 320,
          hb: 7,
          zb: 'up',
          cb: 'jg',
          name: '出港船舶数量',
          img: require("../images/zntj/jcg/出港.svg")
        }]
      },
      {
        title: 'CCT',
        type: 'cct',
        datas: [{
          name: 'z_chars3',
          tabname: '近一周进港船舶变化情况'
        },{
          name: 'y_chars4',
          tabname: '近一周出港船舶变化情况'
        }],
        data: [{
          val: 203,
          hb: 5,
          zb: 'down',
          cb: 'cg',
          name: '进港船舶数量',
          img: require("../images/zntj/jcg/进港.svg")
        }, {
          val: 320,
          hb: 7,
          zb: 'up',
          cb: 'jg',
          name: '出港船舶数量',
          img: require("../images/zntj/jcg/出港.svg")
        }]
      },
      {
        title: 'MCT',
        type: 'mct',
        datas: [{
          name: 'z_chars5',
          tabname: '近一周进港船舶变化情况'
        },{
          name: 'y_chars6',
          tabname: '近一周出港船舶变化情况'
        }],
        data: [{
          val: 203,
          hb: 5,
          zb: 'down',
          cb: 'cg',
          name: '进港船舶数量',
          img: require("../images/zntj/jcg/出港.svg")
        }, {
          val: 320,
          hb: 7,
          zb: 'up',
          cb: 'jg',
          name: '出港船舶数量',
          img: require("../images/zntj/jcg/出港.svg")
        }]
      },
      {
        title: '游轮母港',
        type: 'ylmg',
        datas: [{
          name: 'z_chars7',
          tabname: '近一周进港船舶变化情况'
        },{
          name: 'y_chars8',
          tabname: '近一周出港船舶变化情况'
        }],
        data: [{
          val: 203,
          hb: 5,
          zb: 'down',
          cb: 'cg',
          name: '进港船舶数量',
          img: require("../images/zntj/jcg/进港.svg")
        }, {
          val: 320,
          hb: 7,
          zb: 'up',
          cb: 'jg',
          name: '出港船舶数量',
          img: require("../images/zntj/jcg/出港.svg")
        }]
      },
    ]
  },
  reducers: {

  },
};