'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Server Action
export async function createProduct(formData: FormData) {
  const body = {
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
  }

  if (!body.title) {
    redirect('/products/create?error=Title is required')
  }
  if (!body.description) {
    redirect('/products/create?error=Description is required')
  }
  if (!body.image) {
    redirect('/products/create?error=Image is required')
  }

  await fetch('http://localhost:3001/products', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    }
  })

  revalidatePath('/products')

  redirect('/products')
}
