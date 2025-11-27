import { ProductModel } from "../../data/ProductModel"
import { ProductRepository } from "../../data/ProductRepository"
import Product from "./Product"


const productList: ProductModel[] = ProductRepository.getAllProducts()

export default function ProductList() {
    return (
        <div className="flex w-full h-max py-2 bg-white items-center justify-baseline">
            {
                productList.map((product) => {
                    return <Product key={product.productId} productModel={product} onBuyTap={() => {}} />
                })
            }
        </div>
    )
}