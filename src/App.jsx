import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const addTodo = (text, category) =>{
    const newTodos = [
      ...todo,
      {
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodo(newTodos);
  };

  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todo.map((todo)=>(
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
   </div>
  )
}

export default App
