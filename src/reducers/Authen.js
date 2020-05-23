import {authUser} from '../actions/authen.js'

export function AuthenUser(state=null,action){

    switch(action.type){
        case authUser:
            return action.id
        default:
            return state
    }
}