import React, { useState } from 'react';
import { TiMinus, TiPlus } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Cart = () => {

    const [product, setProduct] = useState(
        {
            image: "../assets/img/lenevoimg1.webp",
            brand: "LENOVO",
            title: "Lenovo XT80 Bluetooth 5.3 Wireless Earphones with Mic Button Noise Reduction",
            itemPrice: 7000,
            quantity: 1,
        }
    )
    const incrementQuantity = () => {
        const { quantity } = product
        setProduct({ ...product, quantity: quantity + 1 });
    };

    const decrementQuantity = () => {
        if (product.quantity > 1) {
            setProduct({ ...product, quantity: product.quantity - 1 });
        }
    };
    const itemPrice = 7000;
    const total = product.quantity * itemPrice;
    console.log(product, "test");

    return (
        <div className='bg-[#f3f5f6] p-6 md:p-12'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
                <div className='p-5 space-y-4 bg-white w-full lg:w-auto'>
                    <div className='flex text-sm font-semibold text-gray-500 justify-between'>
                        <div>
                            <h1>Products</h1>
                        </div>
                        <div className='flex gap-4 md:gap-28'>
                            <h2>Quantity</h2>
                            <h3>Total</h3>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-20'>
                        <div className='flex gap-4 lg:gap-6 items-center'>
                            <img className='w-20 md:w-28 object-cover' src={product.image} alt="Lenovo" />
                            <div className='pt-2 space-y-2'>
                                <h1 className='text-sm text-gray-500'>{product.brand}</h1>
                                <h1 className='text-sm text-primary'>{product.title}</h1>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-sm text-red-500 font-bold'>Rs.{product.itemPrice}</h1>
                                    <h2 className='line-through text-gray-500 text-sm'>Rs. 10000</h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center  md:w-28 w-full font-semibold justify-between px-3 py-1.5 border-2'>
                            <button onClick={decrementQuantity}><TiMinus /></button>
                            <span>{product.quantity}</span>
                            <button onClick={incrementQuantity}><TiPlus /></button>
                        </div>
                        <h1 className='text-sm text-gray-500 font-bold'>Rs. {total}</h1>
                    </div>
                </div>
                <div className='bg-white w-full lg:w-96 p-8 space-y-4'>
                    <div className='flex justify-between'>
                        <h1 className='text-primary text-lg font-bold'>Total</h1>
                        <h2 className='text-lg text-primary font-bold'>Rs. {total}</h2>
                    </div>
                    <h1 className='text-red-500 font-bold'>You saved Rs. {3000 * product.quantity} !</h1>
                    <Link to='/checkout' state={product} ><button className='w-full mt-5 bg-secondery font-bold text-white p-4'>CheckOut</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
    