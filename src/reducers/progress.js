import { ACTION_PROGRESS, ACTION_PROGRESS_DONE } from "../actions/actions";

const progress = (state =[], action) =>{

    switch (action.type) {
        case ACTION_PROGRESS:{
            return {message : "In progress", state:1}
        }
            
        case ACTION_PROGRESS_DONE:{
            return {message : "In progress", state:0}
        }
       
        default:
        return state;
            
    }
};



export default progress;