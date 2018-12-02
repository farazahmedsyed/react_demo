import { ACTION_FETCH_TAG_SUCCESS, ACTION_FETCH_TAG_FAILED } from "../actions/actions";

const tag = (state =[], action) =>{

    switch (action.type) {
        case ACTION_FETCH_TAG_SUCCESS:{
            return { tags : action.tags, isDone:true};
        }
        case ACTION_FETCH_TAG_FAILED:{
            return {message : action.message, isDone:false};
        }
        default:
        return {message : "In progress...", isDone:false};
            
    }
};



export default tag;