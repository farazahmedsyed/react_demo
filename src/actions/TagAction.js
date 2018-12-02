import { ACTION_FETCH_TAG_FAILED,ACTION_FETCH_TAG_SUCCESS} from "./actions";
import Axios from "axios";
import { Constants } from "../utils/Constants";
import { Utils } from "../utils/Utils";

export function fetchTagSuccess(tags){
    return ({
        type : ACTION_FETCH_TAG_SUCCESS,
        tags
    });
}

export function fetchTagFailed(message){
    return ({
        type : ACTION_FETCH_TAG_FAILED,
        message
    });
}

export function fetchTag(){
      
    return function(dispatch){
      
         return Axios.get(Constants.BASE_URL + "tag?token="+Utils.getTokenFromLocal(),{headers : Constants.REQUEST_HEADER_JSON})
         .then(response => {  console.log(response.data);
             dispatch(fetchTagSuccess(response.data))
        })
         .catch(error => {  
             dispatch(fetchTagFailed(error.message))
            });
}  
}

export function saveTag(tag){
    
    return function(dispatch){

        
    
        return Axios.post(Constants.BASE_URL + "tag?token="+Utils.getTokenFromLocal(),tag,{headers : Constants.REQUEST_HEADER_JSON})
   
        .then(response => { 
   
            dispatch(fetchTag())
   })
    .catch(error => {  
        dispatch(fetchTagFailed(error.message));
        dispatch(fetchTag())
       });
    }
}
     

export function remove(id){
    
    return function(dispatch){

        
    
        return Axios.delete(Constants.BASE_URL + "tag/"+id+"?token="+Utils.getTokenFromLocal(),{headers : Constants.REQUEST_HEADER_JSON})
   
        .then(response => { 
   
            dispatch(fetchTag())
   })
    .catch(error => {  
        dispatch(fetchTagFailed(error.message));
        dispatch(fetchTag())
       });
    }
}



