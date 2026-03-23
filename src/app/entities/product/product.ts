import type { TProduct } from '../../types/product.type';

export class Product {
  private constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly stock: number,
  ) {}

  static fromJson(data: TProduct) {
    return new Product(
      data.id || '',
      data.title || '',
      data.description || '',
      Number(data.price) || 0,
      Number(data.stock) || 0,
    );
  }

  toPlain() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      price: this.price,
      stock: this.stock,
    }
  }
}