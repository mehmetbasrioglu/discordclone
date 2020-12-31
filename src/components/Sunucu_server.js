import React from 'react'


function Sunucu_server({...props}) {
    return (
        <ul>
            <li>
              <div className="servers_container">
              <img src={props.serverImage}/>
              <div className="servers_overlay">
                <div className="servers_text">{props.serverText}</div>
                <span className="span"></span>
              </div>

              </div>
   
            </li>
          </ul>
    )
}



export default Sunucu_server
