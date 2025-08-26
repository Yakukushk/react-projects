import { useState, useRef, forwardRef } from 'react';
import { PlayerContainer, PlayerHeading, PlayerParagraph, PlayerInput, PlayerButton } from '../assets/styledComponent';

 const Player = forwardRef(function Player({entityName, handleNameSubmit}, ref) {
 
  const handleNameReset = () => {
    setEntityName(null);
    playerName.current.value = '';
  }

  const playerName = JSON.parse(localStorage.getItem('currentPlayer')) || undefined;

  return (
    <PlayerContainer>
      <PlayerHeading>Welcome {playerName ?? 'unknown'} entity</PlayerHeading>
      {/* <h2>Welcome {playerName.current ? playerName.current.value : 'unknown'} entity</h2> */}
      <PlayerParagraph>
        <PlayerInput type="text" ref={ref} />
        <PlayerButton onClick={handleNameSubmit}>Set Name</PlayerButton>
      </PlayerParagraph>
    </PlayerContainer>
  );
});

export default Player