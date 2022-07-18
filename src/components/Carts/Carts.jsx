import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import "./cart.css"
export const Carts = () => {
  const {myCart,total, addToCart,setTotal} = useContext(CartContext)
  const navigate = useNavigate()
  const handleCheckout = () =>{
    setTotal(0)
    addToCart([{}])
  }
  const handleHome =()=>{
    navigate("/")
  }
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
      <button className='cart-checkout' onClick={handleCheckout}>Done</button>
      <button className='cart-gohome' onClick={handleHome}>BACK TO HOMEPAGE</button>
    </section>
    </>
  )
}
