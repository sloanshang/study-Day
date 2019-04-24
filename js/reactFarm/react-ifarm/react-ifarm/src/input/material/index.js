import React, { Component } from 'react';
import {Link} from 'react-router'
import  Header from '../../common/containers/Header'
import Search from '../../common/containers/Search'
import Header2 from '../../common/components/Header2'
import {Table,Button} from 'react-bootstrap'
import InputsRow from '../../components/InputsRow'
class MaterialIndex extends Component{
    searchChange(v){

    }
    handleClick(t){
        console.log(t)
    }
    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        return(
            <div>
                <Header hide title="原材料管理"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">
                    <p>饲料管理</p>
                    <Link to="/inputs/material/feeduse"><InputsRow leftStyle={{backgroundColor:'blue'}} title="饲料耗用" onClick={()=>this.handleClick(1)}/></Link>
                    <Link to="/inputs/material/feedbuy"><InputsRow leftStyle={{backgroundColor:'green'}}  title="饲料采购" onClick={()=>this.handleClick(2)}/></Link>
                    <Link to="/inputs/material/feedsale"><InputsRow leftStyle={{backgroundColor:'yellow'}}  title="饲料销售" onClick={()=>this.handleClick(3)}/></Link>
                     <p>精液管理</p>
                    <Link to="/inputs/material/semenuse"><InputsRow leftStyle={{backgroundColor:'blue'}} title="精液耗用" onClick={()=>this.handleClick(1)}/></Link>
                    <Link to="/inputs/material/semenbuy"><InputsRow leftStyle={{backgroundColor:'green'}}  title="精液采购" onClick={()=>this.handleClick(2)}/></Link>
                    <Link to="/inputs/material/semensale"><InputsRow leftStyle={{backgroundColor:'yellow'}}  title="精液销售" onClick={()=>this.handleClick(3)}/></Link>
                    <Link to="/inputs/material/semenproduce"><InputsRow leftStyle={{backgroundColor:'yellow'}}  title="生产精液" onClick={()=>this.handleClick(3)}/></Link>
                    <p>药品疫苗管理</p>
                     <Link to="/inputs/material/vaccineuse"><InputsRow leftStyle={{backgroundColor:'blue'}} title="药品疫苗耗用" onClick={()=>this.handleClick(1)}/></Link>
                    <Link to="/inputs/material/vaccinebuy"><InputsRow leftStyle={{backgroundColor:'green'}}  title="药品疫苗采购" onClick={()=>this.handleClick(2)}/></Link>
                    <Link to="/inputs/material/vaccinesale"><InputsRow leftStyle={{backgroundColor:'yellow'}}  title="药品疫苗销售" onClick={()=>this.handleClick(3)}/></Link>

                    
                </div>
            </div>
        )
    }
}
export  default MaterialIndex;
