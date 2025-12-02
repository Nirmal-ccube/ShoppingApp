import { InvoiceTableModel } from "../../data/InvoiceTableModel"
import DateUtil from "../../Utils/DateUtil";

type InvoiceItemProp = {
    invoice: InvoiceTableModel;
}

export default function InvoiceItem({invoice}: InvoiceItemProp) {

    const defaultCSS = "px-6 py-4 whitespace-nowrap text-sm";

    return (
        <tr key={invoice.invoiceId} className="hover:bg-gray-50 transition-colors">

            <td className={`${defaultCSS} font-medium text-gray-900`}>
                {invoice.invoiceId}
            </td>
            <td className={`${defaultCSS}  text-gray-900`}>
                {invoice.name}
            </td>
            <td className={`${defaultCSS}  text-gray-500`}>
                {invoice.email}
            </td>
            <td className={`${defaultCSS} font-semibold text-green-600`}>
                ${invoice.invoiceAmount.toFixed(2)}
            </td>
            <td className={`${defaultCSS} text-gray-500`}>
                {DateUtil.getFormattedDate(invoice.purchaseTimestamp)}
            </td>
        </tr>
    ) 
}