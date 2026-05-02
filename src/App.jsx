import './App.css'
import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';


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

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMax = incompleteTodos.length >= 2;

  return (
    <div>
      <InputTodo todoText={todoText} onChange={onChangeText} onClick={onClickAdd}
        disabled={isMax} />
      {isMax && (
        <p style={{ color: "red" }}>surti</p>
      )}
      <IncompleteTodo todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </div>
  )
};