import { useState } from "react";
import { TiPlus } from "react-icons/ti";

function TodoCreate({addItem}) {

  const [value, setValue] = useState('');

  // input value 확인
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const addTodoList = (e) => {
    e.preventDefault();
    addItem(value);
    setValue('');
  }

  return(
    <div className="create__box">
      <form onSubmit={addTodoList}>
        <input placeholder="할 일을 입력해 주세요." className="create__input" value={value} onChange={onChange}></input>
        <button className="create__button"><TiPlus /></button>
      </form>
    </div>
  )
}

export default TodoCreate;