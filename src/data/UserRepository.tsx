import { UserModel } from "./UserModel";
import { UserTableModel } from "./UserTableModel";
import { ProductRepository } from "./ProductRepository";
import { PurchaseRepository } from "./PurchaseRepository";


export class UserRepository {

    static getAllUsers(): UserModel[] {
        return this.getDummyUsers()
    }

    static getDummyUsers(): UserModel[] {
        return [
            new UserModel('1', 'nirmal@gmail.com', 'Nirmal Patidar'),
            new UserModel('2', 'priya@gmail.com', 'Priya Sharma'),
            new UserModel('3', 'rahul@gmail.com', 'Rahul Kumar'),
            new UserModel('4', 'anita@gmail.com', 'Anita Desai'),
            new UserModel('5', 'vikas@gmail.com', 'Vikas Singh'),
            new UserModel('6', 'sneha@gmail.com', 'Sneha Gupta'),
            new UserModel('7', 'amit@gmail.com', 'Amit Patel'),
            new UserModel('8', 'divya@gmail.com', 'Divya Reddy'),
            new UserModel('9', 'rohit@gmail.com', 'Rohit Joshi'),
            new UserModel('10', 'meera@gmail.com', 'Meera Nair'),
            new UserModel('11', 'karan@gmail.com', 'Karan Malhotra'),
            new UserModel('12', 'pooja@gmail.com', 'Pooja Iyer'),
            new UserModel('13', 'suresh@gmail.com', 'Suresh Babu'),
            new UserModel('14', 'lakshmi@gmail.com', 'Lakshmi Menon'),
            new UserModel('15', 'arjun@gmail.com', 'Arjun Mehra'),
            new UserModel('16', 'riddhi@gmail.com', 'Riddhi Shah'),
            new UserModel('17', 'deepak@gmail.com', 'Deepak Verma'),
            new UserModel('18', 'sonali@gmail.com', 'Sonali Bose'),
            new UserModel('19', 'manish@gmail.com', 'Manish Tiwari'),
            new UserModel('20', 'neha@gmail.com', 'Neha Kapoor')
        ]
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