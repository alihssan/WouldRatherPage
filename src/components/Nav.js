import React from 'react'
import {Link} from 'react-router-dom'


export default class Nav extends React.Component{
    render(){
    return(
        <div className="nav">
            <ul className="nav-list">
                <Link to="/" style={{color:'green'}}>
                <li className="left_">Home</li>
                </Link>
                <Link to="/add" style={{color:'green'}}>
                <li className="left_">Ask a Question</li>
                </Link>
                <Link to='/leaderboard' style={{color:'green'}}>
                <li className="left_">Leaderboard</li>
                </Link>
                <Link to='/login' style={{color:'green'}}>
                <li className="logout">Log Out</li>
                </Link>

              
            </ul>

            

        </div>
        


    );

    }
}
