import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Base extends Component{

   
    render(){
       
       
        return (
            <nav className="navbar navbar-expand-sm bg-light">
             <div className="container-fluid">
                <ul className="navbar-nav" id = 'menu'>
                <li className="nav-item"><button className='btn btn-default'><NavLink to="/home"> Home </NavLink></button></li>
                <li className="nav-item"><button className='btn btn-default'><NavLink to="/tag">Tag </NavLink></button></li>
                <li className="nav-item"><button className='btn btn-default'><NavLink to="/data"> Data </NavLink></button></li>
                <li className="nav-item"><button className='btn btn-default'><NavLink to="/logout"> Logout </NavLink></button></li>
            </ul>
            </div>
            </nav>
            
        )
    }
}
export default Base;