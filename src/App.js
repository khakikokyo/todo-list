import './App.css';
import { TiPlus } from 'react-icons/ti';
import { useState } from 'react';
import TodoBoard from './components/TodoBoard';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }

  return (
    <div className="App">
      <div className="todolist__container">
        <TodoBoard className="todolist__todoboard" todoList={todoList} />
        <div className="todolist__box">
          <input value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)} />
          <button onClick={addItem}><TiPlus /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
