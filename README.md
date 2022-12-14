# Todo List
## 오늘의 할일앱 만들기

netlify<br/>
[Todo List DEMO](https://phy-todolist.netlify.app/)

`React` Todo List Project

## 기능 소개

메인 화면을 구현하는 `App.js`와 할 일 리스트를 form 태그와 input value로 처리하는 `TodoCreate.js` component, 그리고 해당 자료를 받아 화면에 출력하고, 삭제하는 `TodoList.js` component로 구현된 Todo-List 입니다.

화면 상단에 날짜와 요일을 moment.js를 활용하여 출력하고, react-icons을 사용하여 해당 icon button을 클릭하면 저장된 할 일 리스트가 전체 삭제됩니다. text 타입의 input 태그와 submit 타입의 input 태그를 사용하여 값을 받아 `TodoList.js` component에서 삭제(removeItem), 완료(checkedItem) 기능을 처리합니다. checkbox 타입의 input 태그를 사용하여 checked 값이 true인 경우에 text에 줄을 그어 완료처리를 했습니다.

마지막으로 localStorage에 데이터를 저장하여 브라우저를 새로고침해도 값이 보존되도록 하였습니다.

1. moment.js 날짜/요일 출력

```javascript
import moment from 'moment';

const today = moment().format("YYYY-MM-DD");
const day = moment().format('dddd');

...
```

2. Todo List 추가

```javascript
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

// checked가 true이면 가운데 줄을 긋고, false면 undefined로 출력
<p className="todolist__content"
  style={todo.checked ? {textDecorationLine: 'line-through'} : undefined}
>
  {todo.text}
</p>
```

3. Todo List id 값으로 개별 삭제

```javascript
// TodoList Remove
const removeItem = (id) => {
  let newTodoItem = todoItem.filter(data => data.id !== id);
  setTodoItem(newTodoItem);
  localStorage.setItem('todoItem', JSON.stringify(newTodoItem));
};

<button className="todolist__delete" onClick={()=>{removeItem(todo.id)}}>x</button>
```

4. Todo List 전체 삭제

```javascript
// TodoList All Remove
const allRemoveItem = () => {
  setTodoItem([]);
  localStorage.setItem('todoItem', JSON.stringify([]));
};

<button onClick={allRemoveItem}><RiDeleteBack2Fill /></button>
```

5. localStroage에 데이터 저장

```javascript
// 1. localStorage에 저장
localStorage.setItem('todoItem', JSON.stringify(newTodoItem));

// 2. localStroage에 저장된 데이터 활용
const [todoItem, setTodoItem] = useState(initialTodoItem);

const initialTodoItem = localStorage.getItem('todoItem') ? JSON.parse(localStorage.getItem('todoItem')) : [];
```