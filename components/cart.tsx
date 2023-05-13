"use client"

import Link from "next/link"
import { useCartContext } from "@/context/CartContext"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function Cart() {
  const { cartItems } = useCartContext()
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-row items-center justify-center gap-2">
          <Icons.cart className="h-5 w-5" />
          <div className="text-xs">
            {cartItems.length > 0 ? cartItems.length : ""}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ScrollArea className="h-72  border p-4">
          {cartItems.map((product) => {
            return (
              <div className="flex flex-row justify-between">
                <div>{product.title.slice(0, 10) + ".."}</div>
                <div className="font-bold">$ {product.price.toFixed(2)}</div>
              </div>
            )
          })}
        </ScrollArea>
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
            <Button className="w-full">Checkout</Button>
          </Link>
        )}
      </PopoverContent>
    </Popover>
  )
}
