import { ProductModel } from "./ProductModel";

export class ProductRepository {
  
  static getAllCarouselProducts(): ProductModel[] {
    return ProductModel.getDummyProducts().slice(0, 4);
  }

  static getAllProducts(): ProductModel[] {
    return ProductModel.getDummyProducts();
  }

  static getProductDetail(productId: string): ProductModel | undefined {
    return this.getAllProducts().find( (item: ProductModel) => productId === item.productId)
  }

}
