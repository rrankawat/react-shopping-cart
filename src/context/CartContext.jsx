import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
