import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const WINNING_COMBINATIONS = [
  [
    { row: 0, cell: 0 },
    { row: 0, cell: 1 },
    { row: 0, cell: 2 },
  ],
  [
    { row: 1, cell: 0 },
    { row: 1, cell: 1 },
    { row: 1, cell: 2 },
  ],
  [
    { row: 2, cell: 0 },
    { row: 2, cell: 1 },
    { row: 2, cell: 2 },
  ],
  [
    { row: 0, cell: 0 },
    { row: 1, cell: 0 },
    { row: 2, cell: 0 },
  ],
  [
    { row: 0, cell: 1 },
    { row: 1, cell: 1 },
    { row: 2, cell: 1 },
  ],
  [
    { row: 0, cell: 2 },
    { row: 1, cell: 2 },
    { row: 2, cell: 2 },
  ],
  [
    { row: 0, cell: 1 },
    { row: 1, cell: 1 },
    { row: 2, cell: 1 },
  ],
];

export default function GameBoard({
  onSelectCell,
  symbol = "X",
  turns = [],
  setHasDraw,
  setWinner,
}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //const gameBoard = [...initialGameBoard.map(array => [...array])];

  const derivedGameBoard = () => {
    const gameBoard = [...initialGameBoard.map((array) => [...array])];
    turns.forEach((turn) => {
      const { square, player } = turn;
      const { row, cell } = square;
      gameBoard[row][cell] = player;
    });
    return gameBoard;
  };
  const derivedWinner = (gameBoard) => {
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
      const firstElement = gameBoard[combination[0].row][combination[0].cell];
      const secondElement = gameBoard[combination[1].row][combination[1].cell];
      const thirdElement = gameBoard[combination[2].row][combination[2].cell];
      if (
        firstElement &&
        firstElement === secondElement &&
        secondElement === thirdElement
      ) {
        winner = firstElement;
        setWinner(winner);
        setHasDraw(false);
      }
    }
    return winner;
  };

  const gameBoard = derivedGameBoard();
  const winner = derivedWinner(gameBoard);

  if (!winner && turns.length === 9) {
    setHasDraw(true);
  } else if (turns.length < 9) {
    setHasDraw(false);
  }
  //#region old code
  //   const handleSelectCell = (rowIndex, cellIndex) => {
  //     setGameBoard((prev) => {
  //       const updatedBoard = [...prev.map((innerArray) => [...innerArray])]; // not mutable general array try create copy of array
  //       updatedBoard[rowIndex][cellIndex] = symbol;
  //       console.log( updatedBoard[rowIndex][cellIndex]);
  //       return updatedBoard;
  //     });
  //     onSelectCell();
  //   };
  //#endregion

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((cell, cellIndex) => (
                <li key={cellIndex}>
                  <button
                    disabled={cell !== null}
                    onClick={() => onSelectCell(rowIndex, cellIndex)}
                  >
                    {cell}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
        {winner && <p>{winner} is the winner</p>}
      </ol>
    </>
  );
}
