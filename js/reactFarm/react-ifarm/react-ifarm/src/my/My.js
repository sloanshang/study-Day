import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import  Header from '../common/containers/Header'
import Search from '../common/containers/Search'
import Header2 from '../common/components/Header2'
class My extends Component{
    searchChange(v){

    }
    render(){
        let farmName = !!localStorage.farmName?localStorage.farmName:'';
        return(
            <div>
                <Header hide title="我的"/>
                <Search  onChange={(v)=>this.searchChange(v)} />
                <Header2 title={farmName}/>
                <div className="container container2">

                </div>
            </div>

        )
    }
}
const mapStateToProps =state=>({
    state
})
function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    };
}
const  actions= {
    addTodo
}

const mapDispatchToProps=(dispatch)=>({
    actions: bindActionCreators(actions, dispatch)
})
export  default connect(mapStateToProps,mapDispatchToProps)(My)
