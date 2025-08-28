import { useState, useRef, forwardRef } from "react";
import { ButtonPrimary, FlexCenter, Input } from "../assets/tailwind-classes";

const NewTask = function NewTask({onAddTask,...props}) {
    const text = useRef('');
    const [valid, setValid] = useState(true);

    const handleAddTask = () => {
        const entireText = text.current.value;
        if(entireText.trim() === '') {
           setValid(false);
           return;
        }
        onAddTask(text.current.value);
        text.current.value = '';
    }
    return(
        <>
        <FlexCenter>
        <Input onFocus={() => setValid(true)} valid={valid} ref={text} {...props} type="text" className={'underline-offset-1'}/>
        <ButtonPrimary onClick={handleAddTask}>Add Task</ButtonPrimary>
        </FlexCenter>
        </>
    );
};

export default NewTask