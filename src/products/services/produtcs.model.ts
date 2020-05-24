import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  index: Number,
  name: String,
  tags: [String],
});

export interface Products {
  index: number;
  name: string;
  tags: Array<String>;
}

export interface ProductsModel extends Products, mongoose.Document {}

export function createSelectNameQuery(name: string) {
  return { $regex: name, $options: 'i' };
}

export function createSelectTagsQuery(tag: string) {
  return { $in: [tag] };
}
