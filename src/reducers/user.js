import { ACTION_FETCH_USER_SUCCESS, ACTION_FETCH_USER_FAILED } from "../actions/actions";

const user = (state =[], action) =>{

    switch (action.type) {
        case ACTION_FETCH_USER_SUCCESS:{
            return { user : action.user, isDone:true };
        }
        case ACTION_FETCH_USER_FAILED:{
            return {message : action.message, isDone:false};
        }
   
    
        default:
        return {message : "In progress", isDone:false};
            
    }
};



export default user;