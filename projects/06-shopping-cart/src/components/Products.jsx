/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons'

export const Products = ({ products }) => {



    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title}></img>
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <AddToCartIcon></AddToCartIcon>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )

}