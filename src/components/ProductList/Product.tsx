import { ProductModel } from "../../data/ProductModel"

type ProductProps = {
    productModel: ProductModel,
    isTrendingProduct: boolean,
    onBuyTap: () => void
}

const rootProductCSS = "flex flex-col bg-gray-100 m-2 mx-4 rounded-md space-y-2 items-center justify-center shadow"

export default function Product({productModel, isTrendingProduct = false, onBuyTap}: ProductProps) {

    return (
        <div className={`${rootProductCSS} ${isTrendingProduct ? 'h-50 w-40' : 'h-70 w-50'}`}>
            <img src={productModel.imageUrl} className={`${isTrendingProduct ? 'w-20 h-20' : 'w-30 h-30'} object-contain`} alt={productModel.name}/>

            <h2>{productModel.name}</h2>

            <h3>{productModel.price} {productModel.currency}</h3>


            { !isTrendingProduct &&
                <button onClick={onBuyTap} className="bg-white text-m text-blue-600 border border-blue-600 rounded px-2 py-1 hover:bg-blue-600 hover:text-white transition-colors duration-300 w-max">
                    Buy Now
                </button>
            }
            
            

        </div>
    )
}