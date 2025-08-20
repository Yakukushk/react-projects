import { useState } from "react";

const titleInput = [
    {id: 'initialInvestment', title : 'Initial Investment'},
    {id: 'annualInvestment', title : 'Annual Investment'},
    {id: 'expectedReturn', title : 'Expected Return'},
    {id: 'duration', title : 'Duration'},
]

export default function CardCalculator({handleChange, userInput}) {

  return (
    <section id="user-input">
      <div className="input-group">
        {titleInput.map((item, index) => (
          <p key={index}>
            <label htmlFor={item.id}>{item.title}</label>
            <input
              type="number"
              value={userInput[item.id]}
              id={item.id}
              required
              onChange={(event) => handleChange(item.id, event)}
            />
          </p>
        ))}
      </div>
    </section>
  );
}
