export class InvoiceModel {
    invoiceId: string;
    userId: string;
    productId: string;
    invoiceAmount: number;
    purchaseTimestamp: number;

    constructor(invoiceId: string, userId: string, productId: string, invoiceAmount:number, purchaseTimestamp: number) {
        this.invoiceId = invoiceId;
        this.userId = userId;
        this.productId = productId;
        this.invoiceAmount = invoiceAmount;
        this.purchaseTimestamp = purchaseTimestamp;
    }
}
