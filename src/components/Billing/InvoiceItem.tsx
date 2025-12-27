import { InvoiceTableModel } from "../../data/InvoiceTableModel"
import DateUtil from "../../Utils/DateUtil";

type InvoiceItemProp = {
    invoice: InvoiceTableModel;
}

export default function InvoiceItem({invoice}: InvoiceItemProp) {
    return (
        <tr key={invoice.invoiceId} className="invoiceitem-row">

            <td className="invoiceitem-id">
                {invoice.invoiceId}
            </td>
            <td className="invoiceitem-name">
                {invoice.name}
            </td>
            <td className="invoiceitem-email">
                {invoice.email}
            </td>
            <td className="invoiceitem-amount">
                ${invoice.invoiceAmount.toFixed(2)}
            </td>
            <td className="invoiceitem-date">
                {DateUtil.getFormattedDate(invoice.purchaseTimestamp)}
            </td>
        </tr>
    ) 
}