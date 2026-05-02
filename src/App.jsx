import './App.css'
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>app</h1>
      <p>{count}</p>
    </div>
  )
};