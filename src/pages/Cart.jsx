"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../RTK/Slice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.product.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQty) => {
    dispatch(updateQuantity({ productId, quantity: newQty }));
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 2; // flat shipping
  const total = subtotal + shipping;

  return (
    <div className="p-4 mx-auto max-w-5xl max-lg:max-w-2xl">
      <h1 className="text-xl font-semibold text-slate-900">Shopping Cart</h1>

      <div className="grid gap-x-6 gap-y-8 mt-6 lg:grid-cols-3 lg:gap-x-8">
        {/* Cart Items */}
        <div className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 px-4 py-6 bg-white rounded-md border border-gray-200 shadow-sm">
              <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base text-slate-900">{item.name}</h3>
                    <p>Size: {item.size || '—'}</p>
                    <p>Color: {item.color || '—'}</p>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-sm font-semibold text-slate-900">${item.price.toFixed(2)}</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-auto">
                {/* Remove Icon */}
                <div
                  className="flex gap-4 justify-end items-start cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 fill-slate-400 hover:fill-red-600" viewBox="0 0 24 24">
                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"></path>
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"></path>
                  </svg>
                </div>

                {/* Quantity Controls */}
                <div className="flex gap-3 items-center mt-auto">
                  <button
                    type="button"
                    className="flex justify-center items-center w-5 h-5 rounded-full cursor-pointer outline-none bg-slate-400"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    <span className="text-sm leading-none text-white">–</span>
                  </button>

                  <span className="font-semibold text-base leading-[18px]">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    className="flex justify-center items-center w-5 h-5 rounded-full cursor-pointer outline-none bg-slate-800"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <span className="text-sm leading-none text-white">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="px-4 py-6 bg-white rounded-md border border-gray-200 shadow-sm h-max">
          <ul className="space-y-4 font-medium text-slate-500">
            <li className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="font-semibold text-slate-900">${shipping.toFixed(2)}</span>
            </li>
            <li className="flex justify-between text-sm font-semibold text-slate-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              className="w-full px-4 py-2.5 text-sm font-medium tracking-wide text-white bg-slate-800 rounded-md hover:bg-slate-900"
            >
              Buy Now
            </button>
            <Link to="/shop">
              <button
                type="button"
                className="w-full px-4 py-2.5 text-sm font-medium tracking-wide text-slate-900 bg-slate-50 border border-gray-300 rounded-md hover:bg-slate-100"
              >
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-5">
            <img src="https://readymadeui.com/images/master.webp" alt="mastercard" className="object-contain w-10" />
            <img src="https://readymadeui.com/images/visa.webp" alt="visa" className="object-contain w-10" />
            <img src="https://readymadeui.com/images/american-express.webp" alt="amex" className="object-contain w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
