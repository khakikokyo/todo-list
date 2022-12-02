import { MdDeleteForever } from 'react-icons/md';

function TodoItem({item}) {
  return(
    <>
      <div className="todo__item">
        <p>{item}</p>
        <button><MdDeleteForever /></button>
      </div>
    </>
  )
}

export default TodoItem;
