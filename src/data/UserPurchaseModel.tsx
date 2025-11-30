export class UserPurchaseModel {
    invoiceId: string;
    userId: string;
    productId: string;
    purchaseTimestamp: number;

    constructor(invoiceId: string, userId: string, productId: string, purchaseTimestamp: number) {
        this.invoiceId = invoiceId;
        this.userId = userId;
        this.productId = productId;
        this.purchaseTimestamp = purchaseTimestamp;
    }
}
