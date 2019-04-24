import React, { Component } from 'react';
import {Link} from 'react-router'
import  Header from '../../common/containers/Header'
import Search from '../../common/containers/Search'
import Header2 from '../../common/components/Header2'
import {Table,Button} from 'react-bootstrap'
import InputsRow from '../../components/InputsRow'
class FatPigIndex extends Component{
    searchChange(v){

    }
    handleClick(t){
        console.log(t)
    }
    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        return(
            <div>
                <Header hide title="肥猪管理"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">
                    <Link to="/inputs/fatpig/buy"><InputsRow leftStyle={{backgroundColor:'blue'}} title="猪只采购" onClick={()=>this.handleClick(1)}/></Link>
                    <Link to="/inputs/fatpig/transfer"><InputsRow leftStyle={{backgroundColor:'green'}}  title="猪只转移" onClick={()=>this.handleClick(2)}/></Link>
                    <Link to="/inputs/fatpig/sale"><InputsRow leftStyle={{backgroundColor:'yellow'}}  title="猪只销售" onClick={()=>this.handleClick(3)}/></Link>
                    <Link to="/inputs/fatpig/dead"><InputsRow leftStyle={{backgroundColor:'orange'}}  title="猪只死亡" onClick={()=>this.handleClick(4)}/></Link>
                </div>
            </div>
        )
    }
}
export  default FatPigIndex;
