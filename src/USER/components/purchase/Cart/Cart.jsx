import { Card, ListItem } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../../App'

function Cart() {
    const [result, setResult] = useState([])
    const {carts,refresh,setRefresh}  = useContext(Context)
    console.log(carts,'va;uess');
  
    const handleIncrementQuantity = async (id) => {
        try {
            const response = await axios.post(`http://localhost:3000/api/cart/increment-cart/${JSON.parse(localStorage.getItem("user"))._id}/${id}`)

            setRefresh(!refresh)
        } catch (error) {
            console.log(error);
        }
    }
    const handleDescrementQuantity = async (id) => {
        try {
            const response = await axios.post(`http://localhost:3000/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("user"))._id}/${id}`)
            setRefresh(!refresh)
        } catch (error) {
            console.log(error);
        }
    }
    let totalAmount = 0
    return (
        <div className=''>
            <div className='flex gap-3 justify-center'>
                <div className=''>
                    <div className='bg-cyan-100 h-96 w-96 my-4 border-2 border-red-200'>
                        <div className='flex justify-center'>
                            <h1 className='text-4xl text-red-500 '>Your Bag</h1>
                        </div>
                        <div className='grid grid-cols-3 overflow-scroll gap-4 ml-3 items-center justify-center'>
                            {
                                carts.map((item) => {
                                    console.log(totalAmount, 'total');
                                    totalAmount = totalAmount + (item.product.price * item.quantity)
                                    return (
                                        <>
                                            <Card className='mt-4 '>
                                                <div className=''>
                                                    <div className='bg-slate-300 w-32 h-36 rounded-md '>
                                                        <img src={item.product.image} className='h-28 w-20 flex justify-center items-center ' />
                                                    </div>
                                                    <div className=''>
                                                        <p className='flex items-center ml-3 rounded-sm'>{item.product.pdtname}</p>
                                                        <p className='flex items-center ml-3 rounded-sm'>{item.product.price * item.quantity}</p>
                                                    </div>
                                                    <div className='bg-red-300 ml-3 flex items-center justify-center border-2 border-slate-400 rounded-md gap-3'>
                                                        <button onClick={() => handleIncrementQuantity(item.productId)} className='font-bold'  >+</button>{item.quantity} <p />
                                                        <button onClick={() => handleDescrementQuantity(item.productId)} className={`font-bold ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} `}  >-</button> 
                                                        {/* disabled={item.quantity === 1} */}

                                                    </div>
                                                </div>
                                            </Card>

                                        </>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
                <div className='bg-red-100 h-96 w-96  my-4 border-2 border-cyan-100  '>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl text-cyan-800'>Order Summary</h1>
                    </div>
                    <div className='ml-5'>
                        <div className='my-4 '>
                            <h1 className='text-2xl font-semibold'>Price Details</h1>
                        </div>
                        <div className='flex  gap-48 font-light '>
                            <p className='text-sm'>Bag MRP(2 items)</p>
                            <p className='text-sm'>price</p>
                        </div>
                        <div className='flex gap-60'>
                            <p className='font-light'>Shipping</p>
                            <p className='text-green-700'>Free</p>
                        </div>
                        <div className='flex gap-64 '>
                            <p className='font-semibold'>price</p>
                            <p className=''>total {totalAmount} </p>
                            {console.log(totalAmount, 'ttt')}
                        </div>
                    </div>
                    <div className='border-b-2 mt-10 border-slate-300'>

                    </div>
                    <div className='mt-5 flex justify-around'>
                        <p className=''>Grand total</p>
                        <Link to={'/user-orders'} ><button className='text-xl bg-cyan-400 w-28 h-10 flex items-center justify-center rounded-md text-red-400 hover:bg-cyan-800'>PlaceOrder</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
