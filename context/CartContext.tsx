"use client"

import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

export type CartItems = {
  cartItems: Product[]
  setCartItems: (products: Product[]) => void
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
}

export type Product = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

export const CartContext = createContext<CartItems>({
  cartItems: [],
  setCartItems: (products: Product[]) => {},
  addToCart: (product: Product) => {},
  removeFromCart: (id: string) => {},
})
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      return [...prev, product]
    })
    console.log(cartItems)
  }

  const removeFromCart = (id: string) => {}
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
