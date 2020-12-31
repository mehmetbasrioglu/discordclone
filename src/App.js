/*


Kod Yazarı: Mehmet Basrioğlu


*/


import React from 'react';


import './App.css';
import Sunucu_server from './components/Sunucu_server';
import Discord from './components/Discord';
import discordlogo from "./components/discordlogo.png"
import Create from './components/Create';
import Explore from './components/Explore';
import Sohbet_chat from './components/Sohbet_chat';
import Friends from './components/Friends';



import {FaDiscord} from "react-icons/fa"

import {FaMicrophone,FaMicrophoneSlash,
  FaHeadphones} from "react-icons/fa"
import {MdSettings} from "react-icons/md"
import FriendsMain from './components/FriendsMain';
function App() {
  const [modalstate,setModal] = React.useState(true);
  return (
    <div className="App">
 
       {modalstate ? (
              <div className="modal_main">
          <div className="modal">
          <FaDiscord/>
          <h4>Discord Clone</h4>
          <p>Örnek Modal</p>
        
          <button type="submit" onClick={(e)=>(setModal(false))}>Kapat</button>
        </div>
      </div>
       ):""}
      <div className="app_body">
        
        <div className="servers">

          {/* Server Lists - Sunucu Listesi */}
          <Discord 
          serverImage={discordlogo}
          serverText="Sunucu 1"
          />
          <Sunucu_server 
          serverImage="https://i.pinimg.com/564x/33/9c/f7/339cf721b354c104b0f18c1258477324.jpg"
          serverText="Sunucu 1"
          />
          <Sunucu_server 
          serverImage="https://i.pinimg.com/564x/b3/26/b7/b326b7add3b3bf7af46acc374e119ffe.jpg"
          serverText="Sunucu 2"
          />
          <Sunucu_server 
          serverImage="https://i.pinimg.com/originals/7c/a8/09/7ca809c6f2352bf2858b7c3e2591ccf4.gif"
          serverText="Sunucu 3"
          />
          <Sunucu_server 
          serverImage="https://i.pinimg.com/originals/24/9c/85/249c85e71d1b8be2a192c41599c1f8bf.gif"
          serverText="Sunucu 4"
          />
            <Sunucu_server 
          serverImage="https://i.pinimg.com/564x/98/ea/1a/98ea1acbd5ec99ed772148a611b95b1b.jpg"
          serverText="Sunucu 5"
          />
            <Sunucu_server 
          serverImage="https://i.pinimg.com/564x/9b/70/11/9b701143b35635419c72468a3e1a5b58.jpg"
          serverText="Sunucu 6"
          />
          <Create/>
          <Explore/>
          
        </div>
        <div className="directmessages">

          <Sohbet_chat/>
         <div className="directmessages_fscroll">
               <Friends 
                  profileName="Happy New Year  !"
          profileImageUrl="https://i.pinimg.com/564x/3e/84/9a/3e849a4688e093cae0f19db781515982.jpg"
          />
      

         </div>
          <div className="directmessages_self">
            <img 
            src="https://i.pinimg.com/564x/e9/1a/c8/e91ac88aaf206996a41e87d070788ba4.jpg"
            />
            <p>
            <small>Mehmet Basrioğlu</small>
            <small className="note">#0001</small>
            </p>
            <FaMicrophone/>
            <FaHeadphones/>
            <MdSettings/>
          </div>

        </div>
        <div className="friends">
          <FriendsMain/>
        </div>
      </div>
    </div>
  );
}

export default App;
