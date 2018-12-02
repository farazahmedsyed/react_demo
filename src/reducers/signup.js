import { ACTION_SIGNUP_SUCCESSFUL, ACTION_SIGNUP_FAILED } from "../actions/actions";

const signup = (state =[], action) =>{

    switch (action.type) {
        case ACTION_SIGNUP_SUCCESSFUL:{
            return { message:"Successful", state: 0 };
        }
        case ACTION_SIGNUP_FAILED:{
            return {message : action.error, state: 1};
        }
      
        default:
        return state;
            
    }
};



export default signup;