import { createContext, useState, useContext, useEffect } from "react";
import ShoppingCart from "../Components/ShoppingCart"


const ShoppingCartContext = createContext({})

const initialCartItems = localStorage.getItem("ShoppingCart") ? JSON.parse(localStorage.getItem("ShoppingCart")) : []

const ShoppingCartProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState(initialCartItems)

    useEffect(() => {

        localStorage.setItem("ShoppingCart", JSON.stringify(cartItems))

    }, [cartItems])

    const openCart = () => {

        setIsOpen(true)
    }

    const closeCart = () => {

        setIsOpen(false)
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const getItemsQuantity = (id) => {

        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id) => {

        setCartItems((currentItem) => {

            if (currentItem.find(item => item.id === id) == null) {

                return [...currentItem, {id, quantity: 1}]

            } else {

                return currentItem.map((item) => {

                    if (item.id === id) {

                        return {...item, quantity: item.quantity + 1}

                    } else {

                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id) => {

        setCartItems((currentItem) => {

            if (currentItem.find(item => item.id === id) == null) {

                return currentItem.filter((item) => item.id !== id)

            } else {

                return currentItem.map((item) => {

                    if (item.id === id) {

                        return {...item, quantity: item.quantity - 1}

                    } else {

                        return item
                    }
                })
            }
        })
    }

    const removeItemCart = (id) => {

        setCartItems((currentItem) => currentItem.filter((item) => item.id !== id))
    }

    return (
        
        <ShoppingCartContext.Provider value={{cartItems, getItemsQuantity, increaseCartQuantity, 
            decreaseCartQuantity, removeItemCart, openCart, closeCart, cartQuantity}}>
            
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider

export const useShoppingCart = () => {

    return useContext(ShoppingCartContext)
}