"use client"

import Link from "next/link"
import { useCartContext } from "@/context/CartContext"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CheckoutItems() {
  const { cartItems } = useCartContext()
  return (
    <div className="w-1/2 mx-auto my-10">
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>
            Checkout Items and Proceed to Payment
          </CardDescription>
        </CardHeader>
        <CardContent>
          {cartItems.map((product) => {
            return (
              <div className="flex flex-row justify-between">
                <div>{product.title}</div>
                <div className="font-bold">$ {product.price.toFixed(2)}</div>
              </div>
            )
          })}
          <Separator className="my-4" />
          <div className="flex flex-row justify-between m-2">
            <div>Total: </div>
            <div className="font-bold">
              $
              {cartItems
                .reduce((a, b) => {
                  return a + b.price
                }, 0)
                .toFixed(2)}
            </div>
          </div>
          {cartItems.length > 0 && (
            <Link href="/checkout" className="w-full">
              <Button className="w-full">Proceed To Payment</Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
