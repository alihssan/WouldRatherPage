import React,{Fragment} from 'react'


export default function Board(props){
    const {user,total,color,rank} = props
    var answeredQ=Object.keys(user.answers).length;
    var created=user.questions.length;
    var percent= Math.round((parseInt(answeredQ)/parseInt(total))*100);
    return(
        <Fragment>
            <div className="board_card">
                <img className="avatar_card" alt="user" src={user.avatarURL}/>
                <div className="info">
                <h1>{user.name}</h1>
                <p>Rank <span className="rank" style={{backgroundColor:color}}>{rank}</span></p>
                 <p>Answered <span className="rank" style={{backgroundColor:color}}>{answeredQ}</span></p>
                 <p>Created <span className="rank" style={{backgroundColor:color}}>{created}</span></p>
                </div>
                
                
                <div className="score">
                    <p>Score</p>
                    <div className="show_score" style={{backgroundColor:color}}>
                       <p>{percent}</p>
                    </div>
                </div>

            </div>
            
        </Fragment>
    )
}