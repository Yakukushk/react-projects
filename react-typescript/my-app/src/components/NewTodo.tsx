import React, { useContext, useRef } from "react";
import module from './modules/NewTodo.module.css';
import { TodoContext } from "../context/todo-context";

const NewTodo: React.FC<{}> = () => {
  const {onAddItem} = useContext(TodoContext);
  const currentRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = currentRef.current?.value || '';
    if (enteredText?.trim().length === 0) {
      return;
    }
    onAddItem(enteredText);
  };
  return (
    <form onSubmit={handleSubmit} className={module.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={currentRef} type="text" id="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;
