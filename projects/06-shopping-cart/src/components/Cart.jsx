/* eslint-disable react/prop-types */

import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'


export const CardItem = ({ thumbnail, title, price, quantity, addToCart }) => {

    return (
        <li>
            <img src={thumbnail} alt={title}></img>
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>

    )
}

export const Cart = () => {

    const cartCheckBoxId = useId()
    const { cart, addToCart, clearCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId}>
                <CartIcon></CartIcon>
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden></input>
            <aside className='cart'>
                <ul>
                    {cart.map(product => {
                        return (
                            <CardItem
                                key={product.id}
                                {...product}
                                addToCart={() => addToCart(product)}
                            />)
                    })
                    }
                </ul>
                <button onClick={() => clearCart()}>
                    <ClearCartIcon></ClearCartIcon>
                </button>
            </aside>
        </>
    )
}