import { Product } from "@/context/CartContext"

import ProductView from "./product-view"

async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  if (!res) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function CatalogPage({ params }: any) {
  const data = await getData(params.id)
  console.log(data)
  return (
    <div className="flex justify-center items-center min-h-[720px]">
      <ProductView product={data} />
    </div>
  )
}
