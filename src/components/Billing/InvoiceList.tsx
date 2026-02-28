import { useState } from "react";
import { PurchaseRepository } from "../../data/PurchaseRepository";
import { InvoiceTableModel } from "../../data/InvoiceTableModel";
import ItemList from "../Table/ItemList";
import TableItemHeader from "../Table/TableItemHeader";
import Pagination from "../Table/Pagination";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceList() {
    const invoiceList: InvoiceTableModel[] = PurchaseRepository.getInvoiceTableData();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Show 7 items per page

    // Calculate pagination
    const totalPages = Math.ceil(invoiceList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentInvoices = invoiceList.slice(startIndex, endIndex);

    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <ItemList
            title="Invoices"
            headers={
                <TableItemHeader columnNames={['Invoice ID', 'Product Name', 'User Email', 'Invoice Amount', 'Purchase Date']} />
            }
            children={
                currentInvoices.map((invoice) => (
                    <InvoiceItem key={invoice.invoiceId} invoice={invoice} />
                ))
            }
            pagination={
                <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />
            }
        >
        </ItemList>
    )
}