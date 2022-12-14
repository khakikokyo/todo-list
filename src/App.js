import './App.css';
import { useRef, useState } from 'react';
import moment from 'moment';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const initialTodoItem = localStorage.getItem('todoItem') ? JSON.parse(localStorage.getItem('todoItem')) : [];

function App() {

  // moment.js 날짜/요일
  const today = moment().format("YYYY-MM-DD");
  const day = moment().format('dddd');

  const [todoItem, setTodoItem] = useState(initialTodoItem);
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
      localStorage.setItem('todoItem', JSON.stringify([...todoItem, todo]));
    }
  };

  // TodoList Remove
  const removeItem = (id) => {
    let newTodoItem = todoItem.filter(data => data.id !== id);
    setTodoItem(newTodoItem);
    localStorage.setItem('todoItem', JSON.stringify(newTodoItem));
  };

  // TodoList All Remove
  const allRemoveItem = () => {
    setTodoItem([]);
    localStorage.setItem('todoItem', JSON.stringify([]));
  };

  // todoList CheckedItem
  const checkedItem = (id) => {
    let newTodoItem = todoItem.map(data => {
      if(data.id === id) {
        data.checked = !data.checked;
      }
      return data;
    })
    setTodoItem(newTodoItem);
    localStorage.setItem('todoItem', JSON.stringify(newTodoItem));
  };

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
        <TodoList todoItem={todoItem} removeItem={removeItem} checkedItem={checkedItem} />
        <TodoCreate addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
