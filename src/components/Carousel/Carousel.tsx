import { useState, useEffect } from "react";
import { ProductRepository } from "../../data/ProductRepository";
import CarouselProduct from "./CarouselProduct";
import { ProductModel } from "../../data/ProductModel";

type CarouselProp = {
  isCarouselRunning: boolean,
  onBuyTap?: (productModel: ProductModel) => void
}

export default function Carousel({ isCarouselRunning, onBuyTap }: CarouselProp) {
  const [carouselProducts, setCarouselProducts] = useState<ProductModel[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCarouselProducts(ProductRepository.getAllCarouselProducts());
  }, []);

  // Auto scroll every 3 seconds
  useEffect(() => {
    if (!carouselProducts.length) return;
    if (isCarouselRunning == false) return;

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
  }, [currentIndex, carouselProducts.length, isCarouselRunning]);

  if (!carouselProducts.length) {
    return null;
  }

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselProducts.map((product) => (
          <div
            key={product.productId}
            className="carousel-slide"
          >
            <CarouselProduct
              product={product}
              onItemTap={onBuyTap ? () => onBuyTap(product) : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
