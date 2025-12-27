import { ProductModel } from "../../data/ProductModel"

type ProductProps = {
    productModel: ProductModel,
    isTrendingProduct: boolean,
    onBuyTap?: () => void
}

const rootProductCSS = "flex flex-col bg-gray-100 m-2 mx-4 rounded-md space-y-2 items-center justify-center shadow"

export default function Product({productModel, isTrendingProduct = false, onBuyTap}: ProductProps) {

    return (
        <div className={`product-root ${isTrendingProduct ? 'product-trending' : 'product-normal'}`}>
            <img src={productModel.imageUrl} className={isTrendingProduct ? 'product-img-trending' : 'product-img-normal'}  alt={productModel.name}/>

            <h2>{productModel.name}</h2>

            <h3>{productModel.price} {productModel.currency}</h3>

            { !isTrendingProduct &&
                <button onClick={onBuyTap} className="product-buy-btn">
                    Buy Now
                </button>
            }
        </div>
    )
}