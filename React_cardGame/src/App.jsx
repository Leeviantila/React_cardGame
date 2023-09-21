import Card from "./components/Card";
import "./App.css"


const playerCard = {
  image: "http://placekitten.com/120/100?image=2",
  stats: [{name: "Cuteness", value: 10},
          {name: "Speed", value: 50}]
}

const opponentCard = {
  image: "http://placekitten.com/120/104?image=6",
  stats: [{name: "Cuteness", value: 10},
          {name: "Speed", value: 1}]
}



export default function App(){

  function difference_print(){
    const playerStats = playerCard.stats[0];
    const opponentSats = opponentCard.stats[0];
    let result = '';

    if(playerStats.value > opponentSats.value){
      result = 'pelaaja';
    }

    else if(playerStats.value < opponentSats.value){
      result = 'vastustaja';
    }

    else if(playerStats.value === opponentSats.value){
      result = 'Tasa peli';
    }

    console.log(result);

  }


  return(
    <div>
      <Card card={playerCard}/>
      <Card card={opponentCard}/>
      <button onClick={difference_print} type ='button'>Play</button>
    </div>
  
    );
}







