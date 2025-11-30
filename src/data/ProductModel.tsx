export class ProductModel {
  productId: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;

  constructor(productId: string, name: string, price: number, currency: string, imageUrl: string) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.imageUrl = imageUrl;
  }
}