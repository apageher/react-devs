/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from '../reducers/cart.js'

// 1. Crear contexto
export const CartContext = createContext()

// // A. Crear el estado inicial, puede ser un tipo basico, objeto, array
// const cartInitialState = []

// // B. Definir el reducer. Se le pasa el state y la acción. Transforma el state en función del action
// const reducer = (state, action) => {
//     //En type se le pasa la acción a realizar
//     //Payload lo que se necesita para actualizar el estado (si es que se necesita)
//     const {type: actionType, payload: actionPayload} = action
//     switch (actionType) {
//         case 'ADD_TO_CARD': {
//             const productInCartIndex = state.findIndex(item => item.id === actionPayload.id)
//             if (productInCartIndex >= 0) {
//                 const newState = structuredClone(state)
//                 newState[productInCartIndex].quantity += 1
//                 return newState
//             }
//             //Se devuelve un nuevo estado, no se hace el setState
//             return [
//                 ...state,
//                 {
//                     ...actionPayload,
//                     quantity: 1
//                 }
//             ]
//         }
//         case 'REMOVE_FROM_CART': {
//             return state.filter(item => item.id !== actionPayload.id)
//         }
//         case 'CLEAR_CART': {
//             return cartInitialState
//         }
//     }

//     return state
// }


//Hock para user el reducer
function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart }
}



// 2. Crear provider
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    //Usando un reducer antes de separlo en un fichero independiente
    // // C. Utilizar el useReducer
    // // 1º Param, nuestra funcion reducer definida
    // // 2º Param, el estado inicial
    // // X: El estado devuelto
    // // Y: Funcion dispatch que se encarga de enviar las acciones al reducer
    // const [state, dispatch] = useReducer(reducer, cartInitialState)

    // const addToCart = product => dispatch({
    //     type: 'ADD_TO_CART',
    //     payload: product
    // })

    // const removeFromCart = product => dispatch({
    //     type: 'REMOVE_FROM_CART',
    //     payload: product
    // })

    // const clearCart = () => dispatch({ type: 'CLEAR_CART' }) //En este no hace falta pasarle el payload



    //Sin usar Reducer
    // const [cart, setCart] = useState([])

    // const addToCart = (product) => {
    //     const productInCartIndex = cart.findIndex(item => item.id === product.id)
    //     if (productInCartIndex >= 0) {
    //         const newCart = structuredClone(cart) //copia en profundidad de un objeto ya que el state no se puede cambiar
    //         newCart[productInCartIndex].quantity += 1
    //         return setCart(newCart)
    //     }
    //     setCart(prevState => ([
    //         ...prevState,
    //         {
    //             ...product,
    //             quantity: 1
    //         }
    //     ]))
    // }

    // const clearCart = () => {
    //     setCart([])
    // }

    // const removeFromCart = (product) => {
    //     setCart(prevState => prevState.filter(item => item.id !== product.id))
    // }




    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>)

}