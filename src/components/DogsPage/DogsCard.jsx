import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./dogs.css";
export const DogsCard = (props) => {
  const { id, name, breed, description, price, imageUrl } = props;
  const {addToCart, setTotal} = useContext(CartContext)
  const [isAdded, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(true);
    const newCartDog = {
      name: name,
      id: id,
      imageUrl: imageUrl,
      price: price,
    }
    addToCart((items)=> [...items,newCartDog])
    setTotal((total)=> total += Number(price))
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
          <button disable="true" className="dogs-btn-disabled">ADDED</button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            Add to card
          </button>
        )}
      </section>
    </>
  );
};
