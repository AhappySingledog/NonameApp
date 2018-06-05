import {
    subscribes,
    publish
} from '../../core/arbiter';
import store from '../../index';
const {
    dispatch
} = store;

subscribes({
    sub: 'bgdl/showCharts',
    func: (e) => {

    }
}, {
        sub: 'zssk/showCharts',
        func: (e) => {
            if (e === 0) {
                var charts1 = {
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
                };
            }
            if (e === 1) {
                var charts1 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        legend: {
                            position: 'bottom',
                        },
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
    }, {
        sub: 'cysx/showCharts',
        func: (e) => {
            if (e === 0) {
                var charts1 = {
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
                };
                var charts2 = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [7, 3],
                            backgroundColor: ["#39a3ef", "#e8e8e8"],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        legend: {
                            position: 'bottom',
                        },
                    }
                };
            }

            if (e === 1) {
                var charts1 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
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
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                };
                var charts2 = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [2, 8],
                            backgroundColor: ["#39a3ef", "#e8e8e8"],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        legend: {
                            position: 'bottom',
                        },
                    }
                };
            }
            return [charts1, charts2];
        }
    }, {
        sub: 'tgxl/showCharts',
        func: (e) => {
            if (e === 0) {

                var charts2 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        legend: {
                            position: 'bottom',
                        },
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
                var charts3 = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [7, 3],
                            backgroundColor: ["#39a3ef", "#e8e8e8"],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        legend: {
                            position: 'bottom',
                        },
                    }
                };
            }
            if (e === 1) {

                var charts2 = {
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
                            position: 'bottom'
                        }
                    }
                };
                var charts3 = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [8, 2],
                            backgroundColor: ["#39a3ef", "#e8e8e8"],
                        }]
                    }
                };
            }
            return [charts2, charts3];
        }
    }, {
        sub: 'tdsbqk/showCharts',
        func: (e) => {

            var charts1 = {
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
            };
            var charts2 = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [24, 33, 43],
                        backgroundColor: [
                            '#39a3ef',
                            '#7fc0fe',
                            '#b3de75',
                        ]
                    }],
                    labels: [
                        'SCT',
                        'CCT',
                        'MCT'
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'cdsbqk/showCharts',
        func: (e) => {

            var charts1 = {
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
            };
            var charts2 = {
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
                        '船代1',
                        '船代2',
                        '船代3',
                        '船代4',
                        '船代5',
                        '船代6',
                        '船代7',
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'bghldqk/showCharts',
        func: (e) => {

            var charts1 = {
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
            };
            var charts2 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'jzxsbqk/showCharts',
        func: (e) => {

            var charts1 = {
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
            };
            var charts2 = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [24, 33, 43],
                        backgroundColor: [
                            '#39a3ef',
                            '#7fc0fe',
                            '#abd275',
                        ]
                    }],
                    labels: [
                        'SCT',
                        'CCT',
                        'MCT'
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'yqqysb/showCharts',
        func: (e) => {
            var charts1 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            var charts2 = {
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'mtdc/showCharts',
        func: (e) => {
            var charts1 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            var charts2 = {
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
            };
            var charts3 = {
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
            };
            return [charts1, charts2, charts3];
        }
    }, {
        sub: 'mtcb/showCharts',
        func: (e) => {
            var charts1 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            var charts2 = {
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'mtjzx/showCharts',
        func: (e) => {
            var charts1 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            var charts2 = {
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
            };
            var charts3 = {
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
            };
            var charts4 = {
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
            };
            return [charts1, charts2, charts3, charts4];
        }
    }, {
        sub: 'mtcl/showCharts',
        func: (e) => {
            var charts1 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            var charts2 = {
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'yqcl/showCharts',
        func: (e) => {
            var charts1 = {
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
                        '报关行1',
                        '报关行2',
                        '报关行3',
                        '报关行4',
                        '报关行5',
                        '报关行6',
                        '报关行7',
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
            };
            var charts2 = {
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
            };
            return [charts1, charts2];
        }
    }, {
        sub: 'jckbazqd/showCharts',
        func: (e) => {
            var charts1 = {
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
            };
            return [charts1];
        }
    }, {
        sub: 'mtwsbjzx/showCharts',
        func: (e) => {
            if (e[0] === 1) {
                var charts1 = {
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
                };
                var charts2 = {
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
                };
                var charts3 = {
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
                };
                var charts4 = {
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
                };
            }
            if (e[0] === 2) {
                var charts1 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        legend: {
                            position: 'bottom',
                        },
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
                };
                var charts2 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        legend: {
                            position: 'bottom',
                        },
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
                };
                var charts3 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        legend: {
                            position: 'bottom',
                        },
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
                };
                var charts4 = {
                    type: 'bar',
                    data: {
                        labels: ['10周', '11周', '12周', '13周'],
                        datasets: [{
                            type: 'line',
                            borderWidth: 2,
                            label: '同比',
                            borderColor: "#b3de75",
                            backgroundColor: "#b3de75",
                            fill: false,
                            data: [0.80, 0.56, 0.83, 0.95],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'line',
                            label: '环比',
                            borderColor: "#f8c321",
                            backgroundColor: "#f8c321",
                            borderWidth: 2,
                            fill: false,
                            data: [0.85, 0.8, 1.15, 1.05],
                            yAxisID: 'y-axis-2',
                        }, {
                            type: 'bar',
                            label: '船报申报提单量',
                            backgroundColor: '#39a3ef',
                            data: [255, 180, 220, 210],
                            borderColor: 'white',
                            borderWidth: 2,
                            yAxisID: 'y-axis-1',
                        },]
                    },
                    options: {
                        responsive: true,
                        scaleStartValue: 0,
                        legend: {
                            position: 'bottom',
                        },
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
            return [charts1, charts2, charts3, charts4];
        }
    }, {
        sub: 'mtsj/showCharts',
        func: (e) => {
        //    return  publish("webAction", { path: "queryTableByWhere",svn: "skhg_stage_service", data: {tableName: "SCCT_DATA", where: "TERMINALCODE = SCT" } }).then(res => {
        //        return  res;
        //    })
        var charts1 = {
            type: 'bar',
            data: {
              datasets: [{
                label: '船舶进境数量',
                data: [200, 190],
                backgroundColor: '#39a3ef'
              }, {
                label: '船舶出境数量',
                data: [260, 170],
                backgroundColor: '#8cbd47'
              }],
              labels: ['2018/05/30', '2018/05/28']
            },
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
        };
        var charts2 = {
            type: 'bar',
            data: {
              datasets: [{
                label: '进闸箱量',
                data: [200, 190],
                backgroundColor: '#39a3ef'
              }, {
                label: '出闸箱量',
                data: [260, 170],
                backgroundColor: '#8cbd47'
              }, {
                label: '装船箱量',
                data: [210, 290],
                backgroundColor: '#7fc0fe'
              }, {
                label: '卸船箱量',
                data: [220, 180],
                backgroundColor: '#f2c955'
              }],
              labels: ['2018/05/30', '2018/05/28']
            },
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
        };
        var charts3 = {
            type: 'bar',
            data: {
              datasets: [{
                label: '进闸车辆数量',
                data: [200, 190],
                backgroundColor: '#39a3ef'
              }, {
                label: '出闸车辆数量',
                data: [260, 170],
                backgroundColor: '#8cbd47'
              }],
              labels: ['2018/05/30', '2018/05/28']
            },
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
        };
        var charts4 = {
            type: 'bar',
            data: {
              datasets: [{
                label: '空箱数量',
                data: [200, 190],
                backgroundColor: '#39a3ef'
              }, {
                label: '重箱数量',
                data: [260, 170],
                backgroundColor: '#8cbd47'
              }, {
                label: '危险品箱数量',
                data: [210, 290],
                backgroundColor: '#7fc0fe'
              }],
              labels: ['2018/05/30', '2018/05/28']
            },
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
        };
        var charts5 = {
            type: 'bar',
            data: {
              datasets: [{
                label: '超过三个月未放行的集装箱数量',
                data: [20, 19],
                backgroundColor: '#39a3ef'
              }],
              labels: ['2018/05/30', '2018/05/28']
            },
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
        };
        var charts6 = {
            type: 'bar',
            data: {
              datasets: [{
                label: '危险品箱数量',
                data: [20, 20],
                backgroundColor: '#39a3ef'
              }],
              labels: ['2018/05/30', '2018/05/28']
            },
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
        };
        return [charts1, charts2,charts3,charts4,charts5,charts6];
        }
    }, {
        sub: 'tgsj/showCharts',
        func: (e) => {
            var charts1 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '船舶进境数量',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: '船舶出境数量',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts2 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: 'MCT提单数量',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: 'SCT提单数量',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: 'CCT提单数量',
                    data: [210, 290],
                    backgroundColor: '#7fc0fe'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts3 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '船代1提单数量',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: '船代1提单数量',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: '船代1提单数量',
                    data: [250, 180],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: '船代3提单数量',
                    data: [240, 160],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: '船代4提单数量',
                    data: [230, 150],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: '船代5提单数量',
                    data: [220, 140],
                    backgroundColor: '#8cbd47'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts4 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '报关行1提单数量',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: '报关行2提单数量',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: '报关行3提单数量',
                    data: [210, 290],
                    backgroundColor: '#7fc0fe'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts5 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: 'MCT',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: 'SCT',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: 'CCT',
                    data: [210, 290],
                    backgroundColor: '#7fc0fe'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts6 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '查验箱量量',
                    data: [250, 140],
                    backgroundColor: '#39a3ef'
                  },{
                    label: '放行箱量',
                    data: [200, 190],
                    backgroundColor: '#8cbd47'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            return [charts1, charts2,charts3,charts4,charts5,charts6];
        }
    }, {
        sub: 'yqsj/showCharts',
        func: (e) => {
            var charts1 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '进闸车辆数量',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: '出闸车辆数量',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts2 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '库存数量',
                    data: [200, 190],
                    backgroundColor: '#39a3ef'
                  }, {
                    label: '入库数量',
                    data: [260, 170],
                    backgroundColor: '#8cbd47'
                  }, {
                    label: '出库数量',
                    data: [210, 290],
                    backgroundColor: '#7fc0fe'
                  }, {
                    label: '申报数量',
                    data: [220, 180],
                    backgroundColor: '#f2c955'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            var charts3 = {
                type: 'bar',
                data: {
                  datasets: [{
                    label: '审核的进出口备案制清单数量',
                    data: [80, 80],
                    backgroundColor: '#39a3ef'
                  }],
                  labels: ['2018/05/30', '2018/05/28']
                },
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true
                    }
                  }
                }
            };
            return [charts1, charts2,charts3];
        }
    });