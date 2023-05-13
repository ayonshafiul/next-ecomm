"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/context/CartContext"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardContent className="flex flex-col  h-full justify-between py-4">
        <div className="flex justify-center items-center w-full">
          <Image
            src={product.image}
            alt={product.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 m-2 w-full">
          <div className="font-bold">{product.title}</div>
          <div className="font-bold text-center">$ {product.price}</div>
          <Link href={`/catalog/${product.id}`} className="w-full">
            <Button variant={"ghost"} className="w-full">
              View
            </Button>
          </Link>
          <Button>Add to cart</Button>
        </div>
      </CardContent>
    </Card>
  )
}
