import React, { Component } from 'react';
import {Link} from 'react-router'
import  Header from '../common/containers/Header'
import Search from '../common/containers/Search'
import Header2 from '../common/components/Header2'
import {Table,Button} from 'react-bootstrap'
import InputsRow from '../components/InputsRow'
import RhombicItem from  '../components/RhombicItem'
class InputsSeed extends Component{
    searchChange(v){
    }
    handleClick(t){
        console.log(t)
    }
    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        return(
            <div>
                <Header hide title="母猪繁育"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">
                    <Link to="/inputs/seed/mother/mate" ><div className="seedMotherBox" style={{borderBottom:'1px solid #ccc',borderRight:'1px solid #ccc'}}><RhombicItem rhombicStyle={{backgroundColor:'blue'}} title="配种" onClick={()=>this.handleClick(1)}/></div></Link>
                  <Link to="/inputs/seed/mother/pregnancycheck" ><div className="seedMotherBox" style={{borderBottom:'1px solid #ccc'}}> <RhombicItem rhombicStyle={{backgroundColor:'green'}} title="妊检" onClick={()=>this.handleClick(2)}/></div></Link>
                  <Link to="/inputs/seed/mother/childbirth" >  <div className="seedMotherBox"  style={{borderBottom:'1px solid #ccc',borderRight:'1px solid #ccc'}}><RhombicItem rhombicStyle={{backgroundColor:'yellow'}} title="分娩" onClick={()=>this.handleClick(3)}/></div></Link>
                    <Link to="/inputs/seed/mother/ablactation" ><div className="seedMotherBox"  style={{borderBottom:'1px solid #ccc'}}><RhombicItem rhombicStyle={{backgroundColor:'orange'}} title="断奶" onClick={()=>this.handleClick(4)}/></div></Link>
                </div>
            </div>
        )
    }
}
export  default InputsSeed;
