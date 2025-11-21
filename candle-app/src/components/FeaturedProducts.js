// FeaturedProducts.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Hummingbird Printed T-Shirt",
    alt: "Lightweight Wooden Coat",
    url: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/en/home/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white",
    image: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/34-home_default/hummingbird-printed-t-shirt.jpg",
    fullImage: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/34-large_default/hummingbird-printed-t-shirt.jpg",
  },
 
];

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-8">
          <i>Featured</i> products
        </h2>

        {/* Products Slider under the h2 */}
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="mx-auto rounded shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-lg font-medium">{product.name}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
