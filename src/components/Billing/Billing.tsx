import TrendingProducts from "./TrendingProducts";
import InvoiceList from "./InvoiceList";

export default function Billing() {
    return (
        <div className="flex flex-col items-center space-y-1 mt-4 ">

            <h2 className="text-3xl font-bold text-gray-900">Billing</h2>

            <TrendingProducts />

            <InvoiceList />
        </div>
    )
}