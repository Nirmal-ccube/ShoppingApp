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

    static getDummyInvoices(): InvoiceModel[] {
            return [
                new InvoiceModel('1', '1', '1', 799, 1761985622000),  // Nov 01, 2025 - OnePlus 15
                new InvoiceModel('2', '1', '5', 399, 1762060275000),  // Nov 02, 2025 - Xiaomi 15T Pro
                new InvoiceModel('3', '2', '3', 1199, 1762175912000), // Nov 03, 2025 - iPhone 17 Pro
                new InvoiceModel('4', '2', '8', 349, 1762273659000),  // Nov 04, 2025 - Moto G57 Power
                new InvoiceModel('5', '3', '2', 699, 1762352880000),  // Nov 05, 2025 - Google Pixel 10
                new InvoiceModel('6', '3', '7', 249, 1762418391000),  // Nov 06, 2025 - Vivo V60 Lite
                new InvoiceModel('7', '4', '4', 899, 1762525578000),  // Nov 07, 2025 - Galaxy S25
                new InvoiceModel('8', '5', '9', 349, 1762598627000),  // Nov 08, 2025 - Motorola Razr 60
                new InvoiceModel('9', '6', '6', 349, 1762689168000),  // Nov 09, 2025 - Oppo Find X9 Pro
                new InvoiceModel('10', '7', '1', 799, 1762768013000), // Nov 10, 2025 - OnePlus 15
                new InvoiceModel('11', '8', '10', 349, 1762835600000),// Nov 11, 2025 - Realme 15 Pro
                new InvoiceModel('12', '9', '3', 1199, 1762958762000),// Nov 12, 2025 - iPhone 17 Pro
                new InvoiceModel('13', '10', '5', 399, 1763034087000),// Nov 13, 2025 - Xiaomi 15T Pro
                new InvoiceModel('14', '11', '2', 699, 1763137999000),// Nov 14, 2025 - Google Pixel 10
                new InvoiceModel('15', '12', '7', 249, 1763220499000),// Nov 15, 2025 - Vivo V60 Lite
                new InvoiceModel('16', '13', '4', 899, 1763306652000),// Nov 16, 2025 - Galaxy S25
                new InvoiceModel('17', '14', '9', 349, 1763367199000),// Nov 17, 2025 - Motorola Razr 60
                new InvoiceModel('18', '15', '6', 349, 1763453591000),// Nov 18, 2025 - Oppo Find X9 Pro
                new InvoiceModel('19', '16', '8', 349, 1763526595000),// Nov 19, 2025 - Moto G57 Power
                new InvoiceModel('20', '17', '1', 799, 1763660309000),// Nov 20, 2025 - OnePlus 15
                new InvoiceModel('21', '18', '10', 349, 1763732845000),// Nov 21, 2025 - Realme 15 Pro
                new InvoiceModel('22', '19', '3', 1199, 1763787281000),// Nov 22, 2025 - iPhone 17 Pro
                new InvoiceModel('23', '20', '5', 399, 1763911653000),// Nov 23, 2025 - Xiaomi 15T Pro
                new InvoiceModel('24', '1', '7', 249, 1763965018000), // Nov 24, 2025 - Vivo V60 Lite
                new InvoiceModel('25', '2', '2', 699, 1764070791000), // Nov 25, 2025 - Google Pixel 10
                new InvoiceModel('26', '3', '9', 349, 1764130618000), // Nov 26, 2025 - Motorola Razr 60
                new InvoiceModel('27', '4', '6', 349, 1764267027000), // Nov 27, 2025 - Oppo Find X9 Pro
                new InvoiceModel('28', '5', '4', 899, 1764347776000), // Nov 28, 2025 - Galaxy S25
                new InvoiceModel('29', '6', '10', 349, 1764433029000),// Nov 29, 2025 - Realme 15 Pro
                new InvoiceModel('30', '7', '8', 349, 1764514256000)  // Nov 30, 2025 - Moto G57 Power
            ];
        }
}
