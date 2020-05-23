import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'
import { authuser} from '../actions/authen'
import {Redirect} from 'react-router-dom'


class Login extends Component{
    state={
        user_name:'',
        isLog:false
    }
    handleChangeLogin=(e,{value})=>{
        this.setState({
            user_name:value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        
        if(this.state.user_name!==''){
            this.props.dispatch(authuser(this.state.user_name))
            this.setState({
                isLog:true
            })
            
        }
    }
    render(){
        console.log(this.props.history)
        const {users,name,Avatar,user_reducer,AuthenUser}=this.props
        const {user_name}=this.state.user_name
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        let neww=[]
        users.forEach(user => {
           neww.push({
            key:user_reducer[user].id,
             text:user_reducer[user].id,
             value:user_reducer[user].id,
             image:{avatar:true,src:user_reducer[user].avatarURL},

            })
        });
        if(this.state.isLog===true){
            return <Redirect to={from}/>
        }
        return(
        <form className="ask_que">
            <div className="payload">
            {AuthenUser!==null ? (
            <Fragment>
            <center><img className="ask_avatar" alt={name} src={Avatar} /></center>
            <h2>{name}</h2>
            <h2>Switch User</h2>
            </Fragment>
            )
            : (
            <Fragment>
            <h2>Switch User</h2>
            </Fragment>
            )
    }
          <center><div className="dropdown">
            <Dropdown
            placeholder='Select Friend'
            fluid
            selection
            options={neww}
            value={user_name}
            onChange={this.handleChangeLogin}
            />
            </div>
            </center>
            <button className="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        </form>
        )
    }
}
function mapStateToProps({user_reducer,AuthenUser}){
    return{
        users:Object.keys(user_reducer),
        name: AuthenUser!==null && user_reducer[AuthenUser].name.split(' ')[0],
        Avatar:AuthenUser!==null && user_reducer[AuthenUser].avatarURL,
        user_reducer,
        AuthenUser
        }
}
export default connect(mapStateToProps)(Login)