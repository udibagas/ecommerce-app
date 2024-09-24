import { database } from "@/db/config";
import { ProductType } from "@/types/ProductType";
import { ObjectId } from "mongodb";

export class ProductModel {
  static collection() {
    return database.collection<ProductType>("products");
  }

  static findAll() {
    return this.collection().find().toArray();
  }

  static findById(_id: string | ObjectId) {
    if (typeof _id == "string") _id = new ObjectId(_id);
    return this.collection().findOne({ _id });
  }

  static async create(payload: ProductType) {
    const res = await this.collection().insertOne(payload);
    return this.findById(res.insertedId);
  }
}
