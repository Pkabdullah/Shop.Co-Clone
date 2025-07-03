import React, { useState } from "react";
import { RiStarSLine, RiCloseLine, RiMenuLine, RiSearchLine } from "react-icons/ri";
import { setSelectedProduct } from "../RTK/Slice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

// Sample Product List
const products = [
  {
    id: 1,
    name: "Vertical Striped Shirt",
    price: 120,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic5.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 2,
    name: "Courage Graphic T-shirt",
    price: 308,
    originalPrice: 460,
    discount: 20,
    rating: 3.5,
    reviews: 5,
    image: "/images/pic6.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic7.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 4,
    name: "Faded Skinny Jeans",
    price: 120,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic8.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 6,
    name: "Faded Skinny Jeans",
    price: 200,
    originalPrice: 260,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic9.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 7,
    name: "Faded Skinny Jeans",
    price: 100,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic10.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 90,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic11.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 9,
    name: "Faded Skinny Jeans",
    price: 79,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic12.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 10,
    name: "Faded Skinny Jeans",
    price: 32,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic13.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 11,
    name: "Faded Skinny Jeans",
    price: 34,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic14.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 12,
    name: "Faded Skinny Jeans",
    price: 76,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic15.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 13,
    name: "Faded Skinny Jeans",
    price: 112,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 5,
    image: "/images/pic1.png",
    bgColor: "bg-gray-100"
  }
];

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

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
const handleProductClick = (product) => {
  dispatch(setSelectedProduct(product));
};
  return (
    <div className={`p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${product.bgColor}`}>
      <div className="p-2 mb-3 bg-white rounded-lg">
      <Link to={`/ProductDetails/${product.id}`} onClick={() => handleProductClick(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-48"
         
        />
        </Link>
      </div>
      <h3 className="mb-2 text-sm font-semibold text-gray-900">{product.name}</h3>
      <div className="flex items-center mb-2">
        {renderStars(product.rating)}
        <span className="ml-2 text-xs text-gray-500">
          ({product.reviews})
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-lg font-bold text-gray-900">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            ${product.originalPrice}
          </span>
        )}
        {product.discount && (
          <span className="px-2 py-1 text-xs font-medium text-red-500 bg-red-50 rounded">
            {product.discount}% off
          </span>
        )}
      </div>
    </div>
  );
};

const FilterSidebar = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 750]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const brands = ['Zara', 'H&M', 'Uniqlo', "Levi's", 'Nike', 'Adidas', 'Puma', 'Tommy Hilfiger'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL'];
  const colors = [
    { name: 'Blue', class: 'bg-blue-600' },
    { name: 'Purple', class: 'bg-purple-600' },
    { name: 'Pink', class: 'bg-pink-600' },
    { name: 'Orange', class: 'bg-orange-600' },
    { name: 'Red', class: 'bg-red-600' },
    { name: 'Yellow', class: 'bg-yellow-600' },
    { name: 'Black', class: 'bg-black' },
    { name: 'Gray', class: 'bg-gray-600' }
  ];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 1000]);
  };

  return (
    <>
      {/* Overlay - only on mobile when open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto
        ${!isOpen ? 'md:hidden' : ''}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 mb-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
            <div className="flex gap-3 items-center">
              <button 
                onClick={clearAllFilters}
                className="text-sm font-medium text-red-500 transition-colors hover:text-red-600"
              >
                Clear all
              </button>
              <button 
                onClick={onClose}
                className="p-1 rounded-md transition-colors hover:bg-gray-100"
              >
                <RiCloseLine className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-8">
            <h6 className="mb-4 text-sm font-semibold text-gray-900">Brand</h6>
            <div className="flex items-center px-3 py-2 mb-4 bg-gray-50 rounded-lg border border-gray-200">
              <input 
                type="text" 
                placeholder="Search brand"
                className="w-full text-sm placeholder-gray-500 text-gray-900 bg-transparent outline-none" 
              />
              <RiSearchLine className="ml-2 w-4 h-4 text-gray-400" />
            </div>
            <div className="overflow-y-auto space-y-3 max-h-48">
              {brands.map((brand) => (
                <label key={brand} className="flex gap-3 items-center cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" 
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-8">
            <h6 className="mb-4 text-sm font-semibold text-gray-900">Size</h6>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`
                    py-2 px-3 text-xs font-medium rounded-md border transition-all
                    ${selectedSizes.includes(size)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h6 className="mb-4 text-sm font-semibold text-gray-900">Price Range</h6>
            <div className="px-2">
              <div className="relative mb-6">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="px-2 py-1 w-16 text-sm rounded border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <span className="text-gray-400">-</span>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                    className="px-2 py-1 w-16 text-sm rounded border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-8">
            <h6 className="mb-4 text-sm font-semibold text-gray-900">Color</h6>
            <div className="grid grid-cols-4 gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`
                    w-10 h-10 rounded-full ${color.class} 
                    transition-all duration-200 hover:scale-110
                    ${selectedColors.includes(color.name) 
                      ? 'ring-2 ring-offset-2 ring-blue-500' 
                      : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
                    }
                  `}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true); 

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Filter Sidebar */}
        <FilterSidebar 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)} 
        />

        {/* Main Content */}
        <div className="flex-1">
          {/* Header with Filter Toggle - Always visible */}
          <div className="px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold text-gray-900">Shop</h1>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
              >
                <RiMenuLine className="w-4 h-4" />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Products</h2>
              <p className="mt-1 text-gray-600">Showing {products.length} products</p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default Shop;
// import React from 'react'
// import { RiStarSLine } from "react-icons/ri";


// const products = [
//     {
//       id: 1,
//       name: "Vertical Striped Shirt",
//       price: 120,
//       originalPrice: null,
//       discount: null,
//       rating: 4.5,
//       reviews: 5,
//       image: "/images/pic5.png",
//       bgColor: "bg-gray-100"
//     },
//     {
//       id: 2,
//       name: "Courage Graphic T-shirt",
//       price: 208,
//       originalPrice: 260,
//       discount: 20,
//       rating: 3.5,
//       reviews: 5,
//       image: "/images/pic6.png",
//       bgColor: "bg-gray-100"
//     },
//     {
//       id: 3,
//       name: "Loose Fit Bermuda Shorts",
//       price: 180,
//       originalPrice: null,
//       discount: null,
//       rating: 4.5,
//       reviews: 5,
//       image: "/images/pic7.png",
//       bgColor: "bg-gray-100"
//     },
//     {
//       id: 4,
//       name: "Faded Skinny Jeans",
//       price: 112,
//       originalPrice: 160,
//       discount: 30,
//       rating: 4.5,
//       reviews: 5,
//       image: "/images/pic8.png",
//       bgColor: "bg-gray-100"
//     }
//   ];
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;
    
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <RiStarSLine key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//       );
//     }
    
//     if (hasHalfStar) {
//       stars.push(
//         <div key="half" className="relative">
//           <RiStarSLine className="w-4 h-4 text-gray-300" />
//           <div className="overflow-hidden absolute inset-0 w-1/2">
//             <RiStarSLine className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//           </div>
//         </div>
//       );
//     }
    
//     const emptyStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <RiStarSLine key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
//       );
//     }
    
//     return stars;
//   };
// const Shop = ({products}) => {
   
//   return (
//     <div>
//         <div class="flex">
//         <div class="w-full max-w-[300px] shrink-0 shadow-md px-6 sm:px-8 min-h-screen py-6">
//           <div class="flex items-center pb-2 mb-6 border-b border-gray-300">
//             <h3 class="text-lg font-semibold text-slate-900">Filter</h3>
//             <button type="button" class="ml-auto text-sm font-semibold text-red-500 cursor-pointer">Clear all</button>
//           </div>
//           <div>
//             <h6 class="text-sm font-semibold text-slate-900">Brand</h6>
//             <div class="flex px-3 py-1.5 rounded-md border border-gray-300 bg-gray-100 overflow-hidden mt-2">
//               <input type="email" placeholder="Search brand"
//                 class="w-full text-sm text-gray-900 bg-transparent outline-none" />
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" class="w-3 fill-gray-600">
//                 <path
//                   d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
//                 </path>
//               </svg>
//             </div>
//             <ul class="mt-6 space-y-4">
//               <li class="flex gap-3 items-center">
//                 <input id="zara" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="zara" class="text-sm font-medium cursor-pointer text-slate-600">Zara</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="hm" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="hm" class="text-sm font-medium cursor-pointer text-slate-600">H&M</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="uniqlo" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="uniqlo" class="text-sm font-medium cursor-pointer text-slate-600">Uniqlo</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="levis" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="levis" class="text-sm font-medium cursor-pointer text-slate-600">Levi’s</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="nike" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="nike" class="text-sm font-medium cursor-pointer text-slate-600">Nike</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="adidas" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="adidas" class="text-sm font-medium cursor-pointer text-slate-600">Adidas</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="puma" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="puma" class="text-sm font-medium cursor-pointer text-slate-600">Puma</label>
//               </li>
//               <li class="flex gap-3 items-center">
//                 <input id="tommy" type="checkbox"
//                   class="w-4 h-4 cursor-pointer" />
//                 <label for="tommy" class="text-sm font-medium cursor-pointer text-slate-600">Tommy Hilfiger</label>
//               </li>
//             </ul>
//           </div>

//           <hr class="my-6 border-gray-300" />

//           <div>
//             <h6 class="text-sm font-semibold text-slate-900">Size</h6>
//             <div class="flex flex-wrap gap-3 mt-4">
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">XS</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">S</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">M</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">L</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">XL</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">XXL</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">XXXL</button>
//               <button type="button" class="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14">4XL</button>
//             </div>
//           </div>

//           <hr class="my-6 border-gray-300" />

//           <div>
//             <h6 class="text-sm font-semibold text-slate-900">Price</h6>
//             <div class="relative mt-6">
//               <div class="h-1.5 bg-gray-300 relative">
//                 <div id="activeTrack" class="absolute h-1.5 bg-pink-500 rounded-full w-9/12"></div>
//               </div>
//               <input
//                 type="range"
//                 id="minRange"
//                 min="0"
//                 max="1000"
//                 value="0"
//                 class="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
//                     [&::-webkit-slider-thumb]:appearance-none 
//                     [&::-webkit-slider-thumb]:w-5 
//                     [&::-webkit-slider-thumb]:h-5 
//                     [&::-webkit-slider-thumb]:bg-pink-500 
//                     [&::-webkit-slider-thumb]:rounded-full 
//                     [&::-webkit-slider-thumb]:border-2 
//                     [&::-webkit-slider-thumb]:border-white 
//                     [&::-webkit-slider-thumb]:shadow-md 
//                     [&::-webkit-slider-thumb]:cursor-pointer
//                     [&::-moz-range-thumb]:w-5 
//                     [&::-moz-range-thumb]:h-5 
//                     [&::-moz-range-thumb]:bg-pink-500 
//                     [&::-moz-range-thumb]:rounded-full 
//                     [&::-moz-range-thumb]:border-2 
//                     [&::-moz-range-thumb]:border-white 
//                     [&::-moz-range-thumb]:shadow-md 
//                     [&::-moz-range-thumb]:cursor-pointer
//                     [&::-moz-range-thumb]:border-none"
//               />

//               <input
//                 type="range"
//                 id="maxRange"
//                 min="0"
//                 max="1000"
//                 value="750"
//                 class="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
//                     [&::-webkit-slider-thumb]:appearance-none 
//                     [&::-webkit-slider-thumb]:w-5 
//                     [&::-webkit-slider-thumb]:h-5 
//                     [&::-webkit-slider-thumb]:bg-pink-500 
//                     [&::-webkit-slider-thumb]:rounded-full 
//                     [&::-webkit-slider-thumb]:border-2 
//                     [&::-webkit-slider-thumb]:border-white 
//                     [&::-webkit-slider-thumb]:shadow-md 
//                     [&::-webkit-slider-thumb]:cursor-pointer
//                     [&::-moz-range-thumb]:w-5 
//                     [&::-moz-range-thumb]:h-5 
//                     [&::-moz-range-thumb]:bg-pink-500 
//                     [&::-moz-range-thumb]:rounded-full 
//                     [&::-moz-range-thumb]:border-2 
//                     [&::-moz-range-thumb]:border-white 
//                     [&::-moz-range-thumb]:shadow-md 
//                     [&::-moz-range-thumb]:cursor-pointer
//                     [&::-moz-range-thumb]:border-none"
//               />

//               <div class="flex justify-between mt-4 text-sm font-medium text-slate-600">
//                 <span id="minPrice">$750</span>
//                 <span id="maxPrice">$1000</span>
//               </div>
//             </div>
//           </div>

//           <hr class="my-6 border-gray-300" />

//           <div>
//             <h6 class="text-sm font-semibold text-slate-900">Color</h6>
//             <div class="flex flex-wrap gap-3 mt-4">
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-blue-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-purple-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-pink-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-orange-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-red-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-yellow-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-black w-8 h-8 hover:scale-[1.05] transition-all"></button>
//               <button type="button" class="cursor-pointer rounded-full text-[13px] text-white font-medium bg-gray-700 w-8 h-8 hover:scale-[1.05] transition-all"></button>
//             </div>
//           </div>
//         </div>

//         <div class="p-6 w-full">
//           <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {/* <div class="w-full h-48 bg-gray-400 rounded-md"></div>
//               <div class="w-full h-48 bg-gray-100 rounded-md"></div>
//               <div class="w-full h-48 bg-gray-100 rounded-md"></div>
//               <div class="w-full h-48 bg-gray-100 rounded-md"></div>
//               <div class="w-full h-48 bg-gray-100 rounded-md"></div>
//               <div class="w-full h-48 bg-gray-100 rounded-md"></div> */}

//                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {products.map(product => (
//             <Shop key={product.id} product={product} />
//           ))}
//         </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shop
