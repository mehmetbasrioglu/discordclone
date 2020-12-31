import React from 'react'
import { FaPlus } from 'react-icons/fa'

import {IoPeopleCircle} from "react-icons/io5"

import nitro from "./nitro.png"

function Sohbet_chat() {
    return (
        <div>
            <div className="chat_header">
                <input type="text" placeholder="Sohbet  Bul ya da Baslat"/>
            </div>

            <div className="chat_items">
                <div className="chat_item active">
                    <IoPeopleCircle/>
                    <p>Arkadaşlar</p>
                </div>
                <div className="chat_item ">
                    <img src={nitro}/>
                    <p>Nitro</p>
                </div>
            </div>

            <div className="chat_friends">
                <div className="chat_friendsheader">
                    <p>DİREKT MESAJLAR</p>
                    <FaPlus/>
                </div>
            </div>


            
        </div>
    )
}

export default Sohbet_chat
