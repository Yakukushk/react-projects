import { useContext } from 'react';
import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { TodoContext, TodosContextProvider } from './context/todo-context';

function AppContent() {
  const {items, onDeleteItem} = useContext(TodoContext)
  console.log(items);
  return(
    <>
      <NewTodo/>
      <Todos items={items} onRemoveTodo={onDeleteItem}/>
    </>
  );
}

function App() {
  return (
    <TodosContextProvider>
      <AppContent />
    </TodosContextProvider>
  );
}

export default App;
