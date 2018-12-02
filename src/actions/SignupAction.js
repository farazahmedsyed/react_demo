import { ACTION_SIGNUP_SUCCESSFUL, ACTION_SIGNUP_FAILED } from "./actions";
import Axios from "axios";
import { Constants } from "../utils/Constants";
import { progress, progressDone } from "./ProgressAction";

export function signupSuccessful(){
    return ({
        type : ACTION_SIGNUP_SUCCESSFUL,
    });
}

export function signupFailed(error){
    return ({
        type : ACTION_SIGNUP_FAILED,
        error
    });
}


export function signup(email,pwd,rePwd){
  
    return function(dispatch){

    dispatch(progress());
    
    if(pwd !== rePwd){
        dispatch(progressDone());
        dispatch(signupFailed("Password does not match."));
        return;
    }
    let data  = JSON.stringify({
        "username": email,
        "password":pwd,
        "passwordConfirm" : rePwd
    });
    return Axios.post(Constants.BASE_URL + "register",data,{headers : Constants.REQUEST_HEADER_JSON})
    .then(response => {dispatch(progressDone()); dispatch(signupSuccessful())})
    .catch(error => {dispatch(progressDone()); dispatch(signupFailed(error.message))});
}    
        

}


