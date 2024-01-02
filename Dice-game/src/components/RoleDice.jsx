import { styled } from "styled-components";
import '/images/dice/dice_1.png';
import '/images/dice/dice_2.png';
import '/images/dice/dice_3.png';
import '/images/dice/dice_4.png';
import '/images/dice/dice_5.png';
import '/images/dice/dice_6.png';

const RoleDice = ({roleDice, currectDiceState}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currectDiceState}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }

`;