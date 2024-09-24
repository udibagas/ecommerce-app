import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(5, "Minimum product title is 5 characters"),
  description: z.string().max(300, "Max product description is 300 characters"),
  price: z.number().min(10_000, "Minimum price is 10k"),
  image: z.string().url("Invalid URL format"),
});
