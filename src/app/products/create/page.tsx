import { createProduct } from "@/actions/products"

export default function AddProduct() {
  return (
    <div className="mx-auto">
      <form action={createProduct} className="gap-4 flex flex-col ">
        <h1 className="text-2xl font-bold text-center mt-4">Add Product Server</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" name="title" className="grow" placeholder="Title" />
        </label>
        <label className="flex items-center gap-2 border rounded-lg">
          <textarea className="textarea" name='description' placeholder="Description" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input name='image' placeholder="Image URL" />
        </label>

        <button className="btn">Button</button>
      </form>
    </div>
  )
}
