import React,{Component} from 'react';
import {render} from 'react-dom';
import RouterMap from '../routes/index'
export default class App extends Component{
    constructor(){
        super();
        this.state={
            done:false
        }
    }
    render(){
        return(
            <div>{this.state.done?<RouterMap/>:<div>loading...</div>}</div>
        )
    }
    componentDidMount(){
        this.setState({done:true})
    }
    }