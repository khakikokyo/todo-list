import { RiDeleteBinLine } from 'react-icons/ri';

function TodoList({todoItem, removeItem}) {

  return(
    <div className="todolist__box">
      <h1>Todo List</h1>
      {
        todoItem.map((todo, idx) => {
          return (
            <div className="todolist__content__box" key={idx}>
              <p className="todolist__content">{todo.text}</p>
              <button className="todolist__delete" onClick={()=>{removeItem(todo.id)}}><RiDeleteBinLine /></button>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList;