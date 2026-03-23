import type { TProduct } from '../../types/product.type';

export class Product {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly stock: number,
  ) {}

  static fromJson(data: TProduct) {
    return new Product(
      data.id || '',
      data.name || '',
      data.description || '',
      data.price || 0,
      data.stock || 0,
    );
  }
}