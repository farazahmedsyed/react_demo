import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Base extends Component{

   
    render(){
       
       
        return (
            <div >
                <ul id = 'menu'>
                <li><NavLink to="/home"> Home </NavLink></li>
                <li><NavLink to="/tag">Tag </NavLink></li>
                <li><NavLink to="/data"> Data </NavLink></li>
                <li><NavLink to="/logout"> Logout </NavLink></li>
            </ul>
            <br/>
            <br/>
            </div>
            
        )
    }
}
export default Base;