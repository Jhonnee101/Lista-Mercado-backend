import knexInstace from "../config/database";
import { ProductModel } from "../models/product";

export async function registerProduct(productName: string): Promise<void> {
  await knexInstace('products').insert({ productName });
}

export function listProducts(): Promise<ProductModel[]> {
  return knexInstace.select().from<ProductModel>('products');
}

export async function deleteProduct(productId: number): Promise<number> {
  return await knexInstace('products').where('id', productId).del();
}

export async function deleteAllProducts(): Promise<void> {
  await knexInstace('products').del();
}
