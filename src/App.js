import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [search, setSearch] = useState('');

  const addTodo = (todo) => {
    setTodolist([...todolist, todo]);
  };
  const deleteTodo = (todo) => {
    setTodolist(todolist.filter((x) => x.id !== todo.id));
  };

  const updateTodo = (editTodo) => {
    const updatedTodoList = todolist.map((todo) => {
      if(todo.id === editTodo.id){
        return {...todo, name: editTodo.name};
      }
      return todo;
    });
    setTodolist(updatedTodoList)
  };

  const filteredTodos = todolist.filter((x) => x.name.includes(search));
  

  return (
    <div className="App">
      {todolist.length > 0 ? (
        <div>
          <label>Search Todo</label>
         <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
         
      </div>
      ) : ''}
      
      <br/>
      <AddTodo addTodo={addTodo}/>
      <br/>
      <TodoList todolist={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
