import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component{


    render(){
        localStorage.clear();
        return (
            <Redirect to="/"></Redirect>
        );
    }
}

export default Logout;