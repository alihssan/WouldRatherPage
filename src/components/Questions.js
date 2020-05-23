import React,{Fragment,Component} from 'react'
import {Progress, Checkbox} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleQuestionAnswer} from '../actions/combine_actions'

class Questions extends Component{
    state={
        checked1:false,
        checked2:false,
        checked_class:''

    }
    handleSubmit=()=>{
        const answers={
            authedUser:this.props.AuthenUser,
            qid:this.props.id,
            answer:this.state.checked_class
        }
        this.props.dispatch(handleQuestionAnswer({
            authedUser:this.props.AuthenUser,
            qid:this.props.id,
            answer:this.state.checked_class
        }))
        console.log(answers)
    }
    handleToggle=(e,dta)=>{
        e.preventDefault()
        if(dta.checked===true && dta.className===this.props.opt1){
            this.setState({checked1:true,
                            checked_class:'optionOne'})
    
        }
        else if(dta.checked===false && dta.className===this.props.opt1){
            this.setState({checked1:false,
                            checked_class:'optionTwo'})
    
        }

        else if(dta.checked===true && dta.className===this.props.opt2){
            this.setState({checked2:true,
                            checked_class:'optionTwo'})
    
        }
        else if(dta.checked===false && dta.className===this.props.opt2){
            this.setState({checked2:false,
                            checked_class:'optionOne'})
    
        }
        console.log(dta)
    }
   
    
    render(){
        const {author,opt1,opt2,avatar,opt1_val,opt2_val,total,opt1_vote,opt2_vote,AuthenUser,id_check}=this.props
        const prc_opt1= Math.round((parseInt(opt1_val)/total)*100)
        const prc_opt2= Math.round((parseInt(opt2_val)/total)*100)

        return(
            <Fragment>
            {id_check===true ? (
            <div className="new_que">
                <div className="avatar_n">
                    <img className="avatar_nn" alt={author} src={avatar}/>
                    <p>Asked By</p>
                    <h1>{author}</h1>
                </div>
                {(opt1_vote.includes(AuthenUser) || opt2_vote.includes(AuthenUser)) && (
                <Fragment>
                <div className="option-frame">
                    <p>{opt1}</p>
                    <p>{opt1_val} out of {total}</p>
                    <div className="loader">
                        <Progress percent={prc_opt1} color="green" progress/>
                    </div>
                    
                </div>
                <div className="option-frame">
                    <p>{opt2}</p>
                    <p>{opt2_val} out of {total}</p>

                    <div className="loader">
                        <Progress percent={prc_opt2} color="blue" progress/>
                    </div>
                
                </div>
                </Fragment>
                )
    }
                {opt1_vote.includes(AuthenUser)===false && opt2_vote.includes(AuthenUser)===false && (
                    <Fragment>
                    <div className="option-frame">
                        
                        <p>{opt1}</p><center><Checkbox toggle className={opt1} onChange={(e,dta)=>this.handleToggle(e,dta)}
                        /></center>

                    </div>
                    <div className="option-frame">
                        <p>{opt2}</p><center><Checkbox toggle className={opt2} onChange={(e,dta)=>this.handleToggle(e,dta)} /></center>
                    </div>
                    <button className="submit_btn" onClick={this.handleSubmit}
                    disabled={(this.state.checked2===true && this.state.checked1===true) 
                                || (this.state.checked2===false && this.state.checked1===false)}
                    >
                    {(this.state.checked1===true && this.state.checked2===true)
                    || (this.state.checked2===false && this.state.checked1===false)
                    ?
                    <p>Invalid Selection</p>
                    :
                    <p>Submit</p>
                    }</button>

                    </Fragment>
                )

                    
                }
            </div>
            )
            :
            (
                <div className="error">
                   <center><h1>You Haven't </h1></center>
                </div>
            )
    }
            </Fragment>
        )
    }
}
function mapStateToProps({user_reducer,question_reducer,AuthenUser},props){
    const {id}=props.match.params
    return{
        author:question_reducer[id].author,
        opt1:question_reducer[id].optionOne.text,
        opt2:question_reducer[id].optionTwo.text,
        avatar:user_reducer[question_reducer[id].author].avatarURL,
        opt1_val:question_reducer[id].optionOne.votes.length,
        opt2_val:question_reducer[id].optionTwo.votes.length,
        total:Object.keys(user_reducer).length,
        opt1_vote:question_reducer[id].optionOne.votes,
        opt2_vote:question_reducer[id].optionTwo.votes,
        AuthenUser,
        id,
        id_check: Object.keys(question_reducer).includes(id),

    }
}
export default withRouter(connect(mapStateToProps)(Questions))