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

            <h2 className="product-name">{productModel.name}</h2>

            <h3 className="product-price">$ {productModel.price}</h3>

            {!isTrendingProduct &&
                <button onClick={onBuyTap} className="product-buy-btn">
                    Buy Now
                </button>
            }
        </div>
    )
}