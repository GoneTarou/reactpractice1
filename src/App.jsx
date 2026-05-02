import './App.css'
import { useState } from 'react';


export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["Todoでした1", "Todoでした2"]);
  const onChangeText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <div>
      <div>
        <h1>Todo App</h1>
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <p>完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => (
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
};