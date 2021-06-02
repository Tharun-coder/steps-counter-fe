import React, { useState } from "react";

function Form({ handleClick }) {
  const [count, setCount] = useState(0);

  return (
    <form className="text-left mt-4 ml-4">
      <label htmlFor="stepsCount">Steps Count</label>
      <input
        className="form-control"
        type="number"
        id="stepsCount"
        placeholder="Enter the steps count"
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        className="btn btn-primary mt-4"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleClick(count);
        }}
      >
        Add Steps
      </button>
    </form>
  );
}

export default Form;
