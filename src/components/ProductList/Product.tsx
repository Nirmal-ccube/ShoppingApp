import { ProductModel } from "../../data/ProductModel"

type ProductProps = {
    productModel: ProductModel,
    onBuyTap: () => void
}

export default function Product({productModel, onBuyTap}: ProductProps) {
    return (
        <div className="flex flex-col bg-gray-100 m-2 mx-4 rounded-md h-70 w-50 space-y-2 items-center justify-center shadow">
            <img src={productModel.imageUrl} className="w-30 h-30 object-contain" alt={productModel.name}/>

            <h2>{productModel.name}</h2>

            <h3>{productModel.price} {productModel.currency}</h3>

            <button onClick={onBuyTap} className="bg-white text-m text-blue-600 border border-blue-600 rounded px-2 py-1 hover:bg-blue-600 hover:text-white transition-colors duration-300 w-max">
                Buy Now
            </button>

        </div>
    )
}