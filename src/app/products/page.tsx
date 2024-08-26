
// /products
// folder: /src/app/products
// path: /src/app/products/page.(tsx|jsx|js)

import Card from "@/components/Card"

export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

async function getProducts() {
  const response = await fetch("http://localhost:3001/products")
  const data = await response.json() as Product[]
  console.log(data, "<<< data")
  return data
}

async function Products() {
  const data = await getProducts()

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-semibold mb-4">Products</h1>
      <div className="flex gap-5 flex-wrap">
        {
          data.map(product => {
            return (
              <Card product={product} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products
