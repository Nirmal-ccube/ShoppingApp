import { ProductModel } from "./ProductModel";
import { getFromStorage } from "../Utils/LocalStorageHelper";
import { STORAGE_KEYS } from "../constants/StorageKeys";

export class ProductRepository {

  static getAllCarouselProducts(): ProductModel[] {
    return this.getAllProducts().slice(0, 4);
  }

  static getAllProducts(): ProductModel[] {
    const products = getFromStorage<ProductModel[]>(STORAGE_KEYS.PRODUCTS);

    if (products && products.length > 0) {
      return products;
    }
    return [];
  }

  static getProductDetail(productId: string): ProductModel | undefined {
    return this.getAllProducts().find((item: ProductModel) => productId === item.productId)
  }

}
