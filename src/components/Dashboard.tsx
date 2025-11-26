import AllProducts from "./AllProducts";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Sponsors from "./Sponsors";

type DashboardProp = {
    onMenuTap: () => void
}

export default function Dashboard({onMenuTap}: DashboardProp) {
    return (
        <div className="flex flex-col h-full">
            <Header onMenuTap={onMenuTap}/>

            <Carousel />

            <AllProducts />

            <Sponsors />

            <Footer />
        </div>
    )
}