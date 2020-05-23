import {RECEIVE_QUESTIONS} from '../actions/questions.js'


export function question_reducer(state={},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions

            }
        default:
            return state
        
}
}