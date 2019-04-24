import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import ReactEcharts from 'echarts-for-react';
import ColText from '../components/ColText'
import RowText from '../components/RowText'
import Header from '../common/containers/Header'
import {myzip} from '../utils'
import Search from '../common/containers/Search'
import Header2 from '../common/components/Header2'
class Farm extends Component {
    searchChange(v) {
        console.log(v)
    }
    componentWillMount() {
        localStorage.farmCode = this.props.params.id
        this
            .props
            .actions
            .fetchFarm({'farmCode': this.props.params.id})
    }
    getOption1(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '满产率') 
                return d;
            }
        )
        return {
            title: {
                text: '满产率',
                x: 'center'
            },
            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },
            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '满产率'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption2(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '脱产率') 
                return d;
            }
        )
        return {
            title: {
                text: '脱产率',
                x: 'center'
            },
            // tooltip: {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '脱产率'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption3(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '存栏结构') 
                return d;
            }
        )

        return {
            title: {
                text: '存栏结构',
                //  subtext: '纯属虚构',
                x: 'right'
            },
            // tooltip : {     trigger: 'item',     formatter: "{a} <br/>{b} : {c} ({d}%)"
            // },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: d.labels
            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: '45%',
                    center: [
                        '50%', '60%'
                    ],
                    data: myzip(d.labels, d.values),
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}\n{c}({d}%)'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'bold'
                            }
                        }
                    }
                    // itemStyle: {     emphasis: {         shadowBlur: 10,         shadowOffsetX:
                    // 0,         shadowColor: 'rgba(0, 0, 0, 0.5)'     },
                    //
                    //     normal:{         label:{             show: true,             formatter:
                    // '{b}:{c}\n ({d}%)'         },         labelLine :{show:true},
                    // position:'inside'     }  }
                }
            ]
        };
    }
    getOption4(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '可售肥猪分布') 
                return d;
            }
        )
        return {
            title: {
                text: '可售肥猪分布',

                x: 'center'
            },
            // tooltip : {     trigger: 'item',     formatter: "{a} <br/>{b} : {c} ({d}%)"
            // },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: d.labels
            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: '45%',
                    center: [
                        '50%', '60%'
                    ],
                    data: myzip(d.labels, d.values),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b}\n{c}({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }
                }
            ]
        };
    }
    getOption5(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '母猪胎龄结构') 
                return d;
            }
        )
        return {
            title: {
                text: '母猪胎龄结构头数',

                x: 'center'
            },
            // tooltip : {     trigger: 'item',     formatter: "{a} <br/>{b} : {c}" },
            legend: {
                // orient: 'vertical',  left: 'left',
                data: d.labels
            },

            xAxis: [
                {
                    type: 'category',
                    data: d.labels,
                    axisLabel: {
                        //X轴刻度配置
                        interval: 0 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],

            series: [
                {
                    name: '胎次',
                    type: 'bar',
                    //type: 'pie', radius : '40%', center: ['50%', '50%'],
                    data: myzip(d.labels, d.values),

                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgb(0,204,205)',
                            color: 'rgb(0,204,205)'
                        },
                        emphasis: {
                            barBorderColor: 'rgb(0,204,205)',
                            color: 'rgb(0,204,205)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }
            ]
        };
    }
    getOption6(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '母猪胎龄结构对比') 
                return d;
            }
        )
        var sum = 19 + 17 + 25 + 27 + 21 + 17 + 7 + 17 + 60 + 19 + 0 + 0 + 0 + 0 + 0 + 0;
        // alert("sum test:"+sum);

        var number000 = (1900 / sum).toFixed(2);

        var number001 = (1700 / sum).toFixed(2);
        var number002 = (2500 / sum).toFixed(2);
        var number003 = (2700 / sum).toFixed(2);
        var number004 = (2100 / sum).toFixed(2);
        var number005 = (1700 / sum).toFixed(2);
        //alert(number005);
        var number006 = (700 / sum).toFixed(2);
        var number007 = (1700 / sum).toFixed(2);
        var number008 = (6000 / sum).toFixed(2);
        var number009 = (1900 / sum).toFixed(2);
        var number0010 = (0 / sum).toFixed(2);
        var number0011 = (0 / sum).toFixed(2);
        var number0012 = (0 / sum).toFixed(2);

        var number0013 = (0 / sum).toFixed(2);
        var number0014 = (0 / sum).toFixed(2);
        var number0015 = (0 / sum).toFixed(2);
        var numbers = [
            number000,
            number001,
            number002,
            number003,
            number004,
            number005,
            number006,
            number007,
            number008,
            number009,
            number0010,
            number0011,
            number0012,
            number0013,
            number0014,
            number0015,
            20,
            18,
            16,
            14,
            12,
            10,
            6,
            4
        ];
        var maxInNumbers = Math
            .max
            .apply(Math, numbers) + 5;
        //alert(maxInNumbers);

        var apptitle = '嵌套环形图';
        let option = {
            title: {
                text: '母猪胎龄结构对比',

                x: 'center'
            },
            // tooltip : {     trigger: 'item'     //formatter: "{a} <br/>{b} : {c} ({d}%)"
            // },
            legend: {
                orient: 'vertical',
                left: 'auto',
                top: 'auto',
                data: ['母猪实际胎次', '标准胎次']
            },
            xAxis: [
                {
                    type: 'category',
                    // boundaryGap : false, axisLine: {onZero: true},
                    data: [
                        '0胎',
                        '1胎',
                        '2胎',
                        '3胎',
                        '4胎',
                        '5胎',
                        '6胎',
                        '7胎',
                        '8胎',
                        '9胎',
                        '10胎',
                        '11胎',
                        '12胎',
                        '13胎',
                        '14胎',
                        '15胎+'
                    ],
                    axisLabel: {
                        //X轴刻度配置
                        interval: 0 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    }
                }
            ],
            yAxis: [/**,
                 {
                     name : '母猪胎次',
                     type : 'value',
                     max :maxInNumbers
                 }
                 ***/

                {
                    type: 'value',

                    min: 0,
                    max: maxInNumbers,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }

            ],
            series: [
                {
                    name: '母猪实际胎次',
                    type: 'line',
                    //symbolSize: 1,
                    hoverAnimation: false,
                    data: [
                        number000,
                        number001,
                        number002,
                        number003,
                        number004,
                        number005,
                        number006,
                        number007,
                        number008,
                        number009,
                        number0010,
                        number0011,
                        number0012,
                        number0013,
                        number0014,
                        number0015

                    ],
                    itemStyle: {
                        emphasis: {
                            //  shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true

                            },
                            labelLine: {
                                show: true
                            }
                        }

                    }
                }, {
                    name: '标准胎次',
                    type: 'line',
                    //  symbolSize: 8,
                    hoverAnimation: false,
                    data: [
                        '20',
                        '18',
                        '16',
                        '14',
                        '12',
                        '10',
                        '6',
                        '4'

                    ],
                    itemStyle: {
                        emphasis: {
                            //  shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true

                            },
                            labelLine: {
                                show: true
                            }
                        }

                    }
                }
                /**,
                 {
                    name: '母猪胎龄头数',
                     type:'bar',
                    //symbolSize: 1,
                    hoverAnimation: false,
                    data:[

                        '19',
                        '17',
                        '25',
                        '27',
                        '21',
                        '17',
                        '7',
                        '17',
                        '60',
                        '19',
                        '0',
                        '0',
                        '0',
                        '0',
                        '0',
                        '0'

                    ],
                    itemStyle: {
                        emphasis: {
                          //  shadowBlur: 10,
                            //shadowOffsetX: 0,
                            //shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                         normal:{
                          label:{
                            show: true

                          },
                          labelLine :{show:true}
                        }

                    }
                }
                 ****/

            ]
        };
        return option
    }
    getOption7(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '分娩舍损失率') 
                return d;
            }
        )
        return {
            title: {
                text: '分娩舍损失率',

                x: 'center'
            },
            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '分娩舍损失率'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption8(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '保育舍损失率') 
                return d;
            }
        )
        return {
            title: {
                text: '保育舍损失率',

                x: 'center'
            },
            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '保育舍损失率'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption9(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '育成舍损失率') 
                return d;
            }
        )
        return {
            title: {
                text: '育成舍损失率',

                x: 'center'
            },
            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '育成舍损失率'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption10(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '分娩率') 
                return d;
            }
        )
        return {
            title: {
                text: '分娩率',

                x: 'center'
            },
            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '分娩率'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption11(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '饲料库存') 
                return d;
            }
        )
        return {
            title: {
                text: '饲料库存',
                x: 'center'
            },
            // tooltip : {     trigger: 'item',     formatter: "{a} <br/>{b} : {c} ({d}%)"
            // },
            legend: {
                orient: 'horizontal',
                // left: 'left',
                top: "30",
                data: d.labels
            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: '45%',
                    center: [
                        '50%', '60%'
                    ],
                    data: myzip(d.labels, d.values),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b}\n{c}({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }
                }
            ]
        };
    }
    getOption12(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '销售收入') 
                return d;
            }
        )
        return {
            title: {
                text: d.name,
                x: 'right'
            },

            //   tooltip : {     trigger: 'axis',     axisPointer : {            //
            // 坐标轴指示器，坐标轴触发有效       type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'  }
            //   },
            legend: {
                data: d.labels
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: d.axisLabels
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: d.labels[0],
                    type: 'bar',
                    data: d.values[0],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true

                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }
                }, {
                    name: d.labels[1],
                    type: 'bar',
                    data: d.values[1],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true

                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }
            ]
        };

    }
    getOption13(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '落地成本') 
                return d;
            }
        )
        return {

            title: {
                text: '落地成本',

                x: 'center'
            },

            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '落地成本'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption14(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '断奶成本') 
                return d;
            }
        )
        return {
            title: {
                text: '断奶成本',

                x: 'center'
            },

            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '断奶成本'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption15(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '保育库存成本') 
                return d;
            }
        )
        return {
            title: {
                text: '保育库存成本',

                x: 'center'
            },

            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },

            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '保育库存成本'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    getOption16(chartDatas) {
        const d = chartDatas.find(d => {
            if (d.name == '育成库存成本') 
                return d;
            }
        )
        return {

            title: {
                text: '育成库存成本',

                x: 'center'
            },
            //
            // tooltip : {     formatter: "{a} <br/>{b} : {c}%" },
            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}'
                    },
                    data: [
                        {
                            value: d.value,
                            name: '育成库存成本'
                        }
                    ],
                    pointer: {
                        length: '70%'
                    }
                }
            ]
        };
    }
    render() {
        const chartDatas = !!this.props.results && !!this.props.results.farm && !!this.props.results.farm.chartDatas
            ? this.props.results.farm.chartDatas
            : [];
        console.log(chartDatas)
        if (chartDatas.length == 0) 
            return (
                <div>loading</div>
            );
        const farmOrgName = this.props.results.farm.farmOrgName;
        const header = chartDatas.find(d => {
            if (d.name === 'header') 
                return d;
            }
        )
        let col_data11 = {
            name: '公猪',
            value: `${header.values['公猪']}`,
            isColor: true,
            width: '25%'
        }
        let col_data12 = {
            name: '母猪',
            value: `${header.values['母猪']}`,
            isColor: true,
            width: '25%'
        }
        let col_data13 = {
            name: '小猪',
            value: `${header.values['小猪']}`,
            isColor: true,
            width: '25%'
        }
        let col_data14 = {
            name: '肥猪',
            value: `${header.values['肥猪']}`,
            isColor: true,
            width: '25%'
        }
        // let col_data15={name:'仔猪', value:`${header.values['公猪']}`,isColor:true,
        // width:'25%'} let
        // col_data16={name:'小猪',value:`${header.values['母猪']}`,isColor:true,
        // width:'25%'} let
        // col_data17={name:'肥猪',value:`${header.values['小猪']}`,isColor:true,width:'25%'}
        let col_data31 = {
            name: '脱产率',
            value: `${header.values['脱产率']}%`,
            width: '33%'
        }
        let col_data32 = {
            name: '分娩率',
            value: `${header.values['分娩率']}%`,
            width: '33%'
        }
        let col_data33 = {
            name: '窝产活仔',
            value: `${header.values['窝产活仔']}`,
            width: '33%'
        }
        let col_data41 = {
            name: '分娩舍损失率',
            value: `${header.values['分娩舍损失率']}%`,
            width: '33%'
        }
        let col_data42 = {
            name: '保育舍损失率',
            value: `${header.values['保育舍损失率']}%`,
            width: '33%'
        }
        let col_data43 = {
            name: '育成舍损失率',
            value: `${header.values['育成舍损失率']}%`,
            width: '33%'
        }
        let row_data21 = {
            name: '年产胎次',
            value: `${header.values['年产胎次']}`,
            isColor: true,
            width: '50%'
        }
        let row_data22 = {
            name: '平均胎次',
            value: `${header.values['平均胎次']}`,
            isColor: true,
            width: '50%'
        }
        let row_data23 = {
            name: 'PSY',
            value: `${header.values['PSY']}`,
            isColor: true,
            width: '50%'
        }
        let row_data24 = {
            name: 'MSY',
            value: `${header.values['MSY']}`,
            isColor: true,
            width: '50%'
        }
        let row_data51 = {
            name: '排名',
            value: `${header.values['排名']}`,
            isColor: true,
            width: '50%'
        }
        let row_data52 = {
            name: '得分',
            value: `${header.values['得分']}`,
            isColor: true,
            width: '50%'
        }
        /*
* 生产公猪、生产母猪、后备公猪、后备母猪、仔猪、小猪和肥猪
 */
        const right = <Link to="/farms">选农场</Link>

        return (
            <div>
                <Header title="猪管理" right={right}/>
                <Search onChange={(v) => this.searchChange(v)}/>
                <Header2 title={farmOrgName}/>
                <div className="container container2 farm">
                    <div className="farm-row1"><ColText data={col_data11}/><ColText data={col_data12}/><ColText data={col_data13}/><ColText data={col_data14}/></div>
                    {/*<div className="farm-row1"><ColText data={col_data15}/><ColText data={col_data16}/><ColText data={col_data17}/></div>*/}
                    <div className="farm-row2"><RowText data={row_data21}/><RowText data={row_data22}/><RowText data={row_data23}/><RowText data={row_data24}/></div>
                    <div className="farm-row3"><ColText data={col_data31}/><ColText data={col_data32}/><ColText data={col_data33}/></div>
                    <div className="farm-row4"><ColText data={col_data41}/><ColText data={col_data42}/><ColText data={col_data43}/></div>
                    <div className="farm-row5"><RowText data={row_data51}/><RowText data={row_data52}/></div>
                    <div className="farm-chart">
                        <ReactEcharts
                            option={this.getOption1(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/> {/*<ReactEcharts*/}
                        {/*option={this.getOption2(chartDatas)}*/}
                        {/*style={{height:'400px', width:'100%'}}*/}
                        {/*lazyUpdate={true} />*/}
                        <ReactEcharts
                            option={this.getOption3(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>
                        <ReactEcharts
                            option={this.getOption4(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>
                        <ReactEcharts
                            option={this.getOption5(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/> {/*<ReactEcharts*/}
                        {/*option={this.getOption6(chartDatas)}*/}
                        {/*style={{height:'400px', width:'100%'}}*/}
                        {/*lazyUpdate={true} />*/}
                        {/*<ReactEcharts*/}
                        {/*option={this.getOption7(chartDatas)}*/}
                        {/*style={{height:'400px', width:'100%'}}*/}
                        {/*lazyUpdate={true} />*/}
                        {/*<ReactEcharts*/}
                        {/*option={this.getOption8(chartDatas)}*/}
                        {/*style={{height:'400px', width:'100%'}}*/}
                        {/*lazyUpdate={true} />*/}
                        {/*<ReactEcharts*/}
                        {/*option={this.getOption9(chartDatas)}*/}
                        {/*style={{height:'400px', width:'100%'}}*/}
                        {/*lazyUpdate={true} />*/}
                        {/*<ReactEcharts*/}
                        {/*option={this.getOption10(chartDatas)}*/}
                        {/*style={{height:'400px', width:'100%'}}*/}
                        {/*lazyUpdate={true} />*/}
                        <ReactEcharts
                            option={this.getOption11(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>
                        <ReactEcharts
                            option={this.getOption12(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>
                        <ReactEcharts
                            option={this.getOption14(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>
                        <ReactEcharts
                            option={this.getOption15(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>
                        <ReactEcharts
                            option={this.getOption16(chartDatas)}
                            style={{
                            height: '400px',
                            width: '100%'
                        }}
                            lazyUpdate={true}/>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {'results': state.farmReducer.results}
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Farm);
