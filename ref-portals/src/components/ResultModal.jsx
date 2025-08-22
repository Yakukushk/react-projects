import { forwardRef, useImperativeHandle, useRef } from "react";
import { ResultsModal, ResultButton } from "../assets/styledComponent";

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                if (dialog.current) {
                dialog.current.showModal();
                }
            }
        }
    })
    return (
       <>
       <ResultsModal ref={dialog}>
         <h2>You {result}</h2>
         <p>The target time was <strong>{targetTime} seconds</strong></p>
         <p>You stopped the timer with <strong>X seconds left.</strong></p>
         <form method="dialog">
            <ResultButton>Close</ResultButton>
         </form>
       </ResultsModal>
       </>
    );
})

export default ResultModal;

