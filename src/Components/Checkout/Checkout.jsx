import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    Email: yup.string().required().email(),
    Address: yup.string().required(),
    City: yup.string().required(),
    Postal: yup.string().required(),
    Phone: yup.number().required(),
    contactMethod: yup.string().required("Please select a contact method"),
    updatesConsent: yup.string().required("Please select an option for order updates"),
});

const Checkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(Schema),
    });

    const [formDataArray, setFormDataArray] = useState([]);

    useEffect(() => {
        const storedFormData = localStorage.getItem('formDataArray');
        if (storedFormData) {
            setFormDataArray(JSON.parse(storedFormData));
        }
    }, []);

    const onSubmit = (data) => {
        setFormDataArray([...formDataArray, data]);
        localStorage.setItem('formDataArray', JSON.stringify([...formDataArray, data]));
        reset();
    };

    const { state: { image, brand, title, itemPrice, quantity } } = useLocation();
    return (
        <div className='xl:p-12 p-2'>
            <div className='flex flex-col xl:flex-row bg-white justify-center gap-12'>
                <form onSubmit={handleSubmit(onSubmit)} className='xl:w-[40%] w-full  p-6' action="">
                    <div className=''>
                        <div className='space-y-3'>
                            <label className='block font-semibold text-xl' htmlFor="">Contact</label>
                            <input
                                {...register("Email")}
                                className='p-3 w-full outline-none rounded-md border border-silver text-sm' type="text" placeholder='Enter Email or Mobile Number' />
                            {errors.Email && (
                                <p className="text-red-500">⚠ {errors.Email.message}</p>
                            )}
                            <div className='flex gap-2'>
                                <input type="radio" value="email" {...register("contactMethod")} />
                                <h1 className='text-sm'>Get order updates via Email</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" value="whatsapp" {...register("contactMethod")} />
                                <h1 className='text-sm'>Get order updates via WhatsApp</h1>
                            </div>
                            {errors.contactMethod && (
                                <p className="text-red-500">⚠ {errors.contactMethod.message}</p>
                            )}
                        </div>
                        <div className='space-y-5 mt-6'>
                            <label className='block font-semibold text-xl' htmlFor="">Delivery</label>
                            <div
                                className="flex justify-end border border-silver p-3 rounded-md">
                                <select id="Pcatagory" className="border-none outline-none text-sm  w-full ">
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="India">India</option>
                                    <option value="Saudia">Saudia</option>
                                </select>
                            </div>
                            <div className='flex  justify-between gap-2'>
                                <div className='w-full space-y-2'>
                                    <input
                                        {...register("firstName")}
                                        className='w-full border border-silver p-3 rounded-md text-sm' placeholder='First name' />
                                    {errors.firstName && (
                                        <p className="text-red-500">⚠ {errors.firstName.message}</p>
                                    )}
                                </div>
                                <div className='w-full space-y-2'>
                                    <input
                                        {...register("lastName")}
                                        className='w-full border border-silver p-3 rounded-md text-sm' placeholder='Last name' />
                                    {errors.lastName && (
                                        <p className="text-red-500">⚠ {errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>
                            <input
                                {...register("Address")}
                                className='w-full border border-silver p-3 rounded-md text-sm' placeholder='Address' />
                            {errors.Address && (
                                <p className="text-red-500">⚠ {errors.Address.message}</p>
                            )}
                            <div className='flex justify-between gap-2'>
                                <div className='w-full'>
                                    <input
                                        {...register("City")}
                                        className='w-full border border-silver p-3 rounded-md text-sm' placeholder='City' />
                                    {errors.City && (
                                        <p className="text-red-500">⚠ {errors.City.message}</p>
                                    )}
                                </div>
                                <div className='w-full'>
                                    <input
                                        {...register("Postal")}
                                        className='w-full border border-silver p-3 rounded-md text-sm' placeholder='Postal Code' />
                                    {errors.Postal && (
                                        <p className="text-red-500">⚠ {errors.Postal.message}</p>
                                    )}
                                </div>
                            </div>
                            <input
                                {...register("Phone")}
                                className='w-full border border-silver p-3 rounded-md text-sm' placeholder='Phone number for order updates' />
                            {errors.Phone && (
                                <p className="text-red-500">⚠ {errors.Phone.message}</p>
                            )}
                            <div className='flex gap-2'>
                                <input type="radio" value="yes" {...register("updatesConsent")} />
                                <h1 className='text-sm'>Save this information for next time</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" value="no" {...register("updatesConsent")} />
                                <h1 className='text-sm'>Do not save this information</h1>
                            </div>
                            {errors.updatesConsent && (
                                <p className="text-red-500">⚠ {errors.updatesConsent.message}</p>
                            )}
                            <div className='space-y-3'>
                                <label className='block font-semibold text-xl' htmlFor="">Shipping method</label>
                                <div className='text-black p-3 bg-indigo-100 w-full outline-none rounded-md border border-silver text-sm'>Free Shipping</div>
                            </div>
                            <div className='space-y-3'>
                                <label className='block font-semibold text-xl' htmlFor="">Payment</label>
                                <label className='block  text-sm text-silver' htmlFor="">All transactions are secure and encrypted.</label>
                                <div className='text-black p-3 flex gap-3 bg-indigo-100 w-full outline-none rounded-md border border-silver text-sm'>
                                    <input type="radio" name="paymentMethod" value="cod" {...register("paymentMethod")} />
                                    <h1>Cash On Delivery</h1>
                                </div>
                                <div className='text-black p-3 flex gap-3  w-full outline-none rounded-md border border-silver text-sm'>
                                    <input type="radio" name="paymentMethod" value="jazzcash" {...register("paymentMethod")} />
                                    <h1>Jazz Cash</h1>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <label className='block font-semibold text-xl' htmlFor="">Billing address</label>
                                <div className='text-black p-3 flex gap-3 bg-indigo-100 w-full outline-none rounded-md border border-silver text-sm'>
                                    <input type="radio" name="billingAddress" value="same" {...register("billingAddress")} />
                                    <h1>Same as shipping address</h1>
                                </div>
                                <div className='text-black p-3 flex gap-3  w-full outline-none rounded-md border border-silver text-sm'>
                                    <input type="radio" name="billingAddress" value="different" {...register("billingAddress")} />
                                    <h1>Use a different billing address</h1>
                                </div>
                                <button
                                    type="submit"
                                    className='w-full bg-primary text-white text-lg font-bold rounded-md p-3'>Complete Your Order</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='p-5 space-y-4 border-l-2 xl:w-fit w-full'>
                    <div className='flex flex-col lg:flex-row xl:w-fit w-full items-center justify-between gap-4 lg:gap-20 '>
                        <div className='flex gap-4 items-center lg:gap-6'>
                            <img className='w-20 md:w-28 object-cover' src={image} alt="Lenovo" />
                            <div className='pt-2 space-y-2'>
                                <h1 className='text-sm text-gray-500'>{brand}</h1>
                                <h1 className='text-sm text-primary'>{title}</h1>
                                <h1 className='text-base text-red-500 font-bold'>Rs.{itemPrice * quantity}</h1>
                                <div className='flex justify-between'>
                                    <h1 className='text-sm'>Subtotal : </h1>
                                    <h2 className='text-sm'>Rs. {itemPrice * quantity}</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='text-sm'>Shipping : </h1>
                                    <h2 className='font-bold text-sm'>FREE</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='text-sm'>Total : </h1>
                                    <h2 className='text-sm'>Rs. {itemPrice * quantity}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
