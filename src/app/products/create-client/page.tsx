'use client'

import { createProduct } from "@/actions/products"
import { ChangeEvent, FormEvent, useState } from "react"

export default function AddProduct() {
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
    description: ''
  })

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const formData = new FormData()

    // type FormKey = keyof typeof form
    // for (const element in form) {
    //   formData.set(element, form[element as FormKey])
    // }

    // createProduct(formData)
    // TODO: call API
    try {
      const res = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()
      console.log(data)
      if (!res.ok) throw new Error(data.message)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} className="gap-4 flex flex-col ">
        <h1 className="text-2xl font-bold text-center mt-4">Add Product Client</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" name="title" className="grow" onChange={handleChange} value={form.title} placeholder="Title" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" name="price" className="grow" onChange={handleChange} value={form.price} placeholder="Price" />
        </label>
        <label className=" flex items-center gap-2">
          <textarea className="textarea textarea-bordered" onChange={handleChange} value={form.description} name='description' placeholder="Description" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input name='image' placeholder="Image URL" onChange={handleChange} value={form.image} />
        </label>

        <button className="btn">Button</button>
      </form>
    </div>
  )
}
