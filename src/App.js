import React, { useState } from 'react';
import data from './data.json';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [userInput, setUserInput ] = useState('');

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task, complete: task.complete };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const handleChange = (event) => {
      setUserInput(event.target.value)
  }
  const addTask = (userInput) => {
    let newTodo = [
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(newTodo);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      addTask(userInput);
      setUserInput('');
  }

  return (
    <div className='App'>
      <Header />
      <form className = 'add-form' onSubmit={handleSubmit}>
            <input value={userInput} type='text' onChange={handleChange} placeholder='Enter task...'/>
            <button className= 'add-button'>Submit</button>
        </form>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />

    </div>
  );
}

export default App;
