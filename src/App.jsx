import { useState } from 'react';
import './App.css';
import Button from './Button.jsx';
import NavTabs from './CategorisBar.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Rotem Dubon</h1>
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          text={`count is ${count}`}
        ></Button>
      </div>
      <NavTabs />
    </>
  );
}

export default App;
