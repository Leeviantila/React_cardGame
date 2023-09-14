import Card from "./components/Card";
import "./App.css"

const playerCard = {
  image: "http://placekitten.com/120/101",
  stats: [{name: "Cuteness", value: 10}]

}


export default function App(){

  return(
    <Card card={playerCard}/>
  
    );
}







