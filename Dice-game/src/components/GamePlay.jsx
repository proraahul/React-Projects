import NumberSelector from './NumberSelector'
import TotalScore from './TotalScore';
import styled  from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currectDiceState, setCurrectDiceState] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrectDiceState((prev) => randomNumber);

    if(!selectedNumber){
      setError('You have not selected any number');
      return
    };
   

    if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber);
    }else{
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined)

  }

  const resetScore = () => {
    setScore(0);
  }


  return (
    <GamePlayContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector  setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error}/>
      </div>
      <RoleDice currectDiceState={currectDiceState} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </GamePlayContainer>
  )
}

export default GamePlay

const GamePlayContainer = styled.div`
padding-top: 70px;
.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

`