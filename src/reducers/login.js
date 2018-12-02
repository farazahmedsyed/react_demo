import { ACTION_LOGIN_SUCCESSFUL, ACTION_LOGIN_FAILED } from "../actions/actions";

const login = (state =[], action) =>{

    switch (action.type) {
        case ACTION_LOGIN_SUCCESSFUL:{
            return { user : action.user, message:"Successful" };
        }
        case ACTION_LOGIN_FAILED:{
            return {message : action.error};
        }
   
    
        default:
        return state;
            
    }
};



export default login;