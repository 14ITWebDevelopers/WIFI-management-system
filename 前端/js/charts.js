
// ****************************
// 总览中的一些饼状图Pie
// ****************************
var myColor = ['#10C460', '#DE4949', '#CEC51A', '#16A2EF'];
var labelFromatter = {
	normal: {
		label: {
			formatter: function(params) {
				return 100 - params.value + '%'
			},
			textStyle: {
				baseline: 'top'
			}
		}
	},
};
var labelTop = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		}
	}
};
var labelBottom = {
	normal: {
		color: '#ccc',
		label: {
			show: true,
			position: 'center',
			textStyle: {
				fontSize: 20,
				fontFamily: 'Microsoft YaHei, sans-serif',
				color: '#242424',
			}
		},
		labelLine: {
			show: false
		}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};

// 正在工作设备量
function workOption() {
	var optionWork = {
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'bottom',
            data: ['正在工作设备量', '设备总量'],
            textStyle: {
                color: '#000'
            }
        },
        title: {
            x: 'center',
            y: 'center',
            text: '正常工作\n',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 16,
                color: '#FF7F50',
                textAlign: 'center'
            },
            link: './index-work.html'

        },
        series: [{
            name: '正常工作',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: labelFromatter,
            data: [{
                value: 65,
                name: '设备总量',
                itemStyle: labelBottom
            }, {

                value: 35,
                name: '正在工作设备量',
                itemStyle: labelTop
            }]
        }]
    };

    return optionWork;
}

//在线人数
function onlineOption(){
	var optionOnline = {
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'bottom',
            data: ['当前在线总人数', '已经认证人数'],
            textStyle: {
                color: '#000'
            }
        },
        title: {
            x: 'center',
            y: 'center',
            text: '在线人数\n',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 16,
                color: myColor[1],
                textAlign: 'center'
            },
            link: './index-work.html'

        },
        series: [{
            name: '在线人数',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: labelFromatter,
            data: [{
                value: 46,
                name: '已经认证人数',
                itemStyle: labelBottom

            }, {
                value: 54,
                name: '当前在线总人数',
                itemStyle: {
                    normal: {
                    	color: myColor[1],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
            }]
        }]
    };

    return optionOnline;
};

// 流量
function flowOption(){
	var optionFlow = {
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'bottom',
            data: ['已用流量', '所有设备流量总量'],
            textStyle: {
                color: '#000'
            }
        },
        title: {
            x: 'center',
            y: 'center',
            text: '流量已用\n',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 16,
                color: myColor[3],
            },
            link: './index-work.html'

        },
        series: [{
            name: '流量已用',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: labelFromatter,
            data: [{
                value: 70,
                name: '所有设备流量总量',
                itemStyle: labelBottom

            }, {
                value: 30,
                name: '已用流量',
                itemStyle: {
                    normal: {
                    	color: myColor[3],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
            }]
        }]
    };

    return optionFlow;
};

 // 广告点击量
function adOption(){
	var optionAd = {
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'bottom',
            data: ['广告下载量', '本地资源访问量', 'APP下载量'],
            textStyle: {
                color: '#000'
            }
        },
        title: {
            x: 'center',
            y: 'center',
            text: '广告点击量',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 16,
                color: '#000'
            },
            link: 'http://www.baidu.com'

        },
        series: [{
            name: '广告点击量',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                value: 40,
                name: '广告下载量',

            }, {
                value: 30,
                name: '本地资源访问量',
            }, {
                value: 30,
                name: 'APP下载量',
            }]
        }]
    };

    return optionAd;
};

// ***************************************
// 总览中的一些饼状图Pie  End end end end 
// ***************************************


// ***************************************
// 广告和流量分析中的一些图表   
// ***************************************

// 广告点击量
function adMainFunction(){
	var tempOption = {
        title: {
            text: '广告点击量',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 24,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2011年'],
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 16,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'category',
            data: ['巴西烤肉', '麦当劳', 'KFC', '龙麦KTV', '可口可乐', '青啤'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        series: [{
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        }]
    };

    return tempOption;
};

// 广告点击量时间关系图
function adMainTimeFunction(){
	var tempOption = {
        title: {
            text: '广告点击量时间关系图',
            x: 'center',
            y: 'bottom',
            textStyle: {
            	fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['上周', '本周'],
            textStyle: {
            	fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '上周',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],

        }, {
            name: '本周',
            type: 'line',
            data: [1, 2, 2, 5, 3, 2, 0],
        }]
    };
    return tempOption;
}

// 流量时间关系图
function adMainFlowFunction(){
	var tempOption = {
        title: {
            text: ' 流量时间关系图',
            x: 'center',
            y: 'bottom',
            textStyle: {
            	fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '流量',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            itemStyle: {
            	normal: {
            		color: myColor[0]
            	}
            },
        }]
    };
    return tempOption;
}

// 客流量时间关系图
function adMainCustomerFunction(){
	var tempOption = {
        title: {
            text: '客流量时间关系图',
            x: 'center',
            y: 'bottom',
            textStyle: {
            	fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '客流量',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            itemStyle: {
            	normal: {
            		color: myColor[2]
            	}
            },
        }]
    };
    return tempOption;
}

// 回头率时间关系图
function adMainTurnBackFunction(){
	var tempOption = {
        title: {
            text: '回头率时间关系图',
            x: 'center',
            y: 'bottom',
            textStyle: {
            	fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '回头率',
            type: 'line',
            data: [70, 110, 120, 103, 98, 88, 99],
            itemStyle: {
            	normal: {
            		color: myColor[1]
            	}
            },
        }]
    };
    return tempOption;
}
// ***************************************
// 广告和流量分析中的一些图表 End end end
// ***************************************


// **********************************
// 广告流量分析－－综合分析
// **********************************

// 广告点击量客流量流量使用量
function adAnlyOptionFunction1(){
	var tempOption = {
        title: {
            text: '广告点击量客流量流量使用量',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['广告点击量', '客流量', '流量'],
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 14,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '广告点击量',
            type: 'bar',
            data: [20, 58, 44, 38, 77, 68, 40],
        }, {
            name: '客流量',
            type: 'bar',
            data: [10, 40, 14, 20, 39, 61, 28],
        }, {
            name: '流量',
            type: 'bar',
            data: [26, 60, 35, 66, 16, 37, 45],
        }]
    };
    return tempOption;
};

// 广告点击量客流量时间
function adAnlyOptionFunction2(){
	var tempOption = {
        title: {
            text: '广告点击量客流量时间',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['广告点击量', '客流量', '流量'],
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 14,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '广告点击量',
            type: 'bar',
            data: [20, 58, 44, 38, 77, 68, 40],
            itemStyle: {
            	normal: {
            		color: '#C12E34'
            	}
            }
        }, {
            name: '客流量',
            type: 'bar',
            data: [10, 40, 14, 20, 39, 61, 28],
            itemStyle: {
            	normal: {
            		color: '#EDCB4C'
            	}
            }
        }, {
            name: '流量',
            type: 'bar',
            data: [26, 60, 35, 66, 16, 37, 45],
            itemStyle: {
            	normal: {
            		color: '#4CB6E4'
            	}
            }
        }]
    };
    return tempOption;
}

// 广告点击量流量时间
function adAnlyOptionFunction3(){
	var tempOption = {
        title: {
            text: '广告点击量流量时间',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['广告点击量', '客流量', '流量'],
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 14,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '广告点击量',
            type: 'bar',
            data: [20, 58, 44, 38, 77, 68, 40],
            itemStyle: {
            	normal: {
            		color: '#ED9678'
            	}
            }
        }, {
            name: '客流量',
            type: 'bar',
            data: [10, 40, 14, 20, 39, 61, 28],
            itemStyle: {
            	normal: {
            		color: '#E7DAC9'
            	}
            }
        }, {
            name: '流量',
            type: 'bar',
            data: [26, 60, 35, 66, 16, 37, 45],
            itemStyle: {
            	normal: {
            		color: '#DAAFA9'
            	}
            }
        }]
    };
    return tempOption;
}

// 客流量量流量时间
function adAnlyOptionFunction4(){
	var tempOption = {
        title: {
            text: '客流量量流量时间',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 18,
                color: '#fff'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['广告点击量', '客流量', '流量'],
            textStyle: {
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: 14,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Microsoft YaHei, sans-serif',
                    fontSize: 14,
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '广告点击量',
            type: 'bar',
            data: [20, 58, 44, 38, 77, 68, 40],
            itemStyle: {
            	normal: {
            		color: '#44B7D3'
            	}
            }
        }, {
            name: '客流量',
            type: 'bar',
            data: [10, 40, 14, 20, 39, 61, 28],
            itemStyle: {
            	normal: {
            		color: '#EC6A98'
            	}
            }
        }, {
            name: '流量',
            type: 'bar',
            data: [26, 60, 35, 66, 16, 37, 45],
            itemStyle: {
            	normal: {
            		color: '#F7EA83'
            	}
            }
        }]
    };
    return tempOption;
}


// ********************************
// 广告流量分析－－综合分析 End
// ********************************