export const InputTodo = (props) => {
  const{ todoText, onChange, onClick } = props;
  return (
    <div className='input-area'>
      <h1>Todo App</h1>
      <input placeholder="Todoを入力" value={todoText} onChange={onChange}/>
      <button onClick={onClick}>追加</button>
    </div>
  );
};