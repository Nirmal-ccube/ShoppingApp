export class InvoiceModel {
    invoiceId: string;
    purchaseTimestamp: number;
    productId: string;
    name: string;
    invoiceAmount: number;
    currency: string;
    userId: string;
    email: string;


  constructor(invoiceId: string, purchaseTimestamp: number, productId: string, name: string, invoiceAmount: number, currency: string, userId: string, email: string) {
    this.invoiceId = invoiceId;
    this.purchaseTimestamp = purchaseTimestamp;
    this.productId = productId;
    this.name = name;
    this.invoiceAmount = invoiceAmount;
    this.currency = currency;
    this.userId = userId;
    this.email = email;
  }
}
