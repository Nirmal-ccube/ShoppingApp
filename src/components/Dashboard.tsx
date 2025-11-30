import { ProductRepository } from "../data/ProductRepository";
import Footer from "./Footer/Footer";
import Header from "./Header";
import CarouselProduct from "./Carousel/CarouselProduct";
import ProductList from "./ProductList/ProductList";
import Sponsors from "./sponsors/Sponsors";

type DashboardProp = {
    onMenuTap: () => void
}

export default function Dashboard({onMenuTap}: DashboardProp) {
    return (
        <div className="flex flex-col">
            <section id="header">
                <Header onMenuTap={onMenuTap}/>
            </section>
            

            {/** <Carousel /> */}

            <ProductList />

            <CarouselProduct product={ProductRepository.getAllCarouselProducts()[0] } onItemTap={() => {}} />

            <Sponsors />

            <Footer />
        </div>
    )
}