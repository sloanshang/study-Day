import React, { Component } from 'react';
import  Header from '../common/containers/Header'
import Search from '../common/containers/Search'
import Header2 from '../common/components/Header2'
import InputsRow from '../components/InputsRow'
class Reports extends Component{
    searchChange(v){

    }
    handleClick(t){
        console.log(t)
    }
    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        return(
            <div>
                <Header hide title="报表"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">
                    <InputsRow leftStyle={{backgroundColor:'blue'}} title="日报" onClick={()=>this.handleClick(1)}/>
                    <InputsRow leftStyle={{backgroundColor:'green'}}  title="存栏" onClick={()=>this.handleClick(2)}/>
                    <InputsRow leftStyle={{backgroundColor:'yellow'}}  title="母猪实时状态信息" onClick={()=>this.handleClick(3)}/>
                    <InputsRow leftStyle={{backgroundColor:'orange'}}  title="肥次分布" onClick={()=>this.handleClick(4)}/>
                    <InputsRow leftStyle={{backgroundColor:'blue'}} title="脱产母猪分析" onClick={()=>this.handleClick(5)}/>
                    <InputsRow leftStyle={{backgroundColor:'green'}}  title="母猪配种信息" onClick={()=>this.handleClick(6)}/>
                    <InputsRow leftStyle={{backgroundColor:'yellow'}}  title="母猪分娩信息" onClick={()=>this.handleClick(7)}/>
                    <InputsRow leftStyle={{backgroundColor:'orange'}}  title="母猪断奶信息" onClick={()=>this.handleClick(8)}/>
                    <InputsRow leftStyle={{backgroundColor:'blue'}} title="PSY，MSY" onClick={()=>this.handleClick(9)}/>
                    <InputsRow leftStyle={{backgroundColor:'green'}}  title="保育育成舍损失分析" onClick={()=>this.handleClick(10)}/>
                    <InputsRow leftStyle={{backgroundColor:'yellow'}}  title="成本分析" onClick={()=>this.handleClick(11)}/>


                </div>
            </div>
        )
    }
}
export  default Reports;
