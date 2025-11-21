// Install react-slick first:
// npm install react-slick slick-carousel

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Mediocre Plastic Plate",
    category: "Cashmere",
    price: "$18.90",
    image: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/58-home_default/mountain-fox-cushion.jpg",
    link: "#"
  },
  {
    id: 2,
    name: "Aerodynamic Linen Small1104",
    category: "Cashmere",
    price: "$18.90",
    image: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/62-home_default/brown-bear-cushion.jpg",
    link: "#"
  },
  {
    id: 3,
    name: "Lightweight Wooden Coat",
    category: "Home",
    price: "$23.90",
    image: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/34-home_default/hummingbird-printed-t-shirt.jpg",
    link: "#"
  },
  {
    id: 4,
    name: "Hummingbird printed sweater",
    category: "Gift Sets",
    price: "$28.72",
    image: "https://demo811.leotheme.com/prestashop/vt_candlea_demo/30-home_default/brown-bear-printed-sweater.jpg",
    link: "#"
  },
];

export default function BestSellerCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading + Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">
            Our <i>best seller</i>
          </h2>
          <a
            href="#"
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            See All
          </a>
        </div>

        {/* Product Carousel */}
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                <a href={product.link}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded mb-4"
                  />
                </a>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="text-black font-bold">{product.price}</p>
                <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
