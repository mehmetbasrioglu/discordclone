import React from 'react'

import {IoPeopleCircle} from "react-icons/io5"
import {BiMessageRoundedAdd} from "react-icons/bi"
import {FaInbox} from "react-icons/fa"
import {BsFillQuestionCircleFill} from "react-icons/bs"
import ListItem from './ListItem'
import Kart from './Kart'
import lol from "./lol.png"
import valorant from "./valorant.png"
function FriendsMain() {
    return (
        <div cl>
            <div className="friendsmain_header">
                <div className="friendsmain_sec1">
                    <span><IoPeopleCircle/> Arkadaşlar</span>
                    <span className="friendsmain_span2_active">Çevrimiçi</span>
                    <span className="friendsmain_span2">Tümü</span>
                    <span className="friendsmain_span2">Bekleyen</span>
                    <span className="friendsmain_span2">Engellenen</span>
                    <span className="friendsmain_span3">Arkadaş Ekle</span>
                </div>
                <div className="friendsmain_header_option">
                    <BiMessageRoundedAdd/>
                    <FaInbox/>
                    <BsFillQuestionCircleFill/>
                </div>
            </div>


            {/** Friends Section */}

            <div className="friendsmain_center">
                <div className="friendsmain_center_list">
                <ListItem 
                  profileName="Happy New Year  !"
          profileImageUrl="https://i.pinimg.com/564x/3e/84/9a/3e849a4688e093cae0f19db781515982.jpg"
          />
          <ListItem 
                  profileName="ﾌ乇丂ㄚ"
          profileImageUrl="https://i.pinimg.com/originals/45/ef/d7/45efd75b2777b0b4c66150914c003209.gif"
          />
                </div>
                <div className="friendsmain_center_activity">
                    
                    <Kart
                    oynuyor="League Of Legends" 
                    gameicon={lol}
                    playerAvatar="https://i.pinimg.com/564x/3e/84/9a/3e849a4688e093cae0f19db781515982.jpg"

                    />
                   <Kart
                   oynuyor="Valorant"
                   gameicon={valorant}
                   playerAvatar="https://i.pinimg.com/originals/45/ef/d7/45efd75b2777b0b4c66150914c003209.gif"
                   />
                    
                </div>
            </div>
        </div>
    )
}

export default FriendsMain
