import { Fragment, useRef, useState } from "react";
import {
  Challenge,
  ChallengeHeading,
  ChallengeTime,
  ChallengeButton,
} from "../assets/styledComponent";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime, ...props }) {
  const timer = useRef();
  const dialog = useRef();


  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  

  // if (!currentPlayer || !currentPlayer.name) return null;


  const userLost = () => {
    if (timeRemaining <= 0) {
      return `You Lost`;
    } else {
      return `You score: ${score}`
    }
  };

  const updatePlayer = (newScore) => {

    const players = JSON.parse(localStorage.getItem('players')) || [];
    const currentPlayer = JSON.parse(localStorage.getItem('currentPlayer')) || null;
    
    if (!currentPlayer) {
      console.log("No current player found");
      return;
    }

    const updatedPlayers = players.map((player) => {
      
      return player !== null && player.name === currentPlayer 
        ? {...player, score: (player.score || 0) + newScore}
        : player;
    });
    
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };
  const formattedTimeLeft = (timeRemaining / 1000).toFixed(2);

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  //   const handleStart = () => {
  //     timer.current = setTimeout(() => {
  //       setTimeExpired(true);
  //       dialog.current.open();
  //     }, targetTime * 1000);
  //     setTimeStart(true);
  //   };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    updatePlayer(score);
    clearInterval(timer.current);
  };

  var score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  

  return (
    <Fragment>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result={userLost}
        timeLeft={formattedTimeLeft}
        onReset={handleReset}
      />
      <Challenge {...props}>
        <ChallengeHeading>{title}</ChallengeHeading>
        {/* {timeExpired && <p>You Lose</p>} */}
        <ChallengeTime>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </ChallengeTime>
        <p>
          <ChallengeButton onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? `Stop` : `Start`} Challenge
          </ChallengeButton>
        </p>
        <p className="">Time is running</p>
      </Challenge>
    </Fragment>
  );
}
