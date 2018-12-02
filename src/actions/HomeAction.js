import { ACTION_FETCH_USER_FAILED,ACTION_FETCH_USER_SUCCESS} from "./actions";
import Axios from "axios";
import { Constants } from "../utils/Constants";
import { Utils } from "../utils/Utils";

export function fetchUserSuccess(user){
    return ({
        type : ACTION_FETCH_USER_SUCCESS,
        user
    });
}

export function fetchUserFailed(message){
    return ({
        type : ACTION_FETCH_USER_FAILED,
        message
    });
}

export function fetchUser(){
      
    return function(dispatch){
      
         return Axios.get(Constants.BASE_URL_REST_DATA + "user/search/findByAuthToken?token="+Utils.getTokenFromLocal(),{headers : Constants.REQUEST_HEADER_JSON})
         .then(response => {  
             dispatch(fetchUserSuccess(response.data))
        })
         .catch(error => {  
             dispatch(fetchUserFailed(error.message))
            });
}    
        

}


