import React from 'react';
import {connect, Connecter} from 'react-redux'
import {set_data} from './store/action'
import Abc from '../public/practice/Router';
class App extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {/* <h1>ok hai</h1>
                <button onClick={()=> this.props.set_data("data yhn sy bhi ja sakta hai")}>ok</button>
             */}
             <div>
                 {Abc}
             </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
name : state.auth.name,
age : state.config.age,
ach : "malik "
})
const mapDispatchToProps = (dispatch)=>({
    set_data : (data)=> dispatch(set_data(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);