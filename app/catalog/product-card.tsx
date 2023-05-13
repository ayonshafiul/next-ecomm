"use client"

import Image from "next/image"
import { Product } from "@/context/CartContext"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardContent>
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
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-1 gap-2 m-2 w-full">
          <Button variant={"ghost"}>View</Button>
          <Button>Add to cart</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
