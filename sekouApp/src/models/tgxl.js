const datas = [
  {label: "今天", value: 1},
  {label: "本周", value: 2},
];

export default {
    namespace: "tgxl",
    state: { 
      datas: datas,
      data:[datas[0].value],
      source: [
        {
        headTitle:'本月总量征收税款占比情况',
        items:[
          {title:"月占比", vl:"80%", value:"1000"},
          {title:"年占比", vl:"8%", value:"2300"}
        ]
      }
      ],
      chartPieMonth:[
        {
          headTitle:'本月报关单量排名情况',
          data: {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [29,16,14,12,10,8,6,5],
                    backgroundColor:[
                        '#1890ff',
                        '#7fc0fe', 
                        '#acd598', 
                        '#47c39e', 
                        '#f57874', 
                        '#e76568', 
                        '#f3e095', 
                        '#f3d665'
                    ]
                }],
                labels: [
                    '关区1',
                    '关区2',
                    '关区3',
                    '关区4',
                    '关区5',
                    '关区6',
                    '关区7',
                    'other'
                ]
            },
            options: {
                cutoutPercentage:50,
                legend:{
                    position:'bottom',
                    labels:{
                        usePointStyle:true
                    }
                },
                tooltips:{
                    intersect:true
                }
            }
        }          
        }  
      ], 
      monthchart1:[
        {
          headTitle:'近一年报关单量同环比情况',
          data:{
            type: 'bar',
            data: {
                datasets:[{
                    label: '船代申报提单量',
                    data: [160, 190, 230, 260,160,230,210,160, 190, 230, 260,160],
                    backgroundColor:'#f57874'
                  }, {
                    label: '同比',
                    fill: false,
                    data: [160, 150, 160, 200,140,230,250,160, 150, 160, 200,140],
                    backgroundColor:'#acd598',
                    borderColor:'#acd598',
                    type: 'line' 
                  }, {
                    label: '环比',
                    fill: false,
                    data: [260, 170, 220, 200,190,260,300,260, 170, 220, 200,190],
                    backgroundColor:'#1890ff',
                    borderColor:'#1890ff',
                    type: 'line'
                  }],
                labels:['2017/04','2017/05','2017/06','2017/07','2017/08','2017/09','2017/10','2017/11','2017/12','2018/01','2018/02','2018/03']
                },
                options: {
                  legend:{
                    position:'bottom',
                    labels:{
                        usePointStyle:true
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
          source:  [{
            headTitle:'本月总量征收税款占比情况',
            items:[
              {title:"周占比", vl: Math.random().toFixed(2) * 100 +  "%", value:"1000"},
              {title:"月占比", vl:"80%", value:"1000"}, 
              {title:"年占比", vl:"8%", value:"2300"}
            ]
          }
         ],   
        };
      }
    },
    effects: {
      
    }
  };
  
  