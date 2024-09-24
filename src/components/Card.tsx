import { ProductType } from "@/types/ProductType"
import Link from "next/link"

type Props = {
  product: ProductType
}

export default function Card(props: Props) {
  return (
    <div className="card bg-base-100 w-56 shadow-xl">
      <figure>
        <img
          src={props.product.image}
          alt="Shoes" className="h-48" />
      </figure>
      <div className="card-body">
        <div className="font-bold line-clamp-2">{props.product.title}</div>
        {/* <p className="truncate">{props.product.description}</p> */}
        <div className="card-actions justify-end">
          <Link href={'/products/' + props.product._id} className="btn btn-primary">Detail</Link>
        </div>
      </div>
    </div>
  )
}
