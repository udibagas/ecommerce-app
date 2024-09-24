import { NotfoundError } from "@/errors/NotfoundError";
import { ProductModel } from "@/models/ProductModel";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) throw new NotfoundError("Product not found");
    return Response.json(product);
  } catch (error: any) {
    return Response.json(
      { message: error.message },
      { status: error.status || 500 }
    );
  }
}
