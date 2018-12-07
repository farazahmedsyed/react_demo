import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Utils} from '../utils/Utils'

class Login extends Component{

    login =(e,onSubmit, st) =>{

        e.preventDefault();
        var email = e.target.elements[0].value;
        var pwd = e.target.elements[1].value;
        onSubmit(email, pwd);
    }

    render(){ 
        const onSubmit = this.props.onSubmit;
        const message = this.props.message;
        
        if(Utils.isLoggedIn()){
        return <Redirect to="/home"></Redirect>;
        }
        return <div className='Login'>
        <form className="form-inline" onSubmit={e => this.login(e,onSubmit)} >
        <div className='form-group'>
        <h1>Login: </h1>
            <input type="text" className='form-control' name="email" placeholder="Email" />
            <br/>
            <input className='form-control' type="password" name="password" placeholder='password' />
            <br/>
            <label>{message}</label><br/>
            <input className='form-control btn-primary' type='submit' name='login_button' value='Login' />
        </div>
        </form>
        
        </div>;
    }
}

export default Login;
