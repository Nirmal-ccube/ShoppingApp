import ProductList from "../ProductList/ProductList";

export default function TrendingProducts() {
    return (

        <div className="p-6 w-4xl max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Trending Products</h2>
                </div>
                <div className="px-6">
                    <ProductList isTrendingProduct={true}/>
                </div>
            </div>
        </div>
        
        
    )
}