import React from 'react'

function Kart({...props}) {
    return (
       <>
        <div className="kart">
            
            <div className="kartcontent">
            <div className="kartdetails">
            <img src={props.gameicon} />
            <p>{props.oynuyor}</p>
            </div>
            <div>
                <img className="kartavatar" src={props.playerAvatar} />
            </div>
            </div >
        </div>

        
    </>
    )
}

export default Kart
