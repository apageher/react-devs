/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export const Products = ({ products }) => {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title}></img>
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button
                                    style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                                    onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                    {isProductInCart
                                        ? <RemoveFromCartIcon></RemoveFromCartIcon>
                                        : <AddToCartIcon></AddToCartIcon>
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )

}