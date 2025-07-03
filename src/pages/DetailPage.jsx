"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RiStarSLine,
  RiStarSFill,
  RiSubtractLine,
  RiAddLine,
} from "react-icons/ri";
import Suggesion from "../components/Suggesion";
import { addToCart } from "../RTK/Slice";

const ProductDetails = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
console.log("quantity",quantity)
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Loading product details...
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RiStarSFill key={i} className="w-5 h-5 text-yellow-400" />);
    }
    if (hasHalf) {
      stars.push(
        <div key="half" className="relative">
          <RiStarSLine className="w-5 h-5 text-gray-300" />
          <div className="overflow-hidden absolute inset-0 w-1/2">
            <RiStarSFill className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
      );
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
      stars.push(<RiStarSLine key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }
    return stars;
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
   
  };


  const galleryImages = product.images || [product.image];

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl min-h-screen bg-white sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-4 lg:flex-col">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-24 object-cover rounded-lg border cursor-pointer ${
                  selectedImage === index
                    ? "ring-2 ring-black"
                    : "hover:ring-1 hover:ring-gray-300"
                }`}
                alt={`thumbnail-${index}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={galleryImages[selectedImage]}
              alt={product.name}
              className="w-full h-[500px] object-contain rounded-xl border"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex gap-2 items-center mt-3">
            <div className="flex">{renderStars(product.rating || 0)}</div>
            <span className="text-sm text-gray-600">
              {product.rating || 0}/5 ({product.reviews || 0} reviews)
            </span>
          </div>

          <div className="mt-6 text-3xl font-bold text-gray-900">
            ${product.price}
          </div>

          {/* Color Selector */}
          {product.colors?.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-2 text-sm font-semibold">Select Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full ${color.class} ${
                      selectedColor === color.name
                        ? "ring-2 ring-black"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.label}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes?.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-2 text-sm font-semibold">Choose Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-xl ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "text-gray-700 border-gray-300 hover:border-gray-500"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex flex-col gap-4 items-center mt-8 sm:flex-row">
            <div className="flex items-center bg-gray-100 rounded-full">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-3 rounded-full hover:bg-gray-200"
              >
                <RiSubtractLine className="w-4 h-4 text-gray-700" />
              </button>
              <span className="px-6 py-2 text-lg font-medium min-w-[60px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-3 rounded-full hover:bg-gray-200"
              >
                <RiAddLine className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            <button
              className="flex-1 px-8 py-4 text-lg font-medium text-white bg-black rounded-full transition hover:bg-gray-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Suggesion />
    </div>
  );
};

export default ProductDetails;

// "use client";

// import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   RiStarSLine,
//   RiStarSFill,
//   RiSubtractLine,
//   RiAddLine,
// } from "react-icons/ri";
// import Suggesion from "../components/Suggesion";
// import { addToCart } from "../RTK/Slice";

// const ProductDetails = () => {

//   const product = useSelector((state) => state.product.selectedProduct);
 
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//  const dispatch = useDispatch();

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
//         Loading product details...
//       </div>
//     );
//   }

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalf = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<RiStarSFill key={i} className="w-5 h-5 text-yellow-400" />);
//     }
//     if (hasHalf) {
//       stars.push(
//         <div key="half" className="relative">
//           <RiStarSLine className="w-5 h-5 text-gray-300" />
//           <div className="overflow-hidden absolute inset-0 w-1/2">
//             <RiStarSFill className="w-5 h-5 text-yellow-400" />
//           </div>
//         </div>
//       );
//     }
//     for (let i = 0; i < 5 - Math.ceil(rating); i++) {
//       stars.push(<RiStarSLine key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
//     }
//     return stars;
//   };

//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity >= 1) setQuantity(newQuantity);
//   };
 
//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         ...product,
//         quantity,
//         selectedColor,
//         selectedSize,
//       })
//     );
//   };
  
//   const galleryImages = product.images || [product.image]; 

//   return (
//     <div className="px-4 py-8 mx-auto max-w-7xl min-h-screen bg-white sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
//         {/* Image Gallery */}
//         <div className="flex flex-col gap-6 lg:flex-row">
//           {/* Thumbnails */}
//           <div className="flex gap-4 lg:flex-col">
//             {galleryImages.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 onClick={() => setSelectedImage(index)}
//                 className={`w-20 h-24 object-cover rounded-lg border cursor-pointer ${
//                   selectedImage === index
//                     ? "ring-2 ring-black"
//                     : "hover:ring-1 hover:ring-gray-300"
//                 }`}
//                 alt={`thumbnail-${index}`}
//               />
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="flex-1">
//             <img
//               src={galleryImages[selectedImage]}
//               alt={product.name}
//               className="w-full h-[500px] object-contain rounded-xl border"
//             />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

//           <div className="flex gap-2 items-center mt-3">
//             <div className="flex">{renderStars(product.rating || 0)}</div>
//             <span className="text-sm text-gray-600">
//               {product.rating || 0}/5 ({product.reviews || 0} reviews)
//             </span>
//           </div>

//           <div className="mt-6 text-3xl font-bold text-gray-900">
//             ${product.price}
//           </div>

//           {/* Color Selector */}
//           {product.colors?.length > 0 && (
//             <div className="mt-8">
//               <h3 className="mb-2 text-sm font-semibold">Select Color</h3>
//               <div className="flex gap-3">
//                 {product.colors.map((color) => (
//                   <button
//                     key={color.name}
//                     className={`w-10 h-10 rounded-full ${color.class} ${
//                       selectedColor === color.name
//                         ? "ring-2 ring-black"
//                         : "hover:ring-2 hover:ring-gray-300"
//                     }`}
//                     onClick={() => setSelectedColor(color.name)}
//                     title={color.label}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Size Selector */}
//           {product.sizes?.length > 0 && (
//             <div className="mt-8">
//               <h3 className="mb-2 text-sm font-semibold">Choose Size</h3>
//               <div className="flex flex-wrap gap-3">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className={`px-4 py-2 border rounded-xl ${
//                       selectedSize === size
//                         ? "bg-black text-white border-black"
//                         : "text-gray-700 border-gray-300 hover:border-gray-500"
//                     }`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Quantity + Add to Cart */}
//           <div className="flex flex-col gap-4 items-center mt-8 sm:flex-row">
//             <div className="flex items-center bg-gray-100 rounded-full">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="p-3 rounded-full hover:bg-gray-200"
//               >
//                 <RiSubtractLine className="w-4 h-4 text-gray-700" />
//               </button>
//               <span className="px-6 py-2 text-lg font-medium min-w-[60px] text-center">
//                 {quantity}
//               </span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="p-3 rounded-full hover:bg-gray-200"
//               >
//                 <RiAddLine className="w-4 h-4 text-gray-700" />
//               </button>
//             </div>

//             <button className="flex-1 px-8 py-4 text-lg font-medium text-white bg-black rounded-full transition hover:bg-gray-800"  onClick={(e) => {
//                             e.preventDefault(); 
//                             handleAddToCart(product);
//                           }}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Suggesion/>
//     </div>
//   );
// };

// export default ProductDetails;
