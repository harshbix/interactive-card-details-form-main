import React from 'react';

const View = () => {
  return (
    <div className="box" style={{ backgroundImage: `url("/images/bg-main-desktop.png")` }}>
      <div className="image">
        <img src="/images/bg-card-front.png" alt="Card Front" className='card-front'/>
        <img src="/images/bg-card-back.png" alt="Card Front" className='card-back'/>
      </div>
    </div>
  );
};

export default View;
