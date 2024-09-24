
// /products
// folder: /src/app/products
// path: /src/app/products/page.(tsx|jsx|js)

import Card from "@/components/Card"
import { ProductModel } from "@/models/ProductModel"
import { ProductType } from "@/types/ProductType"

async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products")
    const data = await response.json() as ProductType[]

    // console.log(data, "<<< data")
    return data
  } catch (error) {
    throw new Error("Failed to get data products")
  }
}

async function Products() {
  const data = await getProducts()
  console.log("get data success")

  // throw new Error("Error di component langsung")

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-semibold mb-4">Products</h1>
      <div className="flex gap-5 flex-wrap">
        {
          data.map((product, i) => {
            return (
              <Card key={i} product={product} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products
