"use client"

import React, { ReactNode, createContext, useContext, useState } from "react"

export type CartItems = {
  cartItems: Product[]
  setCartItems: (product: Product[]) => void
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
  setCartItems: (product: Product[]) => {},
})
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
