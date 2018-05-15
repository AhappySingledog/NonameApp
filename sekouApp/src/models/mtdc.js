export default {
    namespace: 'mtdc',
    state: {
      tabs: [
        {
          title: '全部', type: 'all',
          datas: [
            { name: 'z_chars1', tabname: '近一周空箱情况' },
            { name: 'y_chars1', tabname: '近一周重箱情况' },
            { name: 'v_chars1', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '重箱数量', img: require("../images/zntj/jcg/cg.svg") },
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../images/zntj/jcg/jg.svg") },
          ]
        },
        {
          title: 'SCT', type: 'sct',
          datas: [
            { name: 'z_chars2', tabname: '近一周空箱情况' },
            { name: 'y_chars2', tabname: '近一周重箱情况' },
            { name: 'v_chars2', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '重箱数量',  img: require("../images/zntj/jcg/cg.svg") },
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../images/zntj/jcg/jg.svg") },
          ]
        },
        {
          title: 'CCT', type: 'cct',
          datas: [
            { name: 'z_chars3', tabname: '近一周空箱情况' },
            { name: 'y_chars3', tabname: '近一周重箱情况' },
            { name: 'v_chars3', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '重箱数量',  img: require("../images/zntj/jcg/cg.svg") },
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../images/zntj/jcg/jg.svg") },
          ]
        },
        {
          title: 'MCT', type: 'mct',
          datas: [
            { name: 'z_chars4', tabname: '近一周空箱情况' },
            { name: 'y_chars4', tabname: '近一周重箱情况' },
            { name: 'v_chars4', tabname: '近一周危险品箱情况' },
          ],
          data: [
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '空箱数量', img: require("../images/zntj/jcg/jg.svg") },
            { val: 320, hb: 7, zb: 'up', cb: 'jg', name: '重箱数量',  img: require("../images/zntj/jcg/cg.svg") },
            { val: 203, hb: 5, zb: 'down', cb: 'cg', name: '危险品箱数量', img: require("../images/zntj/jcg/jg.svg") },
          ]
        },
      ]
    },
    reducers: {
  
    },
  };