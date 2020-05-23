import React,{Component,Fragment} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
class DisplayCard extends Component{
    handleOnQues=(e,val)=>{
        e.preventDefault()
        this.props.history.push(`/question/${val}`)
        
    }
    render(){
    const {val,info,avatar}= this.props
    return(
        <Fragment>
        <div className="user_card">
            <div className="intro">
                <h1>{info}</h1>
                <p>Would You Rather!</p>
            </div>
                <img className="avatar_sq" alt={info} src={avatar}/>
                <button className="poll" onClick={(e)=>this.handleOnQues(e,val)}>
                    <Link to={`/question/${val}`} style={{color:'green'}}>Poll</Link></button>
        </div>
        
    </Fragment>

    )
}
}
export default withRouter(connect()(DisplayCard))