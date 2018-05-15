export default {
    namespace: 'mtcl',
    state: {
      tabs: [
        {
          title: '全部', type: 'all',
          datas: [
            { name: 'z_chars1', tabname: '近一周进闸车辆变化情况' },
            { name: 'y_chars1', tabname: '近一周出闸车辆变化情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆数量', img: require("../images/zntj/jcg/cg.svg") },
          ]
        },
        {
          title: 'SCT', type: 'sct',
          datas: [
            { name: 'z_chars2', tabname: '近一周进闸车辆变化情况' },
            { name: 'y_chars2', tabname: '近一周出闸车辆变化情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆数量',  img: require("../images/zntj/jcg/cg.svg") },
          ]
        },
        {
          title: 'CCT', type: 'cct',
          datas: [
            { name: 'z_chars3', tabname: '近一周进闸车辆变化情况' },
            { name: 'y_chars3', tabname: '近一周出闸车辆变化情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆数量',  img: require("../images/zntj/jcg/cg.svg") },
          ]
        },
        {
          title: 'MCT', type: 'mct',
          datas: [
            { name: 'z_chars4', tabname: '近一周进闸车辆变化情况' },
            { name: 'y_chars4', tabname: '近一周出闸车辆变化情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '进闸车辆数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '出闸车辆数量',  img: require("../images/zntj/jcg/cg.svg") },
          ]
        },
      ]
    },
    reducers: {
  
    },
  };