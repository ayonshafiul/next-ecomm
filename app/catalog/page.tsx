import { Product } from "@/context/CartContext"

import ProductCard from "./product-card"

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products")

  if (!res) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function CatalogPage() {
  const data = await getData()
  console.log(data)
  return (
    <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
      {data.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}
