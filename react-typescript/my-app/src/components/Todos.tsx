import React, { Dispatch, SetStateAction } from "react";
import { Todo } from "../models/todos";
import TodoItem from "./TodoItem";
import module from './modules/Todos.module.css';

function Todos<T extends Todo>({ items, onRemoveTodo }: { items: T[], onRemoveTodo: (id : string) => void }): React.ReactElement {

  return (
    <ul className={module.list}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
}

export default Todos;
