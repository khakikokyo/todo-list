import { useState } from "react";

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
    <form className="create__box" onSubmit={addTodoList}>
      <input type="text" placeholder="할 일을 입력해 주세요." className="create__input" value={value} onChange={onChange}></input>
      <input className="create__button" type="submit" value="입력" />
    </form>
  )
}

export default TodoCreate;