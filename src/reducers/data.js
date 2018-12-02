import { ACTION_FETCH_DATA_SUCCESS, ACTION_FETCH_DATA_FAILED } from "../actions/actions";

const data = (state =[], action) =>{

    switch (action.type) {
        case ACTION_FETCH_DATA_SUCCESS:{
            return { data : action.data, tags:action.tags, isDone:true};
        }
        case ACTION_FETCH_DATA_FAILED:{
            return {message : action.message, isDone:false};
        }
   
    
        default:
        return {message : "In Progress...", isDone:false};
            
    }
};



export default data;