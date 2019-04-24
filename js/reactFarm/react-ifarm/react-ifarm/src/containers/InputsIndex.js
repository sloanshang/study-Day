import React, { Component } from 'react';
import  Header from '../common/containers/Header'
import Search from '../common/containers/Search'
import Header2 from '../common/components/Header2'
import {Link} from 'react-router'
import {Table,Button} from 'react-bootstrap'
import InputsRow from '../components/InputsRow'
class InputsIndex extends Component{
    searchChange(v){

    }
    handleClick(t){
        console.log(t)
    }
    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        const { children } = this.props
        return(
            <div>
                <Header hide title="录入事件"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">
                    <Link to="/inputs/seed"><InputsRow leftStyle={{backgroundColor:'blue'}} title="种猪管理" onClick={()=>this.handleClick(1)}/></Link>
                     <Link to="/inputs/fatpig"><InputsRow leftStyle={{backgroundColor:'green'}}  title="肥猪管理" onClick={()=>this.handleClick(2)}/></Link>
                    <Link to="/inputs/material"> <InputsRow leftStyle={{backgroundColor:'yellow'}}  title="原材料管理" onClick={()=>this.handleClick(3)}/></Link>
                    <Link to="/inputs/stock"> <InputsRow leftStyle={{backgroundColor:'orange'}}  title="库存盘点" onClick={()=>this.handleClick(4)}/></Link>
                </div>
            </div>

        )
    }
}
export  default InputsIndex;
