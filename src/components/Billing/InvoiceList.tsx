import { InvoiceModel } from "../../data/InvoiceModel";
import { UserPurchaseRepository } from "../../data/UserPurchaseRepository";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceList() {

    const invoiceList: InvoiceModel[] = UserPurchaseRepository.getInvoices();

    const thStyle = "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"

    return (
        <div className="p-6 w-4xl mx-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Invoices</h2>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className={thStyle}>Invoice ID</th>
                                <th className={thStyle}>Product Name</th>
                                <th className={thStyle}>User Email</th>
                                <th className={thStyle}>Invoice Amount</th>
                                <th className={thStyle}>Purchase Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {invoiceList.map((invoice) => (
                                <InvoiceItem invoice={invoice} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    
}