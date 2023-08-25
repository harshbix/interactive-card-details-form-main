import React from "react";

const View = () => {
  return (
    <div
      className="box"
      style={{ backgroundImage: `url("/images/bg-main-desktop.png")` }}
    >
      <div className="image">
        <img
          src="/images/bg-card-front.png"
          alt="Card Front"
          className="card-front"
        />
        <img src="/images/card-logo.svg" alt="" className="circle" />
        <div className="details text-white">
          <h3>0000 0000 0000 0000</h3>
          <div className="nameAndDate row">
            <p className="fname col-10">Jane Appleseed</p>
            <p className="expDate col-2">09/23</p>
          </div>
        </div>
        <img
          src="/images/bg-card-back.png"
          alt="Card Front"
          className="card-back"
        />
      </div>
    </div>
  );
};

export default View;
