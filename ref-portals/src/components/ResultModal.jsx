import { forwardRef, useImperativeHandle, useRef } from "react";
import { ResultsModal, ResultButton } from "../assets/styledComponent";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeLeft, onReset, score },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
    };
  });
  return createPortal(
    <>
      <ResultsModal ref={dialog}>
        <h2>{result()}</h2>
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with <strong>{timeLeft} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <ResultButton>Close</ResultButton>
        </form>
      </ResultsModal>
    </>, document.getElementById('modal')
  );
});

export default ResultModal;
