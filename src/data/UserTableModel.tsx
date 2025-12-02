export class UserTableModel {
    userId: string;
    name: string;
    email: string;
    invoiceId: string;
    productName: string;

  constructor(userId: string, name: string, email: string, invoiceId: string, productName: string) {
    this.userId = userId;
    this.email = email;
    this.name = name;
    this.invoiceId = invoiceId;
    this.productName = productName;
  }
}
