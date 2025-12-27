import ProductList from "../ProductList/ProductList";

export default function TrendingProducts() {
    return (

        <div className="trendingproducts-root">
            <div className="trendingproducts-card">
                <div className="trendingproducts-header">
                    <h2 className="trendingproducts-title">Trending Products</h2>
                </div>
                <div className="trendingproducts-content">
                    <ProductList isTrendingProduct={true} />
                </div>
            </div>
        </div>
        
        
    )
}