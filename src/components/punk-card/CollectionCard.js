import React from 'react';

import ethImg from "../../assets/eth.png";
import './CollectionCard.css';

const CollectionCard = ({id,name,traits,image}) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="Nft Image"/>
      <div className="details">

      <div className="name">
        {name}
        <div className="id">#{id}</div>
      </div>

      <div className="priceContainer">
        <img src={ethImg} className='ethImage' alt="Ethereum Logo"/>
        <div className="price">{traits[0]?.value}</div>
      </div>
      </div>

    </div>
  )
}

export default CollectionCard;