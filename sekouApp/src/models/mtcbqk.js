export default {
  namespace: 'mtcbqk',
  state: {
    tabs: [
      { title: '全部', type: 'all', data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg',name:'进港船舶数量' }, { val: 320, hb: 7, zb: 'up', cb: 'jg',name:'出港船舶数量' }] },
      { title: 'SCT', type: 'sct', data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg',name:'进港船舶数量' }, { val: 320, hb: 7, zb: 'up', cb: 'jg' ,name:'出港船舶数量'}] },
      { title: 'CCT', type: 'cct', data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg' ,name:'进港船舶数量'}, { val: 320, hb: 7, zb: 'up', cb: 'jg',name:'出港船舶数量' }] },
      { title: 'MCT', type: 'mct', data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg',name:'进港船舶数量' }, { val: 320, hb: 7, zb: 'up', cb: 'jg' ,name:'出港船舶数量'}] },
      { title: '游轮母港', type: 'ylmg', data: [{ val: 203, hb: 5, zb: 'down', cb: 'cg',name:'进港船舶数量' }, { val: 320, hb: 7, zb: 'up', cb: 'jg',name:'出港船舶数量' }] },
    ]
  },
  reducers: {

  },
};