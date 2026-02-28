import { useState, useEffect } from "react";
import { ProductModel } from "../../data/ProductModel";
import { ProductRepository } from "../../data/ProductRepository";
import { PurchaseRepository } from "../../data/PurchaseRepository";
import Product from "./Product";

type ProductListProp = {
    isTrendingProduct: boolean,
    onBuyTap?: (productModel: ProductModel) => void
}

export default function ProductList({ isTrendingProduct = false, onBuyTap }: ProductListProp) {
    const [productList, setProductList] = useState<ProductModel[]>([]);

    useEffect(() => {
        if (isTrendingProduct) {
            setProductList(PurchaseRepository.getTrendingPurchasedProducts().map((item) => item.product));
        } else {
            setProductList(ProductRepository.getAllProducts());
        }
    }, [isTrendingProduct]);


    return (
        <div className="productlist-wrapper scrollbar-hide"> {/* Scrollable wrapper */}
            <div className="productlist-container"> {/* Inner flex container */}
                {productList.map((product) => (
                    <Product
                        key={product.productId}
                        productModel={product}
                        isTrendingProduct={isTrendingProduct}
                        onBuyTap={onBuyTap ? () => onBuyTap(product) : undefined}
                    />
                ))}
            </div>
        </div>
    )
}