"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import React from 'react';
import { RiStarSLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../RTK/Slice';

const Suggestion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const products = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      price: 120,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 5,
      image: "/images/pic8.png",
      bgColor: "bg-gray-100"
    },
    {
      id: 2,
      name: "Courage Graphic T-shirt",
      price: 208,
      originalPrice: 260,
      discount: 20,
      rating: 3.5,
      reviews: 5,
      image: "/images/pic15.png",
      bgColor: "bg-gray-100"
    },
    {
      id: 3,
      name: "Loose Fit Bermuda Shorts",
      price: 180,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 5,
      image: "/images/pic1.png",
      bgColor: "bg-gray-100"
    },
    {
      id: 4,
      name: "Faded Skinny Jeans",
      price: 112,
      originalPrice: 160,
      discount: 30,
      rating: 4.5,
      reviews: 5,
      image: "/images/pic4.png",
      bgColor: "bg-gray-100"
    }
  ];
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
  };
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <RiStarSLine key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <RiStarSLine className="w-4 h-4 text-gray-300" />
          <div className="overflow-hidden absolute inset-0 w-1/2">
            <RiStarSLine className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <RiStarSLine key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }
    
    return stars;
  };

  const ProductCard = ({ product }) => (
    <div className="overflow-hidden bg-white rounded-lg transition-shadow duration-300 hover:shadow-lg" data-aos="fade-up">
      <div className={`${product.bgColor} p-6 rounded-t-lg`}>
        <div className="flex overflow-hidden relative justify-center items-center bg-white rounded-lg aspect-square">
        <div className="flex justify-center items-center h-40 rounded-lg w-54">
  <Link to={`/ProductDetails/${product.id}`} onClick={() => handleProductClick(product)}>
    <img src={product.image} alt='' />
  </Link>
</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{product.name}</h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">{product.rating}/5</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              <span className="px-2 py-1 text-sm font-medium text-red-600 bg-red-100 rounded-full">
                -{product.discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">YOU MIGHT ALSO LIKE</h1>
          <div className="mx-auto w-24 h-1 bg-gray-900"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 transition-colors duration-200 hover:bg-gray-50">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

