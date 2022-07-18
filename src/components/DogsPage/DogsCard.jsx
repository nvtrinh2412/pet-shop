import React, { useState } from "react";
import "./dogs.css";
export const DogsCard = (props) => {
  const { id, name, breed, description, price, imageUrl } = props;
  const [isAdded, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(true);
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
          <img src={imageUrl} alt="Dog image" className="dog-img" />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}</div>
        {isAdded ? (
          <button disable className="dogs-btn-disabled">ADDED</button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            Add to card
          </button>
        )}
      </section>
    </>
  );
};
