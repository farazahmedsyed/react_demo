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
        <form className='' onSubmit={e => this.signup(e,onSubmit)}>
        <div className='form-group'>
        <h1>Signup</h1>
            <input className='form-control' type="text" name="username" placeholder="username" />
            <br/>
            <input className='form-control'  type="password" name="password" placeholder='password' />
            <br/>
            <input className='form-control'  type="password" name="re-password" placeholder='re-password' />
            <br/>
            <label>{message}</label>
            <br/>
            <input className='form-control btn-primary'  type='submit' name='signup_button' value='Signup' />
            </div>
             </form>
        
        </div>;
    }
}

export default Signup;
