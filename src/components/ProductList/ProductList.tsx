import { ProductModel } from "../../data/ProductModel"
import { ProductRepository } from "../../data/ProductRepository"
import { PurchaseRepository } from "../../data/PurchaseRepository"
import Product from "./Product"

type ProductListProp = {
    isTrendingProduct: boolean
}

export default function ProductList( {isTrendingProduct = false}: ProductListProp ) {

    let  productList: ProductModel[] = []

    if (isTrendingProduct) {
        productList = PurchaseRepository.getTrendingPurchasedProducts().map ( (item) => item.product)
    } else {
        productList = ProductRepository.getAllProducts()
    }


    return (
        <div className="w-full overflow-x-auto"> {/* Scrollable wrapper */}
            <div className="flex w-max py-2 bg-white items-center justify-start gap-4"> {/* Inner flex container */}
                {productList.map((product) => (
                <Product
                    key={product.productId}
                    productModel={product}
                    isTrendingProduct={isTrendingProduct}
                    onBuyTap={() => {}}
                />
                ))}
            </div>
        </div>
    )
}