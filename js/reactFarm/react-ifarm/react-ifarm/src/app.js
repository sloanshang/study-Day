import React, { Component, PropTypes, cloneElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import Footer from './components/Footer'
class App extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    }
    render() {
        // let layout=''
        // const childrenWithProps = React.Children.map(this.props.children,
        //     (child) => cloneElement(child, {
        //         actions: this.props.actions,
        //         results: this.props.results,
        //         router:this.props.router
        //     })
        // )
        let pathname = this.props.location.pathname
        return (
            <div>
                {this.props.children}
            <Footer path={pathname}/>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
const mapStateToProps = state=>{
    const { farmReducer } = state
    let  farms = [], farm = {}, results = farmReducer['results']
    if (results) {
        switch (results.type) {
            case actions.FARM:
                farm = results.farm
                break
            case actions.FARMS:
                farms = results.farms
                break
            default:
            {}
        }
    }
    return {
        results: {
            farms,
            farm
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
