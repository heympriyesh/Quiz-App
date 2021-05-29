import React from "react";
const Submit = ({ question, setQuestionBank,setCountValue }) => {
  const handleBack=()=>{
    setCountValue(0);
  }
  return (
    <div>
      <div className="d-flex justify-content-around">
        <h1 className="">List of Questions</h1>
        <button onClick={handleBack} className="btn btn-sm btn-secondary w-button font-monospace">Edit/Back</button>
      </div>
      
      <hr/>
      {question.map((res,index) => (
        <div key={index} className="container con2">
          <br />
          <div className="big">
            <label>
              Question. {index + 1}.<u><b className="text-capitalize">{res.questionValue} ?.</b></u>
            </label>
            <br />
          </div>
          {res.optionsArray.map((y,i) => (
            <div key={i}>
              <input type="radio" name={res.questionId}/>
              <label className="col-sm-2 col-form-label text-capitalize">{y}</label>
            </div>
          ))}
          <br/>
        </div>
      ))}

      
    </div>
  );
};

export default Submit;
