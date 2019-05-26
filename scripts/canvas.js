// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));

const dataBJ = [
    [1, 55, 9, 56, 0.46, 18, 6, "良"],
    [2, 25, 11, 21, 0.65, 34, 9, "优"],
    [3, 56, 7, 63, 0.3, 14, 5, "良"],
    [4, 33, 7, 29, 0.33, 16, 6, "优"],
    [5, 42, 24, 44, 0.76, 40, 16, "优"],
    [6, 82, 58, 90, 1.77, 68, 33, "良"],
    [7, 74, 49, 77, 1.46, 48, 27, "良"],
    [8, 78, 55, 80, 1.29, 59, 29, "良"],
    [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
    [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
    [11, 39, 19, 38, 0.57, 31, 15, "优"],
    [12, 41, 11, 40, 0.43, 21, 7, "优"],
    [13, 64, 38, 74, 1.04, 46, 22, "良"],
    [14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
    [15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
    [16, 33, 6, 29, 0.34, 13, 5, "优"],
    [17, 94, 66, 110, 1.54, 62, 31, "良"],
    [18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
    [19, 57, 31, 54, 0.96, 32, 14, "良"],
    [20, 22, 8, 17, 0.48, 23, 10, "优"],
    [21, 39, 15, 36, 0.61, 29, 13, "优"],
    [22, 94, 69, 114, 2.08, 73, 39, "良"],
    [23, 99, 73, 110, 2.43, 76, 48, "良"],
    [24, 31, 12, 30, 0.5, 32, 16, "优"],
    [25, 42, 27, 43, 1, 53, 22, "优"],
    [26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
    [27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
    [28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
    [29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
    [30, 52, 24, 60, 1.03, 50, 21, "良"],
    [31, 46, 5, 49, 0.28, 10, 6, "优"]
];



var a =[
    {name: 'rating', attr1: 'movieId', attr2: 'timestamp', attr3: 'userId'},
    {name: 4, attr1: 1, attr2: 964982703, attr3: 1},
    {name: 4, attr1: 3, attr2: 964981247, attr3: 1},
    {name: 4, attr1: 6, attr2: 964982224, attr3: 1},
    {name: 5, attr1: 47, attr2: 964983815, attr3: 1},
    {name: 5, attr1: 50, attr2: 964982931, attr3: 1},
    {name: 3, attr1: 70, attr2: 964982400, attr3: 1},
    {name: 5, attr1: 101, attr2: 964980868, attr3: 1},
    {name: 4, attr1: 110, attr2: 964982176, attr3: 1},
    {name: 5, attr1: 151, attr2: 964984041, attr3: 1},
    {name: 5, attr1: 157, attr2: 964984100, attr3: 1},
    {name: 5, attr1: 163, attr2: 964983650, attr3: 1},
    {name: 5, attr1: 216, attr2: 964981208, attr3: 1},
    {name: 3, attr1: 223, attr2: 964980985, attr3: 1},
    {name: 5, attr1: 231, attr2: 964981179, attr3: 1},
    {name: 4, attr1: 235, attr2: 964980908, attr3: 1},
    {name: 5, attr1: 260, attr2: 964981680, attr3: 1},
    {name: 3, attr1: 296, attr2: 964982967, attr3: 1},
    {name: 3, attr1: 316, attr2: 964982310, attr3: 1},
    {name: 5, attr1: 333, attr2: 964981179, attr3: 1},
    {name: 4, attr1: 349, attr2: 964982563, attr3: 1},
    {name: 4, attr1: 356, attr2: 964980962, attr3: 1},
    {name: 5, attr1: 362, attr2: 964982588, attr3: 1},
    {name: 4, attr1: 367, attr2: 964981710, attr3: 1},
    {name: 3, attr1: 423, attr2: 964982363, attr3: 1},
    {name: 4, attr1: 441, attr2: 964980868, attr3: 1},
    {name: 5, attr1: 457, attr2: 964981909, attr3: 1},
    {name: 4, attr1: 480, attr2: 964982346, attr3: 1},
    {name: 3, attr1: 500, attr2: 964981208, attr3: 1},
    {name: 5, attr1: 527, attr2: 964984002, attr3: 1},
    {name: 4, attr1: 543, attr2: 964981179, attr3: 1},
    {name: 4, attr1: 552, attr2: 964982653, attr3: 1},
    {name: 5, attr1: 553, attr2: 964984153, attr3: 1},
    {name: 4, attr1: 590, attr2: 964982546, attr3: 1},
    {name: 4, attr1: 592, attr2: 964982271, attr3: 1},
    {name: 4, attr1: 593, attr2: 964983793, attr3: 1},
    {name: 5, attr1: 596, attr2: 964982838, attr3: 1},
    {name: 5, attr1: 608, attr2: 964982931, attr3: 1},
    {name: 3, attr1: 648, attr2: 964982563, attr3: 1},
    {name: 5, attr1: 661, attr2: 964982838, attr3: 1},
    {name: 3, attr1: 673, attr2: 964981775, attr3: 1},
    {name: 4, attr1: 733, attr2: 964982400, attr3: 1}
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    baseOption: {
        backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
            y: 'top',
            data: ['北京', '上海', '广州'],
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            x: '10%',
            x2: 150,
            y: '18%',
            y2: '10%'
        },
        xAxis: {
            type: 'value',
            name: '日期',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            max: 31,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                dimension: 2,
                min: 0,
                max: 250,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：PM2.5'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    symbolSize: [10, 70]
                },
                outOfRange: {
                    symbolSize: [10, 70],
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            },
            {
                left: 'right',
                bottom: '5%',
                dimension: 6,
                min: 0,
                max: 50,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['明暗：二氧化硫'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    colorLightness: [1, 0.5]
                },
                outOfRange: {
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
            left: null,
            right: 0,
            top: 20,
            bottom: 20,
            width: 55,
            label: {
                normal: {
                    textStyle: {
                        color: '#999'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'diamond',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: a
        },
        series: [
            {
                type: 'scatter',
                itemStyle: itemStyle,
                data: a
            }
        ],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);