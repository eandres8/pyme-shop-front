export type TProduct = {
  readonly id: string,
  readonly title: string,
  readonly description: string,
  readonly price: number,
  readonly stock: number,
};

export type TProductPaginate = {
  readonly data: TProduct[];
  readonly total: number;
  readonly page: number;
  readonly limit: number;
  readonly totalPages: number;
}
