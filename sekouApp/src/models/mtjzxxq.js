export default {
  namespace: 'mtjzxxq',
  state: {
    tabs: [
      {
        title: '全部', type: 'all',
        datas: [
          { name: 'z_chars1', tabname: '近一周进闸情况' },
          { name: 'y_chars1', tabname: '近一周出闸情况' },
          { name: 'v_chars1', tabname: '近一周装船情况' },
          { name: 'b_chars1', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸数量', img: require("../images/zntj/jcg/cg.svg") },
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
      {
        title: 'SCT', type: 'sct',
        datas: [
          { name: 'z_chars2', tabname: '近一周进闸情况' },
          { name: 'y_chars2', tabname: '近一周出闸情况' },
          { name: 'v_chars2', tabname: '近一周装船情况' },
          { name: 'b_chars2', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸数量',  img: require("../images/zntj/jcg/cg.svg") },
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
      {
        title: 'CCT', type: 'cct',
        datas: [
          { name: 'z_chars3', tabname: '近一周进闸情况' },
          { name: 'y_chars3', tabname: '近一周出闸情况' },
          { name: 'v_chars3', tabname: '近一周装船情况' },
          { name: 'b_chars3', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸数量',  img: require("../images/zntj/jcg/cg.svg") },
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
      {
        title: 'MCT', type: 'mct',
        datas: [
          { name: 'z_chars4', tabname: '近一周进闸情况' },
          { name: 'y_chars4', tabname: '近一周出闸情况' },
          { name: 'v_chars4', tabname: '近一周装船情况' },
          { name: 'b_chars4', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸数量',  img: require("../images/zntj/jcg/cg.svg") },
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
      {
        title: '游轮母港', type: 'ylmg',
        datas: [
          { name: 'z_chars5', tabname: '近一周进闸情况' },
          { name: 'y_chars5', tabname: '近一周出闸情况' },
          { name: 'v_chars5', tabname: '近一周装船情况' },
          { name: 'b_chars5', tabname: '近一周卸船情况' }
        ],
        data: [
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸数量',  img: require("../images/zntj/jcg/cg.svg") },
          { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '装船数量', img: require("../images/zntj/jcg/jg.svg") },
          { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '卸船数量', img: require("../images/zntj/jcg/cg.svg") }
        ]
      },
    ]
  },
  reducers: {

  },
};