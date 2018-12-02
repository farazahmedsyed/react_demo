import React, { Component } from 'react';
import '../style/App.css';
import LoginContainer from './LoginContainer';
import { Utils } from '../utils/Utils';
import { loginSuccessful } from '../actions/LoginAction';
import { connect } from 'react-redux'
import SignupContainer from './SignupContainer';

const mapStateToProps = state => ({
   
    
})

const mapDispatchToProps = dispatch => ({
  fetchUser : (response) => {dispatch(loginSuccessful(response.data))}
})

class App extends Component {
 
  
  
  render() {
    if(Utils.isLoggedIn()){
      this.props.history.push('/home');
      return (
        <div className="App"/>
        )
     }
    else{
    return (
      <div className="App">
      <LoginContainer/>
      <br/><br/>
      <SignupContainer/>
      </div>
    );
    }
  }


  
  
  
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

