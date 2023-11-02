import Card from "./components/Card";
import PlayButton from "./components/PlayButton";
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
          {name: "Weight", value: getRandomInt(1, 999)}
        ],

  id: crypto.randomUUID()



})


const deck = Array(16).fill(null).map((_, index) => createCard(index));
const half = Math.ceil(deck.length / 2);
const dealCards = () => {
  shuffle(deck);
  return{
    player:deck.slice(0, half),
    opponent: deck.slice(half)
  }
}


function shuffle(array){
  for(let indeksi = array.length - 1; indeksi > 0; indeksi--){
      const randomIndeksiTaulukossa = Math.floor(Math.random() * (indeksi + 1));
  
      [array[indeksi], array[randomIndeksiTaulukossa]] = [array[randomIndeksiTaulukossa], array[indeksi]]
  }

  return array;
}


export default function App(){

  const [result, setResult] =useState('');
  const[cards, setCard] = useState(dealCards);
  const[gameState, setGameState] = useState('play');

  function difference_print(){
    const playerStats = cards.player[0].stats[0];
    const opponentSats = cards.opponent[0].stats[0];

    if(playerStats.value > opponentSats.value){
      setResult('Voitit')
      // Debug
      //setResult('Voitit' + ' pelaaja ' + cards.player[0].stats[0].value + ' vastustaja ' + cards.opponent[0].stats[0].value);
      //setResult('Voitit' + ' pelaaja ' + cards.player[cards.player.length - 1].stats[0].value + ' vastustaja ' + cards.opponent[cards.opponent-length - 1].stats[0].value);

    
    }

    else if(playerStats.value < opponentSats.value){
      setResult('Hävisit');
      // Debug
      //setResult('Hävisit' + ' pelaaja ' + cards.player[0].stats[0].value + ' vastustaja ' + cards.opponent[0].stats[0].value);
      //setResult('Hävisit' + ' pelaaja ' + cards.player[cards.player.length - 1].stats[0].value + ' vastustaja ' + cards.opponent[cards.opponent-length - 1].stats[0].value);


    }

    else if(playerStats.value === opponentSats.value){
      setResult('Tasa peli');
    }

    setGameState('result');

  
  
  
  }

  function nextRound(){
    
  }

  return(
    <>
      <h1>Kissa kortti peli</h1>

      <div className="game">

        <ul className="card-list">
          {cards.player.map((playerC, index) => (
            <li className="card-list-item player" key={playerC.id}>
              <Card card={index === 0 ? playerC : null}/>

            </li>
          ))}
        </ul>

        <div className="center-area">
          <p>{result || 'Paina nappia'}</p>
          {
            gameState === 'play' ? 
            (<PlayButton text={"Play"} handleClick={difference_print} />)
            :
            (<PlayButton text={"Next"} handleClick={nextRound} />)
          }
          

        </div>

        <ul className="card-list opponent">
          {cards.opponent.map((opponentC ,index) => (
            <li className="card-list-item opponent" key={opponentC.id}>
              <Card card={index === 0 ? opponentC : null}/>

            </li>
          ))}
        </ul>

      </div>



    
    </>
    

  
    );
}







