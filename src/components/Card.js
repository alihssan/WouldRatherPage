import React,{Component} from 'react'
import DisplayCard from './DisplayCard'
import {connect} from 'react-redux'

class QuestionDrawer extends Component{
    state={
        ans:true,
        unans:false,
        color:true
    }
    handleAns=(e)=>{
        e.preventDefault()
       this.setState({
           ans:true,
           unans:false,
           color:true

       })
    }
    handleUnAns=(e)=>{
        e.preventDefault()
       this.setState({
           ans:false,
           unans:true,
           color:true
       })
    }

    render(){
        const{ans,unans,color}=this.state;
        const {question_reducer,user_reducer,answered,unanswered}=this.props
    return(
    <div className="container">
            <button className="ans-btn" style={{backgroundColor: (color===true && ans===true) ? "greenyellow" : "white",
                                                borderColor: color===true && ans===true && "greenyellow"}} onClick={this.handleAns}>
                <p>Answered Questions</p>
            </button>

        
        <button className="unans-btn" style={{backgroundColor: color===true && unans===true ? "greenyellow" : "white",
                                              borderColor: color===true && unans===true && "greenyellow"}} onClick={this.handleUnAns}>
            <p>UnAnswered Questions</p>
        </button>

        <div className="questions">
            <div className="ansquee">
                {
                ans===true && (
                    answered.map((id)=>(
                        
                     <DisplayCard key={id} val={id} info={question_reducer[id].author} avatar={user_reducer[question_reducer[id].author].avatarURL}/>
                
                )))}
            </div>    
            <div className="unansquee">
                {
                unans===true && (
                    unanswered.map((id)=>(
                    <DisplayCard key={id} val={id} info={question_reducer[id].author} avatar={user_reducer[question_reducer[id].author].avatarURL}/>
                    )))}

                </div>
          
          
          
        
            </div>
            
        </div>
        
    
    );
    }
}
function mapStateToProps({question_reducer,user_reducer,AuthenUser}){
    const key=Object.keys(question_reducer)
    return{
        qid:key.sort((a,b)=> question_reducer[b].timestamp - question_reducer[a].timestamp),
        question_reducer,
        user_reducer,
        AuthenUser,
        answered:key.filter((id)=>(
            
            question_reducer[id].optionOne.votes.includes(AuthenUser)===true ||
            question_reducer[id].optionTwo.votes.includes(AuthenUser)===true 

            
        )),
        unanswered:key.filter((idx)=>(
            
            question_reducer[idx].optionOne.votes.includes(AuthenUser)===false &&
            question_reducer[idx].optionTwo.votes.includes(AuthenUser)===false


            
        )),
       
    }
}
export default connect(mapStateToProps)(QuestionDrawer)