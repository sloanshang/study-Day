import React, { Component } from 'react';
import  Header from '../common/containers/Header'
import Search from '../common/containers/Search'
import Header2 from '../common/components/Header2'
import {Table} from 'react-bootstrap'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane;
import 'rc-calendar/assets/index.css';
import Calendar from 'rc-calendar';

class Schedules extends Component{
  constructor(props){
    super(props)
    this.changeContent(1)
  }
    searchChange(){

    }
    handleClick(t){
      if(t==1){
        this.setState({tab1:"primary",tab2:"default"})
      }else{
        this.setState({tab1:"default",tab2:"primary"})
      }
        console.log(t)
      this.changeContent(t)
    }
    rowClick(d){
        console.log(d)
    }
    dateChange(v){
        let t=  v.format('YYYY-MM-DD');
        console.log(t)
        console.log(v.unix())
        console.log(v.valueOf())
    }
    changeContent(t){

      if(t==1){
        let   data=[
          {a:"待配后备母猪",b:11},
          {a:"待断奶母猪",b:11},
          {a:"妊娠诊断 第1情期",b:11},
          {a:"妊娠诊断 第2情期",b:11},
          {a:"待配生产母猪",b:11},
          {a:"临产母猪",b:11},
        ]
        this.rows1 = data.map((d,index)=>
          <tr key={index} className="schedule_row" onClick={()=>this.rowClick(d)}>
            <td>{d.a}<i className="icon-angle-right"></i><span className="num">{d.b}</span></td>
          </tr>
        )
        this.setState({tab:1})
      }else{
        let   data2=[
          {a:"G>90天未配种",b:11},
          {a:"W>7天未配种",b:11},
          {a:"A>7天未配种",b:11},
          {a:"胎次>10淘汰",b:11},
          {a:"连续2次产仔数<7头",b:11},
          {a:"连续2次流产返情空怀",b:11},
        ]
        this.rows2 = data2.map((d,index)=>
          <tr key={index} className="schedule_row" onClick={()=>this.rowClick(d)}>
            <td>{d.a}<i className="icon-angle-right"></i><span className="num">{d.b}</span></td>
          </tr>
        )
         this.setState({tab:2})
      }

    }

    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        return(
            <div>
                <Header hide title="猪管理"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">
                 <Calendar style={{width:'100%'}} className="scheduleCalendar" onChange={(v)=>this.dateChange(v)}/>
                   <Tabs  onChange={(key)=>this.changeContent(key)} type="card" animated={false}>
                    <TabPane tab="工作提示" key="1">
                        <Table   bordered condensed >
                          <tbody>
                            {this.rows1}
                          </tbody>
                        </Table>
                    </TabPane>
                    <TabPane tab="预警提示" key="2">
                      <Table   bordered condensed >
                        <tbody>
                          {this.rows2}
                        </tbody>
                      </Table>
                    </TabPane>
                  
                  </Tabs >
                </div>
            </div>
        )
    }
}
export  default Schedules
