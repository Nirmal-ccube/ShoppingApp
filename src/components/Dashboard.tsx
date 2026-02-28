import { useRef, useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Carousel from "./Carousel/Carousel";
import ProductList from "./ProductList/ProductList";
import Sponsors from "./sponsors/Sponsors";
import { ProductModel } from "../data/ProductModel";
import BuyProductModal, { BuyProductModalHandle } from "./Modal/BuyProduct/BuyProductModal";
import { PurchaseRepository } from "../data/PurchaseRepository";


type DashboardProp = {
    onMenuTap: () => void
}

export default function Dashboard({ onMenuTap }: DashboardProp) {

    const buyProductModalRef = useRef<BuyProductModalHandle>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);

    useEffect(() => {
        if (selectedProduct && buyProductModalRef.current) {
            buyProductModalRef.current.open();
        }
    }, [selectedProduct]);

    function showProductModal(product: ProductModel) {
        setSelectedProduct(product);
    }

    function handleBuyClick(name: string, email: string): boolean {
        if (selectedProduct) {
            console.log("Buying product: " + selectedProduct.name + " name:" + name + " email:" + email);
            PurchaseRepository.createNewInvoice(name, email, selectedProduct.productId, selectedProduct.price)
            return true
        } else {
            return false
        }
    }

    function handleCancelBuyClick() {
        console.log("handleCancelBuyClick");
        buyProductModalRef.current?.close();
        setSelectedProduct(null);
    }

    return (
        <div className="dashboard-root">

            {selectedProduct && (
                <BuyProductModal
                    ref={buyProductModalRef}
                    productModel={selectedProduct}
                    onBuyTap={handleBuyClick}
                    onCancelTap={handleCancelBuyClick}
                />
            )}

            <section id="header">
                <Header onMenuTap={onMenuTap} />
            </section>

            <section id="caousel">
                <Carousel onBuyTap={(product) => showProductModal(product)} isCarouselRunning={selectedProduct == null} />
            </section>

            <ProductList isTrendingProduct={false} onBuyTap={(product) => showProductModal(product)} />

            <Sponsors />

            <Footer />
        </div>
    )
}