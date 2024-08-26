// /products/:id
// folder: /src/app/products/[id]
// path: /src/app/products/[id]/loading.(tsx|jsx|js)


type Props = {
  params: {
    id: string
  }
}

async function LoadingPage(props: Props) {
  return (
    <h1>Loading...</h1>
  )
}

export default LoadingPage
