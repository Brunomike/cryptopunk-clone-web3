import {useState,useEffect} from "react";
import axios from "axios";

import Header from './components/header/Header';
import CollectionCard from "./components/punk-card/CollectionCard";
import './App.css';
import Punklist from "./components/punklist/Punklist";

function App() {
    const [punkListData,setPunkListData]=useState([]);

    useEffect(()=>{
        //https://testnets-api.opensea.io/assets?asset_contract_address=0x64D5E1bc96A181E930093C1d8eB0427F4cEc020E&order_direction=asc
        //https://testnets-api.opensea.io/assets?owner=0xaFD72f937aA7f6228cf005A6f0Bda42988E79f82&order_direction=asc
        const getMyNfts = async() => {
            const openseaData= await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x64D5E1bc96A181E930093C1d8eB0427F4cEc020E&order_direction=asc')
            console.log(openseaData.data.assets);
            setPunkListData(openseaData.data.assets);
        }
         getMyNfts();
    },[]);

  return (
    <div className="app">
      <Header />
        <Punklist punkListData={punkListData}/>
        {/*<CollectionCard id={0} name={"Bandana Punk"} image={"https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg"} traits={[{'value':12}]}/>*/}
    </div>
  );
}

export default App;
