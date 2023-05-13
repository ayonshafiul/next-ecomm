import { Product } from "@/context/CartContext"

import ProductCard from "@/app/catalog/product-card"

async function getData(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  )

  if (!res) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
]
export default async function HomePage() {
  const electronicsData = await getData(categories[0])
  const jeweleryData = await getData(categories[1])
  const mensClothingData = await getData(categories[2])
  const womensClothingData = await getData(categories[3])
  const allData = [
    electronicsData,
    jeweleryData,
    mensClothingData,
    womensClothingData,
  ]
  return (
    <>
      {allData.map((data, idx) => {
        return (
          <>
            <div className="text-2xl font-bold m-4">
              Top items in {categories[idx]}
            </div>
            <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-2">
              {data.map((product: Product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </>
        )
      })}
    </>
  )
}
