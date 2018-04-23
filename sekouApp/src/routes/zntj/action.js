import { subscribes, publish } from '../../core/arbiter';
import store from '../../index';
const { dispatch } = store;

subscribes(
    {
        sub: 'tgxl/showCharts',
        func: (e) => {
            if(e[0] === 1){
                var charts1 ={
                    type: 'doughnut',
                    data: {
                        datasets: [
                            {
                                data: [29, 16, 14, 12,10,8, 6, 5],
                                backgroundColor:["#ffc07b","#63b1ff","#3983cf", "#9c2a64","#ff7e7d","#b4e885","#1c9b62", "#d03946"]
                            }
                        ],
                        labels: [
                            '船代1',
                            'Others',
                            '船代2',
                            '船代3',
                            '船代4',
                            '船代5',
                            '船代6',
                            '船代7',
                        ],
                        
                    },
                    options: {
                        legend: {
                            position: 'bottom',
                        },
                    }
                };
                var charts2 ={
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [
                            {
                                type: 'line',
                                borderWidth: 2,
                                label: '同比',
                                borderColor: "#47c28c",
                                backgroundColor: "#47c28c",                           
                                fill: false,
                                data: [0.80, 0.56, 0.83, 0.95],
                                yAxisID: 'y-axis-2',
                            }, {
                                type: 'line',
                                label: '环比',
                                borderColor: "#0092ff",
                                backgroundColor: "#0092ff",
                                borderWidth: 2,
                                fill: false,
                                data: [0.85, 0.8, 1.15,1.05],
                                yAxisID: 'y-axis-2',
                            }, {
                                type: 'bar',
                                label: '船报申报提单量',
                                backgroundColor: '#f14e51',
                                data: [255, 180, 220, 210],
                                borderColor: 'white',
                                borderWidth: 2,
                                yAxisID: 'y-axis-1',
                            }, 
                        ]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        scales: {
                            scaleStartValue: 0,
                            yAxes: [{
                                type: 'linear',
                                display: true,
                                position: 'left',
                                id: 'y-axis-1',
                                ticks: {
                                    suggestedMin: 0,  
                                    beginAtZero: true 
                                }
                            }, {
                                type: 'linear', 
                                display: true,
                                position: 'right',
                                id: 'y-axis-2',
                                ticks: {
                                    suggestedMin: 0, 
                                    beginAtZero: true  
                                }
                            }],
                        }
                    }
                }
            }
            if(e[0] === 2){
                var charts1 ={
                    type: 'doughnut',
                    data: {
                        datasets: [
                            {
                                data: [29, 16, 14, 12,10,8, 6, 5],
                                backgroundColor:["#ffc07b","#63b1ff","#3983cf", "#9c2a64","#ff7e7d","#b4e885","#1c9b62", "#d03946"]
                            }
                        ],
                        labels: [
                            '关口1',
                            'Others',
                            '关口2',
                            '关口3',
                            '关口4',
                            '关口5',
                            '关口6',
                            '关口7',
                        ],
                        
                    },
                    options: {
                        title: {
                            display: true,
                            text: '8个分类',
                        },
                        legend: {
                            position: 'bottom',
                        },
                    }
                };
                var charts2 ={
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [
                            {
                                type: 'line',
                                borderWidth: 2,
                                label: '同比',
                                borderColor: "#47c28c",
                                backgroundColor: "#47c28c",                           
                                fill: false,
                                data: [0.80, 0.56, 0.83, 0.95],
                                yAxisID: 'y-axis-2',
                            }, {
                                type: 'line',
                                label: '环比',
                                borderColor: "#0092ff",
                                backgroundColor: "#0092ff",
                                borderWidth: 2,
                                fill: false,
                                data: [0.85, 0.8, 1.15,1.05],
                                yAxisID: 'y-axis-2',
                            }, {
                                type: 'bar',
                                label: '船报申报提单量',
                                backgroundColor: '#f14e51',
                                data: [255, 180, 220, 210],
                                borderColor: 'white',
                                borderWidth: 2,
                                yAxisID: 'y-axis-1',
                            }, 
                        ]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        scales: {
                            scaleStartValue: 0,
                            yAxes: [{
                                type: 'linear',
                                display: true,
                                position: 'left',
                                id: 'y-axis-1',
                                ticks: {
                                    suggestedMin: 0,  
                                    beginAtZero: true 
                                }
                            }, {
                                type: 'linear', 
                                display: true,
                                position: 'right',
                                id: 'y-axis-2',
                                ticks: {
                                    suggestedMin: 0, 
                                    beginAtZero: true  
                                }
                            }],
                        }
                    }
                }
            }
            return [charts1, charts2];
        }
    },
    {
        sub: 'zssk/showCharts',
        func: (e) => {
            if(e[0] === 1){
            var charts1 ={
                type: 'bar',
                data: {
                    datasets:[ {
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
                      },{
                        label: '船代申报提单量',
                        data: [160, 190, 230, 260,160,230,210,160, 190, 230, 260,160],
                        backgroundColor:'#f57874'
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
            };
            }
            if(e[0] === 2){
            var charts1 ={
                type: 'bar',
				data: {
                    labels: ['10周', '11周', '12周', '13周'],
                    datasets: [
                        {
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#47c28c",
				            backgroundColor: "#47c28c",                           
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#0092ff",
				            backgroundColor: "#0092ff",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15,1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#f14e51',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        }, 
                    ]
                },
				options: {
                    responsive: true,
                    scaleStartValue: 0,
                    scales: {
                        scaleStartValue: 0,
						yAxes: [{
							type: 'linear',
							display: true,
							position: 'left',
                            id: 'y-axis-1',
                            ticks: {
                                suggestedMin: 0,  
                                beginAtZero: true 
                            }
						}, {
							type: 'linear', 
							display: true,
							position: 'right',
                            id: 'y-axis-2',
                            ticks: {
                                suggestedMin: 0, 
                                beginAtZero: true  
                            }
						}],
					}
				}
            }
          }
            return [charts1];
        }
    },
    {
        sub: 'bgdl/showCharts',
        func: (e) => {
            if(e[0] === 1){
                var charts1 ={
                    type: 'doughnut',
                    data: {
                        datasets: [
                            {
                                data: [29, 16, 14, 12,10,8, 6, 5],
                                backgroundColor:["#ffc07b","#63b1ff","#3983cf", "#9c2a64","#ff7e7d","#b4e885","#1c9b62", "#d03946"]
                            }
                        ],
                        labels: [
                            '船代1',
                            'Others',
                            '船代2',
                            '船代3',
                            '船代4',
                            '船代5',
                            '船代6',
                            '船代7',
                        ],
                        
                    },
                    options: {
                        title: {
                            display: true,
                            text: '8个分类',
                        },
                        legend: {
                            position: 'bottom',
                        },
                    }
                };
            }
            if(e[0] === 2){
            var charts1 ={
                type: 'bar',
				data: {
                    labels: ['10周', '11周', '12周', '13周'],
                    datasets: [
                        {
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#47c28c",
				            backgroundColor: "#47c28c",                           
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#0092ff",
				            backgroundColor: "#0092ff",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15,1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#f14e51',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        }, 
                    ]
                },
				options: {
                    responsive: true,
                    scaleStartValue: 0,
                    scales: {
                        scaleStartValue: 0,
						yAxes: [{
							type: 'linear',
							display: true,
							position: 'left',
                            id: 'y-axis-1',
                            ticks: {
                                suggestedMin: 0,  
                                beginAtZero: true 
                            }
						}, {
							type: 'linear', 
							display: true,
							position: 'right',
                            id: 'y-axis-2',
                            ticks: {
                                suggestedMin: 0, 
                                beginAtZero: true  
                            }
						}],
					}
				}
            }
          }
            return [charts1];
        }
    }
);