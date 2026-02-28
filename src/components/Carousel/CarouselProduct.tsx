import { ProductModel } from "../../data/ProductModel";

type CarouselProductProps = {
    product: ProductModel,
    onItemTap?: () => void
}

export default function CarouselProduct({ product, onItemTap }: CarouselProductProps) {
    return (
        <div className="carosuelproduct-root">

            <div className="carouselproduct-card">
                {/* Product details */}
                <div className="carouselproduct-details">
                    <h1 className="carouselproduct-name">{product.name}</h1>
                    <h3 className="carouselproduct-price">$ {product.price}</h3>

                    <button onClick={onItemTap} className="carouselproduct-buy-btn">
                        Buy Now
                    </button>
                </div>

                {/* Product image */}
                <div className="carouselproduct-imagecontainer">
                    <img src={product.imageUrl} className="carosuelproduct-image" alt={product.name} />
                </div>
            </div>
        </div>
    )
}