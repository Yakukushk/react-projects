import { useState } from "react";
import CardCalculator from "./components/CardCalucator";
import TableSummary from "./components/TableSummary";
import Header from "./components/ui/Header";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });

  const validInput = userInput.duration >=1 && userInput.expectedReturn >=1 && userInput.annualInvestment >=1 && userInput.initialInvestment >=1;
  const handleChange = (inputIndex, event) => {
    setUserInput({
      ...userInput,
      [inputIndex]: event.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <CardCalculator handleChange={handleChange} userInput={userInput} />
        </section>
        <section>
          {validInput ? (<TableSummary input={userInput} />) : (<p style={{textAlign: 'center'}}>Invalid input</p>)}
        </section>
      </main>
    </>
  );
}

export default App;
