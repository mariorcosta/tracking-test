import { useEffect, useState } from 'react'
import './App.css'
import { trackit } from './utils';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    setCount(count => count + 1);
    trackit(`main > ${event.target.name}`, 'app', '', 'main');
  };

  useEffect(() => {
    window.dataLayer.page.name = 'main page';
    window.dataLayer.page.timestamp = new Date(Date.now()).toString();
  }, []);

  return (
    <>
      {<pre>{JSON.stringify(window.dataLayer, null, 3)}</pre>}
      <button name="countButton" onClick={(event) => handleClick(event)}>
        count is {count}
      </button>
    </>
  )
}

export default App
