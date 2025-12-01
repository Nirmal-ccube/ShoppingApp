import { InvoiceModel } from "../../data/InvoiceModel";
import { UserPurchaseRepository } from "../../data/UserPurchaseRepository";
import InvoiceItem from "./InvoiceItem";
import InvoicePagination from "./InvoicePagination";
import { useState } from "react";

export default function InvoiceList() {

    const invoiceList: InvoiceModel[] = UserPurchaseRepository.getInvoices();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Show 10 items per page

    // Calculate pagination
    const totalPages = Math.ceil(invoiceList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentInvoices = invoiceList.slice(startIndex, endIndex);

    function goToPage (page: number) {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const thStyle = "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"

    return (
        <div className="p-6 w-4xl mx-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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
                            {currentInvoices.map((invoice) => (
                                <InvoiceItem invoice={invoice} />
                            ))}
                        </tbody>
                    </table>
                </div>

                <InvoicePagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />

            </div>
        </div>
    );
    
}