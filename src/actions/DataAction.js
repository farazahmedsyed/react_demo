import { ACTION_FETCH_DATA_FAILED,ACTION_FETCH_DATA_SUCCESS} from "./actions";
import Axios from "axios";
import { Constants } from "../utils/Constants";
import { Utils } from "../utils/Utils";

export function fetchDataSuccess(data, tags){
    return ({
        type : ACTION_FETCH_DATA_SUCCESS,
        data,
        tags
    });
}

export function fetchDataFailed(message){
    return ({
        type : ACTION_FETCH_DATA_FAILED,
        message
    });
}

export function fetchData(search){
      
    return function(dispatch){
        let add="data?token="+Utils.getTokenFromLocal();
        if (search !== undefined){
            add = add+"&search="+search;
        }
      
         return Axios.get(Constants.BASE_URL + add,{headers : Constants.REQUEST_HEADER_JSON})
         .then(response => {
             Axios.get(Constants.BASE_URL+"tag?token="+Utils.getTokenFromLocal(),{headers:Constants.REQUEST_HEADER_JSON})
             .then(response2 =>{
                dispatch(fetchDataSuccess(response.data, response2.data))
             })
             .catch(error => {
                 dispatch(fetchDataFailed(error.message))
             })  
             
        })
         .catch(error => {  
             dispatch(fetchDataFailed(error.message))
            });
}    

}

export function saveData(data){
    
    return function(dispatch){

        
    
        return Axios.post(Constants.BASE_URL + "data?token="+Utils.getTokenFromLocal(),data,{headers : Constants.REQUEST_HEADER_JSON})
   
        .then(response => { 
   
            dispatch(fetchData())
   })
    .catch(error => {  
        dispatch(fetchDataFailed(error.message));
        dispatch(fetchData())
       });
    }
}
     
export function remove(id){
    
    return function(dispatch){

        
    
        return Axios.delete(Constants.BASE_URL + "data/"+id+"?token="+Utils.getTokenFromLocal(),{headers : Constants.REQUEST_HEADER_JSON})
   
        .then(response => { 
   
            dispatch(fetchData())
   })
    .catch(error => {  
        dispatch(fetchDataFailed(error.message));
        dispatch(fetchData())
       });
    }
}


