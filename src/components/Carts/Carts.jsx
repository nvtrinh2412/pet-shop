import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import "./cart.css"
export const Carts = () => {
  const {myCart,total} = useContext(CartContext)
  return (
    <>
    <section className="cart-container">
      <div className="card-header">Checkout:</div>
      <div className="cart-items">
        {myCart.slice(1).map((dog)=>{
          return(
            <div className="cart-item">
              <img src={dog.imageUrl} alt="" className='cart-item-img'/>
              {dog.name} : {dog.price}$
            </div>
          )
        })}
        <div className="cart-total">Total: {total} $</div>
      </div>
    </section>
    </>
  )
}
