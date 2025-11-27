import { ProductModel } from "../data/ProductModel";

export class ProductRepository {
  // Return a fixed list of products for carousel
  static getCarouselProducts(): ProductModel[] {
    const products: ProductModel[] = [
      new ProductModel(
        "1",
        "OnePlus 15",
        799,
        "USD",
        "https://www.91-img.com/pictures/171148-v3-oneplus-15-mobile-phone-hres-1.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "2",
        "Google Pixel 10",
        699,
        "USD",
        "https://www.91-img.com/pictures/165778-v3-google-pixel-10-mobile-phone-hres-1.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "3",
        "iPhone 17 Pro",
        1199,
        "USD",
        "https://www.91-img.com/pictures/170279-v7-apple-iphone-17-pro-mobile-phone-hres-1.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "4",
        "Galaxy S25",
        899,
        "USD",
        "https://www.91-img.com/pictures/152738-v6-samsung-galaxy-s25-mobile-phone-hres-5.jpg?tr=h-400,q-70"
      ),
    ];

    return products;
  }
  
  static getAllCarouselProducts(): ProductModel[] {
    return this.getCarouselProducts();
  }

  static getAllProducts(): ProductModel[] {
    return this.getCarouselProducts();
  }
}
