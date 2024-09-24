// /products/:id
// folder: /src/app/products/[id]
// path: /src/app/products/[id]/page.(tsx|jsx|js)

import Card from "@/components/Card"
import { Suspense } from "react"
import Todos from "@/components/Todos"
import { Metadata, ResolvingMetadata } from "next"
import { ProductType } from "@/types/ProductType"

type Props = {
  params: {
    id: string
  }
}

async function getProductById(id: string) {
  const response = await fetch("http://localhost:3000/api/products/" + id)

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json() as ProductType
  console.log(data, "<<< data")
  return data
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProductById(params.id)
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [
        product.image as string
      ]
    },

  }
}

async function ProductPage(props: Props) {
  const data = await getProductById(props.params.id)

  return (
    <>
      <Card product={data} />
      {/* <Suspense fallback={<p>Loading todos...</p>}>
        <Todos />
      </Suspense> */}
    </>
  )
}

export default ProductPage
