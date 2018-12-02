import { ACTION_PROGRESS, ACTION_PROGRESS_DONE } from "./actions";

export function progress(){
    return ({
        type : ACTION_PROGRESS
    });
}

export function progressDone(){
    return ({
        type : ACTION_PROGRESS_DONE
    });
}
