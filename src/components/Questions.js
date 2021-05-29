import React, { useState } from "react";
const Questions = ({ countvalue, setCountValue, question, setQuestion }) => {
  const [count, setCount] = useState(0);
  var bool = false;
  var error="";
  console.log("The Question  is ", question)
  const addOption = (index) => {
    var currentQuest = [...question];
    currentQuest[index].optionsArray.push("");
    setQuestion(currentQuest);
  };

  const addQuestion = () => {
    question[question.length - 1].questionValue !== ""
      ? setQuestion([
        ...question,
        {
          questionId: question.length + 1,
          questionValue: "",
          optionsArray: ["", "", ""],
        },
      ])
      : alert("please fill the Question... ");
  };
  const funCount = () => {

    question.map((data) => {
      // console.log("The data length",data)
      if (data.questionValue.length === 0) {
        return alert("Fill the Question first")
      } else {
        data.optionsArray.map((value, index) => {
          if (value.length === 0) {
            alert(`Please fill the option ${index + 1}`)
            bool = false;
            // setCount(count+1);        
          } else {
            bool = true;
          }
        })
      }
    }
    )
    callFunc();
  }
  const callFunc = () => {
    if (bool) {
      // console.log("Happend")
      setCountValue(countvalue + 1)
    }
  }
 
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center text-primary fw-bold">Add Questions</h1>
      <hr />
      {console.log("The value from the start", question)}
      {question.map((data, index) => (
        <form key={index}>
          <div className="row">
            <div className="col">
              <label className="form-label">Question no. {index + 1} </label>
              <input
                className="p-2 form-control"
                type="text"
                placeholder="Enter Your Question"
                value={question[index].questionValue}
                  onChange={(e) =>
                    setQuestion(
                      [...question],
                      [(question[index].questionValue = e.target.value)]
                    )
                  }
                
              />
            </div>
          </div>
          <br />
          <br />
          {data.optionsArray.map((res, i) => (
            <div key={i}>
              <div className="row">
                <div className="col-6">
                  <label className="">Option {i + 1}: </label>
                  <input
                    className="p-2"
                    type="text"
                    placeholder="Enter Your Option"
                    value={question[index].optionsArray[i]}
                    onChange={(e) =>
                      setQuestion(
                        [...question],
                        [(question[index].optionsArray[i] = e.target.value)]
                      )
                    }
                    required
                  />
                </div>
              </div>

              <br />
              <br />
            </div>
          ))}
          <button
            className="btn btn-sm btn-primary d-flex justify-content-center p-2"
            onClick={() => addOption(index)}
          >
            Add more option
          </button>
          <br />
        </form>
      ))}
      <br />
      <div className="d-flex justify-content-center mb-2">
        <button
          className="btn btn-sm btn-info p-2"
          onClick={() => addQuestion()}
        >
          Add More Question
      </button>
        <button
          className="btn btn-sm btn-success p-2 ml-3"
          // onClick={() => setCountValue(countvalue + 1)}
          onClick={funCount}
        >
          Submit
      </button>
      </div>

    </div>
  );
};

export default Questions;
