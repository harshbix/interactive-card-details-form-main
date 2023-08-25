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
        <input type="date" placeholder="MM" />
        <input type="date" placeholder="YY"/>
        <input type="number" placeholder="e.g 123"/>
      </div>
    </form>
    </div>
  );
};

export default other;
