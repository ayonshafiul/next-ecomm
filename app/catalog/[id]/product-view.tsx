"use client"

import Image from "next/image"
import { Product, useCartContext } from "@/context/CartContext"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductView({ product }: { product: Product }) {
  const { addToCart } = useCartContext()
  return (
    <Card>
      <CardContent className="flex flex-row w-full  h-full justify-between gap-10 py-4">
        <div className="flex justify-center items-center w-full">
          <Image
            src={product.image}
            alt={product.title}
            width={420}
            height={0}
          />
        </div>
        <div className="max-w-[400px] self-center">
          <div className="font-bold m-2">{product.title}</div>
          <div className="italic m-2 ">{product.description}</div>
          <div className="italic font-bold m-2 ">
            Category: {product.category}
          </div>
          <div className="font-bold m-2 ">$ {product.price}</div>
          <Button className="w-full" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
