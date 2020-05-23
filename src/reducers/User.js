import {RECEIVE_USER} from '../actions/user.js'


export function user_reducer(state={},action){
    switch(action.type){
        case RECEIVE_USER:
            return{
                ...state,
                ...action.users
            }
        default:
            return state
    }
}