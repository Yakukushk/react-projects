import { useState, useRef } from 'react';
import { PlayerContainer, PlayerHeading, PlayerParagraph, PlayerInput, PlayerButton } from '../assets/styledComponent';

export default function Player() {

  const [entityName, setEntityName] = useState(null);
  const playerName = useRef('');

  const handleNameSubmit = () => {
    setEntityName(playerName.current.value);
    clearName();
  }
  const handleNameReset = () => {
    setEntityName(null);
    playerName.current.value = '';
  }
  const clearName = () => {
    playerName.current.value = '';
  }
  return (
    <PlayerContainer>
      <PlayerHeading>Welcome {entityName ?? 'unknown'} entity</PlayerHeading>
      {/* <h2>Welcome {playerName.current ? playerName.current.value : 'unknown'} entity</h2> */}
      <PlayerParagraph>
        <PlayerInput type="text" ref={playerName} />
        <PlayerButton onClick={handleNameSubmit}>Set Name</PlayerButton>
      </PlayerParagraph>
    </PlayerContainer>
  );
}
