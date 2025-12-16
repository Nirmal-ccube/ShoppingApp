import { UserModel } from "./UserModel";
import { UserTableModel } from "./UserTableModel";
import { ProductRepository } from "./ProductRepository";
import { PurchaseRepository } from "./PurchaseRepository";
import { InvoiceModel } from "./InvoiceModel";
import { getFromStorage } from "../Utils/LocalStorageHelper"
import { STORAGE_KEYS } from "../constants/StorageKeys";


export class UserRepository {

    static getAllUsers(): UserModel[] {
        const users = getFromStorage<UserModel[]>(STORAGE_KEYS.USERS);
        if (users && users.length > 0) {
            return users;
        }
        return [];  
    }

    static getUserDetail(userId: string): UserModel | undefined {
        return this.getAllUsers().find( (item: UserModel) => userId === item.userId)
    }

    static getUserTableData(): UserTableModel[] {
        const allUsers = UserRepository.getAllUsers()

        return allUsers.map((user) => {
            const allUserPurchases = PurchaseRepository.getInvoices().filter((invoice): invoice is InvoiceModel => invoice.userId === user.userId);

            const invoices = allUserPurchases.map((invoice) => {
                const productModel = ProductRepository.getProductDetail(invoice.productId)
                if (productModel === undefined) {
                    return null
                }
                return { invoiceId: invoice.invoiceId, productName: productModel.name };
            }).filter((invoice): invoice is {invoiceId: string, productName: string} => invoice !== null);

            return new UserTableModel(user.userId, user.name, user.email, invoices)
        })
    }
}