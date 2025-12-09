import { ProductRepository } from "../data/ProductRepository";
import Footer from "./Footer/Footer";
import Header from "./Header";
import CarouselProduct from "./Carousel/CarouselProduct";
import Carousel from "./Carousel/Carousel";
import ProductList from "./ProductList/ProductList";
import Sponsors from "./sponsors/Sponsors";
import { ProductModel } from "../data/ProductModel";
import { useRef, useState } from "react";
import BuyProductModal, { BuyProductModalHandle } from "./modal/BuyProductModal";


type DashboardProp = {
    onMenuTap: () => void
}

export default function Dashboard({onMenuTap}: DashboardProp) {

    const buyProductModalRef = useRef<BuyProductModalHandle>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);

    function showProductModal(product: ProductModel) {
        setSelectedProduct(product);
        buyProductModalRef.current?.open(); 
    }

    function handleBuyClick() {
        if (selectedProduct) {
            console.log("Buying product:", selectedProduct.name);
            //TODO: Add your purchase logic
            buyProductModalRef.current?.close(); 
            setSelectedProduct(null);
        }
    }

    return (
        <div className="flex flex-col">

            { selectedProduct && (
                <BuyProductModal
                    ref={buyProductModalRef}
                    productModel={selectedProduct}
                    onBuyTap={handleBuyClick}
                />
            )}

            <section id="header">
                <Header onMenuTap={onMenuTap}/>
            </section>

            <Carousel />

            <ProductList isTrendingProduct={false} onBuyTap={(product) => showProductModal(product)}/>

            <Sponsors />

            <Footer />
        </div>
    )
}