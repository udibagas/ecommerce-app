import { Product } from "@/app/products/page"
import Link from "next/link"

type Props = {
  product: Product
}

export default function Card(props: Props) {
  return (
    <div className="card bg-base-100 w-56 h-[600px] shadow-xl">
      <figure>
        <img
          src={props.product.image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.product.title}</h2>
        <p className="truncate">{props.product.description}</p>
        <div className="card-actions justify-end">
          <Link href={'/products/' + props.product.id} className="btn btn-primary">Detail</Link>
        </div>
      </div>
    </div>
  )
}
