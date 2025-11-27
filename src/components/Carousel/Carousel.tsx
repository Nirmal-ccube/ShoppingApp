import { useState, useEffect } from "react";
import { ProductRepository } from "../../data/ProductRepository";
import CarouselProduct from "./CarouselProduct";

const carouselProducts = ProductRepository.getAllCarouselProducts()

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onProductTap(productId: string) {

  }

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  useEffect(() => {
    if (currentIndex >= carouselProducts.length) {
      setCurrentIndex(0);
    }
  }, [carouselProducts.length, currentIndex]);

  return (
    <div className="flex">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {   
                carouselProducts.map( (product) => (
                    <div key={product.productId} className="flex justify-center items-center">
                        <CarouselProduct product={product} onItemTap={() => onProductTap(product.productId)}/>
                    </div>
                ))
            }
        </div>
    </div>
  );
}
