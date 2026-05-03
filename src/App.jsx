import './App.css'
import { useCallback, useState } from 'react';
import { ChildArea } from './ChildArea';

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value)

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>countup</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  )
};