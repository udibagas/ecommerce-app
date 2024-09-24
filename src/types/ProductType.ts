import { ObjectId } from "mongodb";

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductType {
  _id?: ObjectId;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating?: Rating;
}
