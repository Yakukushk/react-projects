import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import CounterHistory from './components/Counter/CounterHistory.jsx'
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick(newCount) {
    setChosenCount(newCount);
    setChosenCount(prev => prev + 1);
  }

  return (
    <>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={() => handleSetClick(enteredNumber)}>Set</button>
        </section>
        <Counter key={chosenCount} initialCount={chosenCount} />

      </main>
    </>
  );
}

export default App;
