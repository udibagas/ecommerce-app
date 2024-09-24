import { productSchema } from "./schema";
import { ValidationError } from "@/errors/ValidationError";
import { ProductModel } from "@/models/ProductModel";

export async function GET(request: Request) {
  try {
    const products = await ProductModel.findAll();
    return Response.json(products);
  } catch (error: any) {
    return Response.json(
      { message: error.message },
      { status: error.status || 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const validationResult = productSchema.safeParse(body);

    if (validationResult.error) {
      const errors = validationResult.error.issues.map((i) => i.message);
      throw new ValidationError("Please check your input", errors);
    }

    const newProduct = await ProductModel.create(body);
    return Response.json(newProduct, {
      status: 201,
    });
  } catch (error: any) {
    return Response.json(error, { status: error.status || 500 });
  }
}
