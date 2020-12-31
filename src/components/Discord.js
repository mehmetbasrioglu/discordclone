import React from 'react'

import {FaDiscord} from "react-icons/fa"

function Discord({...props}) {
    return (
        <ul className="discord2">
            <li>
              <div className="servers_container cizgi">
              <FaDiscord className="svg"/>
              <p>Discord</p>
              </div>
   
            </li>
          </ul>
    )
}



export default Discord
