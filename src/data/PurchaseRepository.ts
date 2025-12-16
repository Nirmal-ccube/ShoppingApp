import { ProductModel } from "./ProductModel";
import { InvoiceModel } from "./InvoiceModel";
import { ProductRepository } from "./ProductRepository";
import { InvoiceTableModel } from "./InvoiceTableModel";
import { UserRepository } from "./UserRepository";

export class PurchaseRepository {

    static getInvoices(): InvoiceModel[] {
        return InvoiceModel.getDummyInvoices()
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

        return userPurchases.map((item) => {

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
    }
}


