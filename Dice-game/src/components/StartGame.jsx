import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/Button';
import logo from '/images/dices.png';

const StartGame = ({ toggle }) => {
  return (
    <Container>
     <div>
        <img src={logo} alt="logo" />
     </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }

`;