const other = () => {
  return (
    <div className="box">
    <form action="#" className="form">
      <div className="details">
        <label htmlFor="cardHolderName">Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g Jane Appleseed"
          name="cardHolderName"
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="number"
          placeholder="e.g Jane Appleseed"
          name="cardNumber"
        />
      </div>
      <div className="inline">
        <label htmlFor="date">Exp. Date (MM / YY)</label>
        <input type="date" />
        <input type="date" />
        <input type="number" />
      </div>
    </form>
    </div>
  );
};

export default other;
