import { ProductModel } from "../../data/ProductModel"

type CarouselProductProps = {
    product: ProductModel,
    onItemTap: () => void
}

export default function CarouselProduct({product, onItemTap}: CarouselProductProps) {
    return (
        <div className="flex items-center justify-center bg-white w-full ">

            <div className="flex items-center justify-center bg-gray-100 space-x-20 rounded-lg shadow-sm p-4 px-10">
                {/* Product details */}
                <div className="flex flex-col space-y-4 min-w-0">
                    <h1 className="text-xl font-semibold truncate">{product.name}</h1>
                    <h3 className="text-lg font-medium text-gray-700">$ {product.price}</h3>

                    <button onClick={onItemTap} className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300 w-max">
                        Buy Now
                    </button>
                </div>

                {/* Product image */}
                <div className="shrink-0 w-70 h-70 bg-white rounded overflow-hidden shadow-sm flex items-center justify-center">
                    <img src={product.imageUrl} className="max-w-full max-h-full object-contain" alt={product.name}/>
                </div>
            </div>

            

        </div>
    )
}