import React from "react";
import { Todo } from "../models/todos";

const TodoContext = React.createContext<{
  items: Todo[];
  onAddItem: (enteredText: string) => void;
  onDeleteItem: (id: string) => void;
}>({
  items: [],
  onAddItem: (enteredText: string) => {},
  onDeleteItem: (id: string) => {},
});


const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const todos = [new Todo("Test"), new Todo("Test1")];
  const [items, setItems] = React.useState<Todo[]>(todos);

  const onAddItem = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setItems(prev => prev.concat(newTodo));
  };

  const onDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const contextValue = {
    items: items,
    onAddItem: onAddItem,
    onDeleteItem: onDeleteItem,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodosContextProvider };