import React, { useState } from "react";

const Content = () => {
  const [amount, setAmount] = useState(0);

  const currencies = [
    { type: "Taka", multiplier: 84.912 },
    { type: "SGD", multiplier: 1.41341 },
    { type: "CAD", multiplier: 1.39504 },
    { type: "GBP", multiplier: 0.801136 },
  ];

  return (
    <main className="main">
      <form className="form header__form">
        <div className="form__row-two">
          <div className="form__input__container">
            <input
              type="number"
              id="currency"
              className="form__input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />
            <label htmlFor="currency" className="form__label">
              <span>Enter Amount in USD</span>
            </label>
          </div>

          <div className="btn btn--blue" type="submit">
            Convert
          </div>
        </div>
      </form>

      {amount !== 0 && (
        <ul className="card">
          <h2 className="card__title">{amount} USD equivalents:</h2>
          {currencies.map((currency, index) => (
            <li className="card__item" key={index}>
              {currency.type} : <span>{(amount * currency.multiplier).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Content;
