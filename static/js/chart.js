let myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();

    $.get("/static/data/output.json", function (data) {
        myChart.hideLoading();

        // ⚪的样式
        let itemStyle = {
            normal: {
                opacity: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        };

        let sizeFunction = (x) => {
            let y = Math.sqrt(x / 5e8) + 0.1;
            return x/5;
        };
        // Schema:
        let schema = [
            {name: 'Movie', index: 2, text: 'movie', unit: ''},
            {name: 'Ratings', index: 1, text: 'rate', unit: ''},
            {name: 'Population', index: 0, text: 'population', unit: ''},
        ];

        let option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    orient: 'horizontal',
                    autoPlay: false,
                    inverse: false,
                    playInterval: 1000,
                    left: 50,
                    right: null,
                    top: null,
                    bottom: 20,
                    width: 600,
                    height: 10,
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
                    data: []
                },
                backgroundColor: '#404a59',
                title: [{
                    text: data.year[0],
                    textAlign: 'center',
                    left: '55%',
                    top: '55%',
                    textStyle: {
                        fontSize: 100,
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }, {
                    text: 'Movies!',
                    left: 'center',
                    top: 10,
                    textStyle: {
                        color: '#aaa',
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                }],
                tooltip: {
                    padding: 5,
                    backgroundColor: '#222',
                    borderColor: '#777',
                    borderWidth: 1,
                    formatter: function (obj) {
                        let value = obj.value;
                        return schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                            + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                            + schema[2].text + '：' + value[2] + schema[2].unit + '<br>';
                    }
                },
                grid: {
                    top: 100,
                    containLabel: true,
                    left: 30,
                    right: 30
                },
                xAxis: {
                    type: 'value',
                    name: 'population',
                    max: 10000,
                    nameGap: 25,
                    nameTextStyle: {
                        fontSize: 18
                    },
                    nameLocation: 'middle',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                yAxis: {
                    type: 'value',
                    name: 'rate',
                    max: 5,
                    nameTextStyle: {
                        color: '#ccc',
                        fontSize: 18
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                visualMap: [
                    {
                        type: 'piecewise',
                        show: true,
                        dimension: 3,
                        categories: data.types,
                        precision: 0.1,
                        textGap: 10,
                        textStyle: {
                            color: '#ccc'
                        },
                        inRange: {
                            color: (function () {
                                let colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489',];
                                return colors.concat(colors);
                            })()
                        },
                        right: 0,
                        top: 0,
                        orient: 'vertical'
                    }
                ],
                series: [
                    {
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: data.series[0],
                        symbolSize: (val) => {
                            return sizeFunction(val[2]);
                    }
                    }
                ],
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'quinticInOut'
            },
            options: []
        };

        //变更后的数据
        for (let n = 0; n < data.year.length; n++) {
            option.baseOption.timeline.data.push(data.year[n]);
            option.options.push({
                title: {
                    show: true,
                    'text': data.year[n] + ''
                },
                series: {
                    name: data.year[n],
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: data.series[n],
                    symbolSize: (val) => {
                        return sizeFunction(val[2]);
                    }
                },
                xAxis: {
                  max: () => {
                      let max = 0;
                      for (let i = 0; i < data.series[n].length; i++) {
                          if (data.series[n][i][0] > max)
                              max = data.series[n][i][0];
                      }
                      return max;
                    }
                  },
            });
        }

        myChart.setOption(option);

    });