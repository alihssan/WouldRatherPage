import React,{Fragment} from 'react'
import Board from './Board.js'
import {connect} from 'react-redux'

function LeaderBoard(props){
    const {users,user_reducer,total}=props
    const color={
        [users[0]]:'gold',
        [users[1]]:'silver',
        [users[2]]:'orange',
        default:'greenyellow'
    }
    const rank={
        [users[0]]:'1',
        [users[1]]:'2',
        [users[2]]:'3',
        default:null
    }
    
    return(

        <Fragment>
            {
           users.map((user)=>(
            <Board key={user} user={user_reducer[user]} total={total} color={color[user]} rank={rank[user]}/>
           ))
            }
        </Fragment>

    )
}
function mapStateToProps({user_reducer,question_reducer}){
    return{
       users:Object.keys(user_reducer).sort((a,b)=>Object.keys(user_reducer[b].answers).length - Object.keys(user_reducer[a].answers).length),
       user_reducer,
       total:Object.keys(question_reducer),


    }
  
  }
  export default connect(mapStateToProps)(LeaderBoard)