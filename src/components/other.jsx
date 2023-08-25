import React from 'react';

const CreditCardForm = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <form className='card p-4 w-100 border-0'  style={{ maxWidth: '400px' }}>
        <div className='mb-3'>
          <label htmlFor='cardHolderName' className='form-label'>CARDHOLDER NAME</label>
          <input
            type='text'
            id='cardHolderName'
            name='cardHolderName'
            className='form-control'
            placeholder='e.g Jane Appleseed'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cardNumber' className='form-label'>CARD NUMBER</label>
          <input
            type='text'
            id='cardNumber'
            name='cardNumber'
            className='form-control'
            placeholder='e.g 1234 5678 9012 3456'
            pattern='[0-9 ]{13,19}'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='expDate' className='form-label'>Exp. Date (MM / YY)</label>
          <div className='d-flex'>
            <input
              type='text'
              id='expMonth'
              name='expMonth'
              className='form-control me-2'
              placeholder='MM'
              pattern='(0[1-9]|1[0-2])'
              required
            />
            <input
              type='text'
              id='expYear'
              name='expYear'
              className='form-control me-2'
              placeholder='YY'
              pattern='[0-9]{2}'
              required
            />
            <input
              type='text'
              id='cvv'
              name='cvv'
              className='form-control'
              placeholder='CVV'
              pattern='[0-9]{3}'
              required
            />
          </div>
        </div>
        <button type='submit' className='btn w-100 dark'>Comfirm</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
