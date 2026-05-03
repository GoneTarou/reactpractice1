import './App.css'
import { useState } from 'react';
import { ChildArea } from './ChildArea';

export const App = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div className='App'>
      <input type="text" />
      <br />
      <br />
      <button onClick={onClickCountUp}>countup</button>
      <ChildArea />
    </div>
  )
};