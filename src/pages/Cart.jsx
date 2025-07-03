"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../RTK/Slice';
import { Link } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector((state) => state.product.cartItems);

    const dispatch = useDispatch()
    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };
    const subtotal = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const shipping = 2; // flat shipping
    const total = subtotal + shipping;
    return (
        <div>
            <div class="p-4 mx-auto max-w-5xl max-lg:max-w-2xl">
                <h1 class="text-xl font-semibold text-slate-900">Shopping Cart</h1>
                <div class="grid gap-x-6 gap-y-8 mt-6 lg:grid-cols-3 lg:gap-x-8">
                    <div class="space-y-6 lg:col-span-2">
                        {cart.map((item) => (


                            <div class="flex gap-4 px-4 py-6 bg-white rounded-md border border-gray-200 shadow-sm">
                                <div class="flex gap-6 sm:gap-4 max-sm:flex-col">
                                    <div class="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                                        <img src={item.image} alt='' />
                                    </div>
                                    <div class="flex flex-col gap-4">
                                        <div>
                                            <h3 class="text-sm font-semibold sm:text-base text-slate-900">{item.name}</h3>
                                            <p>Size</p>
                                            <p>color</p>
                                            {/* <p class="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">Color: <span class="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]"></span></p> */}
                                        </div>
                                        <div class="mt-auto">
                                            <h3 class="text-sm font-semibold text-slate-900">${item.price}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col ml-auto">
                                    <div class="flex gap-4 justify-end items-start" onClick={() => handleRemove(item.id)}>


                                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600" viewBox="0 0 24 24">
                                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                    <div class="flex gap-3 items-center mt-auto">
                                        <button type="button"
                                            class="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 outline-none rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 124 124">
                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                            </svg>
                                        </button>
                                        <span class="font-semibold text-base leading-[18px]">2</span>
                                        <button type="button"
                                            class="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-800 outline-none rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 42 42">
                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div class="px-4 py-6 bg-white rounded-md border border-gray-200 shadow-sm h-max">
                        <ul class="space-y-4 font-medium text-slate-500">
                            <li className="flex flex-wrap gap-4 text-sm">
                                Subtotal
                                <span className="ml-auto font-semibold text-slate-900">
                                    ${subtotal.toFixed(2)}
                                </span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Shipping
                                <span className="ml-auto font-semibold text-slate-900">
                                    ${shipping.toFixed(2)}
                                </span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                                Total
                                <span className="ml-auto">
                                    ${total.toFixed(2)}
                                </span>
                            </li>

                        </ul>
                        <div class="mt-8 space-y-4">
                            <button type="button" class="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md cursor-pointer">Buy Now</button>
                            <Link to="/shop">
                                <button type="button" class="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer">Continue Shopping</button></Link>
                        </div>
                        <div class="flex flex-wrap gap-4 justify-center mt-5">
                            <img src='https://readymadeui.com/images/master.webp' alt="card1" class="object-contain w-10" />
                            <img src='https://readymadeui.com/images/visa.webp' alt="card2" class="object-contain w-10" />
                            <img src='https://readymadeui.com/images/american-express.webp' alt="card3" class="object-contain w-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
