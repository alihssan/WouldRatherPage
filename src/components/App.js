import React,{Component,Fragment} from 'react'
import Leaderboard from './Leaderboard'
import Ask from './Ask.js'
import QuestionDrawer from './Card'
import Nav from './Nav'
import {connect} from 'react-redux'
import {handleData} from '../actions/combine_actions'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Login from './Login'
import Questions from './Questions'

class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleData())

  }
  
  render(){
    const {loadingBar}=this.props
    
  return (
    <Router>
    <div>
      <LoadingBar/>
      <Fragment>
            <div className="main">
                <Nav/>
            </div>
            {loadingBar!==true && (
              <div className="user">
                <div className="show">
                    <img className="avatar" alt={this.props.User.id} src={this.props.User.avatarURL}/>
                    <p>Hello {this.props.User.name}!</p>
                </div>
            </div>
            )

            }
            <Route path='/login' exact component={Login}/>

            <Fragment>
            <Route path='/' exact render={()=>(
              loadingBar===true ? <Redirect to='/login'/> :<QuestionDrawer/>
            )}/>
            <Route path='/add' exact render={()=>(
              loadingBar===true ? <Redirect to='/login'/>:<Ask/>

            )}/>
            <Route path='/leaderboard' exact render={()=>(
              loadingBar===true ? <Redirect to='/login'/> :<Leaderboard/>

            )}/>
             <Route path='/question/:id' exact render={()=>(
              loadingBar===true ? <Redirect to='/login'/> :<Questions/>

            )}/>
            </Fragment>
          
            

            </Fragment>

    </div>
    </Router>
  );
}
}
function mapStateToProps({AuthenUser,user_reducer,question_reducer}){
  return{
     loadingBar: AuthenUser===null,
     User:user_reducer[AuthenUser],
     user_reducer
  }

}
export default connect(mapStateToProps)(App)

