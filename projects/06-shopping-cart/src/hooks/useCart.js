import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {

    const context = useContext(CartContext)

    //Validación para cuando se está usando el customHook pero no está envuelto en un provider
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
} 