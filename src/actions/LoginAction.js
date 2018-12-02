import {  ACTION_LOGIN_SUCCESSFUL, ACTION_LOGIN_FAILED } from "./actions";
import Axios from "axios";
import { Constants } from "../utils/Constants";
import { progress } from "./ProgressAction";

export function loginSuccessful(user){
    localStorage.setItem("isLoggedIn", "true");
    var u = JSON.stringify(user);
    localStorage.setItem("user", u );
    return ({
        type : ACTION_LOGIN_SUCCESSFUL,
        user
    });
}

export function loginFailed(error){
    return ({
        type : ACTION_LOGIN_FAILED,
        error
    });
}


export function login(email,pwd){
  
    return function(dispatch){

    dispatch(progress());
    
    let data  = JSON.stringify({
        "username": email,
        "password":pwd
    });
    return Axios.post(Constants.BASE_URL + "login",data,{headers : Constants.REQUEST_HEADER_JSON})
    .then(response => { dispatch(loginSuccessful(response.data))}).catch(error => {console.log(error); dispatch(loginFailed("Invalid username or password"))});
}    
        

}


