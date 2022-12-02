import TodoItem from "./TotoItem";

function TodoBoard({todoList}) {

  console.log(todoList)
  return(
    <>
      <h1>TODO LIST</h1>
      {todoList.map((item, index)=><TodoItem item={item} key={index} />)}
    </>
  )
}

export default TodoBoard;