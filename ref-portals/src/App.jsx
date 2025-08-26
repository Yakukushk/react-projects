import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { Challenge, Challenges, Content } from "./assets/styledComponent.jsx";
import Header from "./components/Header.jsx";
import { useState, useRef } from "react";
import ScoreBoard from "./components/ScoreBoard.jsx";
function App() {
  const [entityName, setEntityName] = useState(null);
  const [players, setPlayers] = useState([]);
  const playerName = useRef("");

  const initialPlayers = JSON.parse(localStorage.getItem('players')) || [];
  if (players.length === 0 && initialPlayers.length > 0) {
    setPlayers(initialPlayers);
  }

  const handleNameSubmit = () => {
    const newName = playerName.current.value;
    
    setEntityName(newName);

    setPlayers((prev) => {
      const existingPlayer = prev.find((player) => player.name === newName);
      
      if(existingPlayer) {
       localStorage.setItem("currentPlayer", JSON.stringify(existingPlayer.name));
        return prev
      } else {
        const updatedPlayers = [...prev, { name: newName, score: 0 }];
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        localStorage.setItem("currentPlayer", JSON.stringify(newName));
        return updatedPlayers;
      }
    });

    clearName();
  };

  const clearName = () => {
    playerName.current.value = "";
  };
 


  return (
    <>
      <Content>
        <Header
          description={
            "Stop the timer once you estimate that time is (almost) up"
          }
        />
        <Player
          ref={playerName}
          entityName={entityName}
          handleNameSubmit={handleNameSubmit}
        />
        <Challenges>
          <TimerChallenge title={`Easy`} targetTime={1} />
          <TimerChallenge title={`Not Easy`} targetTime={5} />
          <TimerChallenge title={`Medium`} targetTime={10} />
          <TimerChallenge title={`Hard`} targetTime={15} />
        </Challenges>
        <ScoreBoard />
      </Content>
    </>
  );
}

export default App;
