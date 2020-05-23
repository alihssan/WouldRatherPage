import React,{Fragment,Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/combine_actions'
import {Redirect} from 'react-router-dom'
class Ask extends Component{
    state={
        toHome:false
    }
    handleSubmit=(e)=>{
            e.preventDefault()
            const optionOneText=this.inputval1.value
            const optionTwoText=this.inputval2.value
            const author=this.props.AuthenUser
            const questions={
                optionOneText,
                optionTwoText,
                author
            }
            this.setState({
                toHome:true
            })
            
            return this.props.dispatch(handleAddQuestion(questions))
           
        }

    render(){
     const {name,avatar}=this.props
        if(this.state.toHome===true){
            return <Redirect to='/'/>
         
     }
    return(
        <Fragment>
            <form className="ask_que">
                <div className="payload">
                <center><img className="ask_avatar" alt={name} src={avatar} /></center>
                <h2>Ask {name}</h2>
                <input className="option" placeholder="Enter Option 1" ref={(inp)=>this.inputval1=inp}></input>
                <input className="option" placeholder="Enter Option 2" ref={(inp2)=>this.inputval2=inp2}></input>
                <button className="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        </Fragment>
        


    )
}
}
function mapStateToProps({user_reducer,AuthenUser}){
    return{
        name:user_reducer[AuthenUser].name,
        avatar:user_reducer[AuthenUser].avatarURL,
        AuthenUser
    }
}
export default connect(mapStateToProps)(Ask)
