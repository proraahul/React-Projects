import StartGame from "./components/StartGame";
import {useState} from 'react';
import GamePlay from "./components/GamePlay";

function App(){
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay /> : <StartGame toggle={toogleGamePlay} /> 
    }
    </>
  )
}

export default App



