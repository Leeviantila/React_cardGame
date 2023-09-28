import Card from "./components/Card";
import "./App.css"
import { useState } from "react";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const playerCard = {
  image: "http://placekitten.com/120/100?image=2",
  stats: [{name: "Cuteness", value: getRandomInt(1, 999)},
          {name: "Speed", value: getRandomInt(1, 999)}]
}

const opponentCard = {
  image: "http://placekitten.com/120/104?image=6",
  stats: [{name: "Cuteness", value: 1},
          {name: "Speed", value: 100}]
}

const createCard = index => ({
  image: "http://placekitten.com/120/100?image=" + index,
  stats: [{name: "Cuteness", value: getRandomInt(1, 999)},
          {name: "Speed", value: getRandomInt(1, 999)},
          {name: "Speed", Weight: getRandomInt(1, 999)}
        ],

  id: crypto.randomUUID()



})


export default function App(){

  const [result, setResult] =useState('');

  function difference_print(){
    const playerStats = playerCard.stats[0];
    const opponentSats = opponentCard.stats[0];

    if(playerStats.value > opponentSats.value){
      setResult('Voitit');
    }

    else if(playerStats.value < opponentSats.value){
      setResult('Hävisit');
    }

    else if(playerStats.value === opponentSats.value){
      setResult('Tasa peli');
    }

    console.log(result);

  }


  return(
    <>
      <h1>Kissa kortti peli</h1>

      <div className="game">
        <Card card={playerCard}/>

        <div className="center-area">
          <p>{result || 'Paina nappia'}</p>
          <button onClick={difference_print} type ='button'>Play</button>
        
        </div>
        <Card card={opponentCard}/>

      </div>



    
    </>

  
    );
}







