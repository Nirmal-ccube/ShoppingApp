export class UserTableModel {
    userId: string;
    name: string;
    email: string;
    invoices: { invoiceId: string; productName: string }[];

    constructor(
        userId: string, 
        name: string, 
        email: string, 
        invoices: { invoiceId: string; productName: string }[]
    ) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.invoices = invoices;
    }
}
