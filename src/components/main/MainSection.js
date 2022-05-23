import React, {useState,useEffect} from 'react'

import instagramIcon from '../../assets/owner/instagram.png';
import twitterIcon from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';
import './MainSection.css';

const MainSection = ({selectedPunk,punkListData}) => {
  const [activePunk,setActivePunk] = useState(punkListData[0]);

  useEffect(()=>{
    let punkIndex=punkListData.findIndex(punk=>punk.token_id==selectedPunk)

    setActivePunk((punkListData[punkIndex]));
  },[punkListData,selectedPunk])

  return (
    <div className='main'>
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img src={activePunk.image_original_url} className='selectedPunk' alt="Active punk"/>
          </div>
        </div>
        <div className="punkDetails">
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt=""/>
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@developermichaelbruno</div>
              </div>

               <div className="ownerLinks">
                 <div className="ownerLink">
                   <img src={instagramIcon} alt=""/>
                 </div>
                 <div className="ownerLink">
                   <img src={twitterIcon} alt=""/>
                 </div>
                 <div className="ownerLink">
                   <img src={moreIcon} alt=""/>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainSection;