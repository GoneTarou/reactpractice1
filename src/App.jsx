import './App.css'
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div className='App'>
      <h1>app</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>countup</button>
    </div>
  )
};