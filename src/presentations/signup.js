import React, {Component} from 'react';

class Signup extends Component{

    signup =(e,onSubmit) =>{

        e.preventDefault();
        var email = e.target.elements[0].value;
        var pwd = e.target.elements[1].value;
        var repwd = e.target.elements[2].value;
        onSubmit(email, pwd, repwd);
    }

    render(){
        const onSubmit = this.props.onSubmit;
        const message = this.props.message;
     

        return <div className='Signup'>
        <h1>Signup</h1>
        <form onSubmit={e => this.signup(e,onSubmit)}>
            <input type="text" name="username" placeholder="username" />
            <br/>
            <input type="password" name="password" placeholder='password' />
            <br/>
            <input type="password" name="re-password" placeholder='re-password' />
            <br/>
            <label>{message}</label>
            <br/>
            <input type='submit' name='signup_button' value='Signup' />
        </form>
        </div>;
    }
}

export default Signup;
