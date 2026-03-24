/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from "@/app/core/result";
import { Product } from "@/app/entities";
import { ProductsService } from "@/data/services";
import { ProductsRepository } from "./products.repository";

vi.mock('../services/ProductsService');

describe('ProductsRepository', () => {
  let repository: ReturnType<typeof ProductsRepository>;

  beforeEach(() => {
    repository = ProductsRepository();
    vi.clearAllMocks();
  });

  const mockProductsData = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
  ];

  const mockServiceResultSuccess = Result.success({
    data: mockProductsData,
    total: 2,
    page: 1,
    limit: 10,
  });

  const mockServiceResultFailure = Result.failure(new Error('Failed'));

  it('getProducts returns transformed products when service is ok', async () => {
    (ProductsService.getProducts as any).mockResolvedValue(mockServiceResultSuccess);

    // Mock Product.fromJson().toPlain()
    const spyFromJson = vi.spyOn(Product, 'fromJson').mockImplementation((data: any) => ({
      toPlain: () => data,
    } as any));

    const result = await repository.getProducts({ page: 1, limit: 10 });

    expect(ProductsService.getProducts).toHaveBeenCalledWith({ page: 1, limit: 10 });
    expect(result.isOk).toBe(true);
    expect(result.getData().data).toEqual(mockProductsData);

    spyFromJson.mockRestore();
  });

  it('getProducts returns failure when service fails', async () => {
    (ProductsService.getProducts as any).mockResolvedValue(mockServiceResultFailure);

    const result = await repository.getProducts({ page: 1, limit: 10 });

    expect(result).toBe(mockServiceResultFailure);
  });

  it('searchProducts returns transformed products when service is ok', async () => {
    (ProductsService.searchProducts as any).mockResolvedValue(mockServiceResultSuccess);

    const spyFromJson = vi.spyOn(Product, 'fromJson').mockImplementation((data: any) => ({
      toPlain: () => data,
    } as any));

    const result = await repository.searchProducts({ page: 1, limit: 10, search: 'test' });

    expect(ProductsService.searchProducts).toHaveBeenCalledWith({ page: 1, limit: 10, search: 'test' });
    expect(result.isOk).toBe(true);
    expect(result.getData().data).toEqual(mockProductsData);

    spyFromJson.mockRestore();
  });

  it('searchProducts returns failure when service fails', async () => {
    (ProductsService.searchProducts as any).mockResolvedValue(mockServiceResultFailure);

    const result = await repository.searchProducts({ page: 1, limit: 10, search: 'test' });

    expect(result).toBe(mockServiceResultFailure);
  });
});