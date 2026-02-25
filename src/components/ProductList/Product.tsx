import { ProductModel } from "../../data/ProductModel"

type ProductProps = {
    productModel: ProductModel,
    isTrendingProduct: boolean,
    onBuyTap?: () => void
}

export default function Product({ productModel, isTrendingProduct = false, onBuyTap }: ProductProps) {

    return (
        <div className={`product-root ${isTrendingProduct ? 'product-trending' : 'product-normal'}`}>
            <img src={productModel.imageUrl} className={isTrendingProduct ? 'product-img-trending' : 'product-img-normal'} alt={productModel.name} />

            <h2 className="md:text-base md:px-2 md:py-1 sm:text-sm sm:px-1 sm:py-0.5 text-sm px-1 py-0.5">{productModel.name}</h2>

            <h3 className="md:text-base md:px-2 md:py-1 sm:text-sm sm:px-1 sm:py-0.5 text-sm px-1 py-0.5">{productModel.price} {productModel.currency}</h3>

            {!isTrendingProduct &&
                <button onClick={onBuyTap} className="product-buy-btn">
                    Buy Now
                </button>
            }
        </div>
    )
}