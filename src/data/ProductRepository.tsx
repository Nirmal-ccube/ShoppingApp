import { ProductModel } from "../data/ProductModel";

export class ProductRepository {
  // Return a fixed list of products for carousel
  static getDummyProducts(): ProductModel[] {
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
      new ProductModel(
        "5",
        "Xiaomi 15T Pro",
        399,
        "USD",
        "https://www.91-img.com/pictures/171549-v2-xiaomi-15t-pro-mobile-phone-hres-7.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "6",
        "Oppo Find X9 Pro",
        349,
        "USD",
        "https://www.91-img.com/pictures/170930-v10-oppo-find-x9-pro-mobile-phone-hres-1.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "7",
        "Vivo V60 Lite",
        249,
        "USD",
        "https://www.91-img.com/pictures/171563-v4-vivo-v60-lite-mobile-phone-hres-4.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "8",
        "Moto G57 Power",
        349,
        "USD",
        "https://www.91-img.com/pictures/173137-v5-moto-g57-power-mobile-phone-hres-6.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "9",
        "Motorola Razr 60",
        349,
        "USD",
        "https://www.91-img.com/pictures/168805-v6-motorola-razr-60-mobile-phone-hres-1.jpg?tr=h-400,q-70"
      ),
      new ProductModel(
        "10",
        "Realme 15 Pro",
        349,
        "USD",
        "https://www.91-img.com/pictures/170251-v4-realme-15-pro-mobile-phone-hres-1.jpg?tr=h-400,q-70"
      ),
    ];

    return products;
  }

  static getAllCarouselProducts(): ProductModel[] {
    return this.getDummyProducts().slice(0, 4);
  }

  static getAllProducts(): ProductModel[] {
    return this.getDummyProducts();
  }


}
