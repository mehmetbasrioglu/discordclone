import React from 'react'

import {MdClose} from "react-icons/md"
import {BiMessageRoundedDots,BiDotsVerticalRounded} from "react-icons/bi"
function ListItem({...props}) {

    return (
        <div className="chat_friends friends_flex" >
            <img src={props.profileImageUrl} />
            <div>
            <p className="profile_name">{props.profileName}</p>
            </div>
            <div className="flex2 list">
            <BiMessageRoundedDots />
            <BiDotsVerticalRounded />
            </div>
        </div>
    )
}

export default ListItem
