import { ProductModel } from "./ProductModel";
import { InvoiceModel } from "./InvoiceModel";
import { ProductRepository } from "./ProductRepository";
import { InvoiceTableModel } from "./InvoiceTableModel";
import { UserRepository } from "./UserRepository";
import { getFromStorage } from "../Utils/LocalStorageHelper"
import { STORAGE_KEYS } from "../constants/StorageKeys";

export class PurchaseRepository {

    static getInvoices(): InvoiceModel[] {
        const invoices = getFromStorage<InvoiceModel[]>(STORAGE_KEYS.INVOICES);
        if (invoices && invoices.length > 0) {
            return invoices;
        }
        return [];
    }

    static getTrendingPurchasedProducts(): {product: ProductModel; count: number}[] {
        const trending = this.getTopTrendingPurchasedProductIdsWithCount(); 
        const allProducts = ProductRepository.getAllProducts();

        return trending
        .map(tp => {
            const product = allProducts.find(ap => ap.productId === tp.productId);

            if (!product) return null; // skip missing productId

            return {
                product,
                count: tp.count
            };
        })
        .filter(x => x !== null) as { product: ProductModel; count: number }[];

    }

    static getTopTrendingPurchasedProductIdsWithCount(): { productId: string; count: number }[] {
        const purchases = this.getInvoices();

        const countMap: Record<string, number> = {};

        for (const purchase of purchases) {
            countMap[purchase.productId] = (countMap[purchase.productId] || 0) + 1;
        }

        const result = Object.entries(countMap).map(([productId, count]) => ({
            productId,
            count
        }));
         
        return result.sort((a, b) => b.count - a.count).slice(0, 4);
    }

    static getInvoiceTableData(): InvoiceTableModel[] {
        const userPurchases = this.getInvoices();

        let invoiceList = userPurchases.map((item) => {

            const userModel = UserRepository.getUserDetail(item.userId)
            if (userModel === undefined) {
                return null
            }

            const productModel = ProductRepository.getProductDetail(item.productId)
            if (productModel === undefined) {
                return null
            }

            return new InvoiceTableModel(item.invoiceId, item.purchaseTimestamp, productModel.productId, productModel.name, item.invoiceAmount, productModel.currency, userModel.userId, userModel.email)
        }).filter((invoice): invoice is InvoiceTableModel => invoice !== null);

        return invoiceList.sort((a, b) => b.purchaseTimestamp - a.purchaseTimestamp);
    }

    static getNextInvoiceId(): string {
        const invoiceList = this.getInvoices()
        if (invoiceList.length === 0) {
            return '1';
        }
        
        const maxId = Math.max(
            ...invoiceList.map(invoice => parseInt(invoice.invoiceId, 10))
        );
        
        return String(maxId + 1);
    }


    static createNewInvoice(name:string, email:string, productId:string, productAmount: number) {
        const invoiceId = this.getNextInvoiceId()

        const userId = UserRepository.getUserDetailsOrSaveAndGetUser(name, email).userId
        
        const invoiceModel = new InvoiceModel(invoiceId, userId, productId, productAmount, Date.now())

        const allInvoices = [ ...this.getInvoices(), invoiceModel]

        this.saveAllInvoices(allInvoices);
    }

    static saveAllInvoices(invoices: InvoiceModel[]) {
        localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
        console.log("saveAllInvoices: " + JSON.stringify(invoices))
    }
}


