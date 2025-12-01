import { ProductModel } from "../../data/ProductModel"
import { ProductRepository } from "../../data/ProductRepository"
import { UserPurchaseRepository } from "../../data/UserPurchaseRepository"
import Product from "./Product"

type ProductListProp = {
    isTrendingProduct: boolean
}

export default function ProductList( {isTrendingProduct = false}: ProductListProp ) {

    let  productList: ProductModel[] = []

    if (isTrendingProduct) {
        productList = UserPurchaseRepository.getTrendingPurchasedProducts().map ( (item) => item.product)
    } else {
        productList = ProductRepository.getAllProducts()
    }


    return (
        <div className="flex w-full h-max py-2 bg-white items-center justify-baseline">
            {
                productList.map((product) => {
                    return <Product key={product.productId} productModel={product} isTrendingProduct={isTrendingProduct} onBuyTap={() => {}} />
                })
            }
        </div>
    )
}