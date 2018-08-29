import React,{Component} from 'react';
import {Provider}from 'react-redux';
import store from './Reducers';
import MainAction from './Action/MainAction';
export default class Main extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        
        return(
<Provider store={store}>

<MainAction/>

</Provider>
        );
    }
}