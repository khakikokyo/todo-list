function TodoList({todoItem, removeItem, checkedItem}) {
  return(
    <div className="todolist__box">
      <h1>Todo List</h1>
      {
        todoItem.map((todo, idx) => {
          console.log(todo.checked)
          return (
            <div className="todolist__content__box" key={idx}>
              <div className="todolist__items">
                <input
                  type="checkbox"
                  className="todolist__checkbox"
                  defaultChecked={false}
                  onChange={() => {checkedItem(todo.id)}}
                />
                <p className="todolist__content" style={todo.checked ? {textDecorationLine: 'line-through'} : undefined}>{todo.text}</p>
              </div>
              <button className="todolist__delete" onClick={()=>{removeItem(todo.id)}}>x</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList;