import { useCart } from '../hooks/useCart'
import './Footer.css'

export const Footer = () => {

    // const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {/* {
                JSON.stringify(cart, null, 2)
            } */}
            {/* <h4>Prueba técnica de React ⚛️</h4>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}