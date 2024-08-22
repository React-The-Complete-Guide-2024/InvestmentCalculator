import Header from "./components/Header";
import UserInputGroup from "./components/UserInputGroup";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 200,
    expectedReturn: 3000,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

  function handleUserInputChange(inputIdentifier, changedValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // + sign changes string to number
        [inputIdentifier]: +changedValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInputGroup
        userInput={userInput}
        onInputChange={handleUserInputChange}
      />
      {!inputIsValid && <p className="center">Duration can not be less than 1.</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
