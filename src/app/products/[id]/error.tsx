'use client'
// /products/:id
// folder: /src/app/products/[id]
// path: /src/app/products/[id]/error.(tsx|jsx|js)


type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

function ErrorPage({
  error,
  reset,
}: Props) {
  console.log(error.message)
  return (
    <h1>Error: {error.message}</h1>
  )
}

export default ErrorPage
