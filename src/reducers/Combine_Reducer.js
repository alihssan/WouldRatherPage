import {user_reducer} from './User'
import {question_reducer} from './Question'
import {AuthenUser} from './Authen'
import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    AuthenUser,
    user_reducer,
    question_reducer,
    loadingBar:loadingBarReducer
})