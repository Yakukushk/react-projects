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

  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStart, setTimeStart] = useState(false);

//   const handleStart = () => {
//     timer.current = setTimeout(() => {
//       setTimeExpired(true);
//       dialog.current.open();
//     }, targetTime * 1000);
//     setTimeStart(true);
//   };

const handleStart = () => {
    timer.current = setInterval(() => {

    }, 10);
}

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <Fragment>
      <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
      <Challenge {...props}>
        <ChallengeHeading>{title}</ChallengeHeading>
        {timeExpired && <p>You Lose</p>}
        <ChallengeTime>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </ChallengeTime>
        <p>
          <ChallengeButton onClick={timeStart ? handleStop : handleStart}>
            {timeStart ? `Stop` : `Start`} Challenge
          </ChallengeButton>
        </p>
        <p className="">Time is running</p>
      </Challenge>
    </Fragment>
  );
}
