import './App.css';
import { TiPlus } from 'react-icons/ti';
import { useState } from 'react';
import TodoBoard from './components/TodoBoard';
import moment from 'moment';
import { RiDeleteBack2Fill } from 'react-icons/ri';

function App() {

  const today = moment().format("YYYY-MM-DD");
  const day = moment().format('dddd');

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  // TodoList Add
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  }

  // TodoList Remove
  const removeItem = (e) => {
    setTodoList(todoList.filter((todo) => todo === e.target.value));
  }

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="todolist__container">
        <div className="todolist__inner">
          <div>
            <p className="todolist__today">{ today }</p>
            <p className="todolist__day">{ day }</p>
          </div>
          <button onClick={removeItem}><RiDeleteBack2Fill /></button>
        </div>
        <TodoBoard className="todolist__todoboard" todoList={todoList} removeItem={removeItem} />
        <div className="todolist__box">
          <input type="text" value={inputValue} onChange={onChange} placeholder="오늘의 할 일을 작성해 주세요." />
          <button type="" onClick={addItem}><TiPlus /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
