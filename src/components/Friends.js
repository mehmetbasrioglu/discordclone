import React from 'react'

import {MdClose} from "react-icons/md"
function Friends({...props}) {
    const [isHover,setHover] = React.useState(false)
    const hovered = (e) => {
        isHover ? setHover(false) : setHover(true);
    }
    return (
        <div className="chat_friends friends_flex" onMouseEnter={hovered} onMouseLeave={hovered}>
            <img src={props.profileImageUrl} />
            <div>
            <p className="profile_name">{props.profileName}</p>
            </div>
            <div className="flex2">
            <MdClose style={{opacity:isHover ? 1 : 0}}/>
            </div>
        </div>
    )
}

export default Friends
