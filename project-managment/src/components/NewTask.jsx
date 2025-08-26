import { useState, useRef } from "react";
import { ButtonPrimary, FlexCenter, Input } from "../assets/tailwind-classes";

const NewTask = forwardRef(function NewTask({onAddTask,...props}, ref) {
    const text = useRef();

    const handleAddTask = () => {
        onAddTask(text.current.value);
        text.current.value = '';
    }
    return(
        <>
        <FlexCenter>
        <Input ref={text} {...props} type="text" className={'underline-offset-1'}/>
        <ButtonPrimary onClick={handleAddTask}>Add Task</ButtonPrimary>
        </FlexCenter>
        </>
    );
});

export default NewTask