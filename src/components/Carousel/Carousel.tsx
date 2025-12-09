import { useState, useEffect } from "react";
import { ProductRepository } from "../../data/ProductRepository";
import CarouselProduct from "./CarouselProduct";

const carouselProducts = ProductRepository.getAllCarouselProducts();

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onProductTap(productId: string) {

  }

  // Auto scroll every 3 seconds
  useEffect(() => {
  if (!carouselProducts.length) return;

  if (currentIndex >= carouselProducts.length) {
    setCurrentIndex(0);
    return;
  }

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselProducts.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [currentIndex, carouselProducts.length]);

  if (!carouselProducts.length) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselProducts.map((product) => (
          <div
            key={product.productId}
            className="w-full shrink-0 flex justify-center items-center"
          >
            <CarouselProduct
              product={product}
              onItemTap={() => onProductTap(product.productId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
