const datas = ['今日', '本周', '本月', '本年'];

export default {
  namespace: "hgcyqk",
  state: {
    datas: datas,
    data: datas[0],
    tabs: [
      { title: "查验箱量" },
      { title: "查验放行箱量" }
    ],
    source: [
      {
        headTitle: '今日海关查验箱量占比情况',
        items: [
          { title: "月占比", vl: "80%", value: "1000" },
          { title: "年占比", vl: "8%", value: "2300" }
        ]
      }
    ],
    chartPieMonth: [
      {
        headTitle: '今日海关查验箱量排名情况',
        data: {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [29, 16, 14, 12, 10, 8, 6, 5],
              backgroundColor: [
                '#39a3ef',
                '#7fc0fe',
                '#abd275',
                '#8cbd47',
                '#ed4d3f',
                '#fb5a5a',
                '#fcb247',
                '#f2c955'
              ]
            }],
            labels: [
              '查验班组1',
              '查验班组2',
              '查验班组3',
              '查验班组4',
              '查验班组5',
              '查验班组6',
              '查验班组7',
              'other'
            ]
          },
          options: {
            cutoutPercentage: 50,
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true
              }
            },
            tooltips: {
              intersect: true
            }
          }
        }
      }
    ],
    monthchart1: [
      {
        headTitle: '近一周海关查验箱量同环比情况',
        data: {
          type: 'bar',
          data: {
            datasets: [{
              label: '同比',
              fill: false,
              data: [160, 150, 160, 200, 140, 230, 250, 160, 150, 160, 200, 140],
              backgroundColor: '#b3de75',
              borderColor: '#b3de75',
              type: 'line'
            }, {
              label: '环比',
              fill: false,
              data: [260, 170, 220, 200, 190, 260, 300, 260, 170, 220, 200, 190],
              backgroundColor: '#f8c321',
              borderColor: '#f8c321',
              type: 'line'
            }, {
              label: '船代申报提单量',
              data: [160, 190, 230, 260, 160, 230, 210, 160, 190, 230, 260, 160],
              backgroundColor: '#39a3ef'
            }],
            labels: ['2017/04', '2017/05', '2017/06', '2017/07', '2017/08', '2017/09', '2017/10', '2017/11', '2017/12', '2018/01', '2018/02', '2018/03']
          },
          options: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true
              }
            }
          }
        }
      }
    ]

  },
  reducers: {
    select(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    }
  },
  effects: {

  }
};