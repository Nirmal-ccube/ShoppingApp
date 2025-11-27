import { ProductRepository } from "../data/ProductRepository";
import Carousel from "./Carousel";
import CarouselProduct from "./CarouselProduct";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./ProductList/Product";
import ProductList from "./ProductList/ProductList";
import Sponsors from "./Sponsors";

type DashboardProp = {
    onMenuTap: () => void
}

export default function Dashboard({onMenuTap}: DashboardProp) {
    return (
        <div className="flex flex-col">
            <Header onMenuTap={onMenuTap}/>

            {/** <Carousel /> */}

            <ProductList />

            <CarouselProduct product={ProductRepository.getAllCarouselProducts()[0] } onItemTap={() => {}} />

            <Sponsors />

            <Footer />
        </div>
    )
}