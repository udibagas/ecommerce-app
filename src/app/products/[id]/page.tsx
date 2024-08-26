// /products/:id
// folder: /src/app/products/[id]
// path: /src/app/products/[id]/page.(tsx|jsx|js)

import Card from "@/components/Card"
import { Product } from "../page"
import { Suspense } from "react"
import Todos from "@/components/Todos"

type Props = {
  params: {
    id: string
  }
}

async function getProductById(id: string) {
  const response = await fetch("http://localhost:3001/products/" + id)

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json() as Product
  console.log(data, "<<< data")
  return data
}

async function ProductPage(props: Props) {
  const data = await getProductById(props.params.id)

  return (
    <>
      <Card product={data} />
      <Suspense fallback={<p>Loading todos...</p>}>
        <Todos />
      </Suspense>
    </>
  )
}

export default ProductPage
