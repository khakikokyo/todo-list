import './App.css';
import { useRef, useState } from 'react';
import moment from 'moment';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { RiDeleteBack2Fill } from 'react-icons/ri';

function App() {

  // moment.js 날짜/요일
  const today = moment().format("YYYY-MM-DD");
  const day = moment().format('dddd');

  const [todoItem, setTodoItem] = useState([]);
  const num = useRef(1);

  // TodoList Add
  const addItem = (text) => {
    if(text === "") {
      return <p>오늘의 할 일이 없습니다.</p>
    } else {
      const todo = {
        id: num.current++,
        text: text,
        checked: false
      };
      setTodoItem([...todoItem].concat(todo));
    }
  }

  // TodoList Remove
  const removeItem = (id) => {
    setTodoItem(todoItem.filter((todo) => todo.id !== id));
  }

  // TodoList All Remove
  const allRemoveItem = (e) => {
    setTodoItem(todoItem.filter((todo) => todo === e.target.value));
  }

  return (
    <div className="App">
      <div className="todo__container">
        <div className="todo__inner">
          <div>
            <p className="todo__today">{ today }</p>
            <p className="todo__day">{ day }</p>
          </div>
          <button onClick={allRemoveItem}><RiDeleteBack2Fill /></button>
        </div>
        <TodoList todoItem={todoItem} removeItem={removeItem} />
        <TodoCreate addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
