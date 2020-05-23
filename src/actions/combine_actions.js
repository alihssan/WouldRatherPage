import {users} from './user.js'
import {questions} from './questions.js'
import {_getallinitialdata,_saveQuestion,_saveQuestionAnswer} from '../_DATA.js'
import {showLoading,hideLoading} from 'react-redux-loading'



export function handleData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return _getallinitialdata()
        .then(({user,question})=>{
            dispatch(users(user))
            dispatch(questions(question))
            dispatch(hideLoading())
        })
    }
}
export function handleAddQuestion(questions){
    return (dispatch)=>{
        dispatch(showLoading())
        return _saveQuestion(questions)
        .then(()=>{
            dispatch(handleData())
            dispatch(hideLoading())
        })
    }

}
export function handleQuestionAnswer({authedUser,qid,answer}){
    return (dispatch)=>{
        dispatch(showLoading())
        return _saveQuestionAnswer({authedUser,qid,answer})
        .then(()=>{
            dispatch(handleData())
            dispatch(hideLoading())
        })
    
    }
}

