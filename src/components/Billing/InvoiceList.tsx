import { UserPurchaseRepository } from "../../data/UserPurchaseRepository";
import { InvoiceModel } from "../../data/InvoiceModel";
import { useState } from "react";
import ItemList from "../Table/ItemList";
import ItemHeader from "../Table/ItemHeader";
import Pagination from "../Table/Pagination";
import InvoiceItem from "./InvoiceItem";

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

        return (
            <ItemList 
                title="Invoices"
                headers={
                    <ItemHeader columnNames={['Invoice ID', 'Product Name', 'User Email', 'Invoice Amount', 'Purchase Date']}/>
                }
                children={
                    currentInvoices.map((invoice) => (
                        <InvoiceItem invoice={invoice} />
                    ))
                }
                pagination={
                    <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} /> 
                }
            >
            </ItemList>
        )
}