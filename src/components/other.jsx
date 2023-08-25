import React from 'react';

const CreditCardForm = () => {
  return (
    <div className='box'>
      <form>
        <div>
          <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            placeholder="e.g Jane Appleseed"
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="e.g 1234 5678 9012 3456"
            pattern="[0-9 ]{13,19}"
            required
          />
        </div>
        <div>
          <label htmlFor="expDate">Exp. Date (MM / YY)</label>
          <div>
            <input
              type="text"
              id="expMonth"
              name="expMonth"
              placeholder="MM"
              pattern="(0[1-9]|1[0-2])"
              required
            />
            <input
              type="text"
              id="expYear"
              name="expYear"
              placeholder="YY"
              pattern="[0-9]{2}"
              required
            />
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
              pattern="[0-9]{3}"
              required
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
