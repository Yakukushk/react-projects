import Header from "./components/Header/Header";
import PlayerEdit from "./components/Players/PlayerEdit";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/GameBoard/Log";
import { useState } from "react";
import GameOver from "./components/GameBoard/GameOver";

const helperCurrentPlayer = (prev) => {
  if (prev.length > 0 && prev[0].player === "X") {
    return "O";
  }
  return "X";
};

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [playerTurns, setPlayerTurns] = useState([]);
  const [winner, setWinner] = useState(null);
  const [hasDraw, setHasDraw] = useState(false);
  const activePlayer = helperCurrentPlayer(playerTurns);

  const handleSelectSquare = (rowIndex, cellIndex) => {
    setPlayerTurns((prev) => {
      const currentPlayer = helperCurrentPlayer(prev);
      const updatedTurns = [
        {
          square: { row: rowIndex, cell: cellIndex },
          player: currentPlayer,
        },
        ...prev,
      ];
      return updatedTurns;
    });
  };
  function handleRematch() {
    setPlayerTurns([]);
    setWinner(null);
    setHasDraw(false);
  }
  return (
    <div>
      <main>
        <Header />
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <PlayerEdit
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <PlayerEdit
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRematch={handleRematch} />
          )}
          <GameBoard
            onSelectCell={handleSelectSquare}
            turns={playerTurns}
            symbol={activePlayer}
            setWinner={(winner) => setWinner(winner)}
            setHasDraw={(hasDraw) => setHasDraw(hasDraw)}
          />
        </div>
        <Log turns={playerTurns} />
      </main>
    </div>
  );
}

export default App;
