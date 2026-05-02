export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className='input-area'>
      <p>完了のTodo</p>
      <ul>
        {completeTodos.map((todo,index) => (
          <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
          ))}
      </ul>
    </div>
  )
};