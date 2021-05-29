import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Submit from "./components/Submit";

function App() {
  const [countvalue, setCountValue] = useState(0);
  const [question, setQuestion] = useState([
    {
      questionId: 1,
      questionValue: "",
      optionsArray: ["", "", ""],
    },
  ]);
  return (
    
      <div className="App">
        {countvalue === 0 ? (
          <Questions
            question={question}
            setQuestion={setQuestion}
            countvalue={countvalue}
            setCountValue={setCountValue}
          />
        ) : (
            <Submit question={question} setCountValue={setCountValue} setQuestion={setQuestion} />
          )}
      </div>
   
  );
}

export default App;
