import {useState,useEffect} from "react";
import axios from "axios";

import Header from './components/header/Header';
import Punklist from "./components/punklist/Punklist";
import MainSection from "./components/main/MainSection";
import './App.css';

function App() {
    const [punkListData,setPunkListData]=useState([]);
    const [selectedPunk,setSelectedPunk]=useState(0);

    useEffect(()=>{
        //https://testnets-api.opensea.io/assets?asset_contract_address=0x64D5E1bc96A181E930093C1d8eB0427F4cEc020E&order_direction=asc
        //https://testnets-api.opensea.io/assets?owner=0xaFD72f937aA7f6228cf005A6f0Bda42988E79f82&order_direction=asc
        //https://testnets.opensea.io/0xaFD72f937aA7f6228cf005A6f0Bda42988E79f82
        const getMyNfts = async() => {
            const openseaData= await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x64D5E1bc96A181E930093C1d8eB0427F4cEc020E&order_direction=asc')
            //console.log(openseaData.data.assets);
            openseaData.data.assets.sort(function(a, b) {
                return parseFloat(a.token_id) - parseFloat(b.token_id);
            });
            setPunkListData(openseaData.data.assets);
        }
         getMyNfts();
    },[]);

  return (
    <div className="app">
        <Header />
        {   punkListData.length> 0 &&(
            <>
                <MainSection punkListData={punkListData} selectedPunk={selectedPunk}/>
                <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
            </>
            )
        }
    </div>
  );
}

export default App;
