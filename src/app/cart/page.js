"use client"
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillCartFill } from 'react-icons/bs';
import { FaLock } from "react-icons/fa";
import { AiOutlineClose} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useStore } from '../store/zustand';
const Cart = () => {
    const [cart,setCart] =  useState([])
    const [itemQuant, setItemQuant] = useState(1)
    const num = useStore(state => state.num)
    const setNum = useStore(state => state.setNum)
    const [sumTotal,setSumTotal] =  useState(0)
    const getCart = () => {
        if(typeof localStorage !== "undefined") {
             setCart(JSON.parse(localStorage.getItem('bayriteCart'))) || []
        }
        return;
    }
    useEffect(()=>{ 
        let cartTotal = 0
        if(typeof localStorage !== "undefined") {
            cartTotal = (JSON.parse(localStorage.getItem('bayriteCartTotal'))) || 0
        }
        setSumTotal(cartTotal)
        getCart()
        return;
    },[num])
    const addCommasToNumberString = (numberString) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function onChange(e,itemToUpdate){
        let subcart = []
        let cartTotal = 0
        if(typeof localStorage !== "undefined") {
            subcart = (JSON.parse(localStorage.getItem('bayriteCart'))) || []
            //cartTotal = (JSON.parse(localStorage.getItem('bayriteCartTotal'))) || 0
        }
        const updatedArray = subcart.map((item) => {
           
            if (item[0].name === itemToUpdate) {
                let basePrice = item[0].price
                //console.log(basePrice)
                let newPrice;
                newPrice = basePrice * e.target.value;
                //console.log(newPrice)
                
                cartTotal += basePrice
                //console.log(cartTotal)
                return {
                    ...item,
                    // Update the property you want to change
                    quantity: e.target.value,
                    total: item[0].price * e.target.value
                };
            //cart.push({...zodiacProduct, quantity: e.target.value})
            }
            return item;
        }) 
       
        setSumTotal(cartTotal)
        localStorage.setItem('bayriteCartTotal', JSON.stringify(cartTotal))
        localStorage.setItem('bayriteCart', JSON.stringify(updatedArray))
        setNum(e.target.value)
        cart.map((item) => {
            cartTotal+=item.total
            console.log(item.total)
           // console.log(cartTotal)
        })
    }
    
    function deleteCart(itemToDelete){
        let newArray
        const storedArray = JSON.parse(localStorage.getItem('bayriteCart')) || [];
        storedArray.map((item) => {
            newArray = storedArray.filter((item) => item[0].name !== itemToDelete);
        })
        localStorage.setItem('bayriteCart', JSON.stringify(newArray))
        setNum(itemToDelete)
    }
    return ( 
        <div className='px-5 pt-12 pb-10 flex flex-col gap-5'>
            <div className="flex justify-between w-full">
                <div>
                <h1 className="NorthernTerritories text-[24px] max-sm:text-[18px]">Your Cart</h1>
                <div className='min-[500px]:hidden flex items-center gap-1'>
                        <div className=''>
                            <p className='text-[13px] text-[#aaa]'>Subtotal</p>
                        </div>
                        <h2 className='text-[22px] max-[730px]:text-[14px] flex items-center'><TbCurrencyNaira className='text-[20px]'/>{addCommasToNumberString(sumTotal)}.00</h2>
                </div>
                </div>
                {cart.length == 0 ? 
                <Link href="/shop-all"><h4 className="text-[#e2b808] flex gap-1 items-center text-[15px] max-sm:text-[14px] cursor-pointer">Continue shopping <IoIosArrowForward /></h4></Link> 
                :
                <div className='flex  gap-6 items-center'>
                    <div className='max-[500px]:hidden'>
                        <div className='flex w-full justify-end'>
                            <p className='text-[13px] text-[#aaa]'>Subtotal</p>
                        </div>
                        <h2 className='text-[22px] max-[730px]:text-[14px] flex items-center'><TbCurrencyNaira className='text-[28px]'/>{addCommasToNumberString(sumTotal)}.00</h2>
                    </div>
                    <Link href="/checkout"><h3 className="px-4 py-2 bg-[#e2b808] w-full text-[17px] max-sm:text-[15px] rounded-sm flex gap-2 items-center justify-center"><FaLock />Checkout</h3></Link>
                </div>
            }
            </div>
            {cart.length == 0 ? 
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 flex flex-col items-center justify-center gap-5 h-[350px]'>
                    <h3 className=' text-[15px] max-sm:text-[14px] text-[#5c5c5c]'>Your Cart is empty</h3>
                    <Link href="/shop-all"><h3 className="p-3 bg-[#e2b808] w-52 text-[17px] max-sm:text-[15px] rounded-sm flex gap-1 items-center justify-center"><BsFillCartFill />Continue shopping </h3></Link>
                </div> :
                <div className='flex flex-col gap-5'>
                {cart.map(cartItem => (
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 flex max-[730px]:flex-col min-[730px]:items-center justify-between'>
                     <div className='flex items-center gap-5'>
                         <img src={cartItem[0].images[0]} alt="" className='w-32'/>
                         <div>
                             <h3 className='NorthernTerritories text-[15px]'>{cartItem[0].name}</h3>
                             <h4 className='text-[15px] text-[#5c5c5c] flex items-center gap-1'> <span className='font-bold'>Price</span> <span className=' flex items-center gap-0'><TbCurrencyNaira className='text-[20px]'/>{addCommasToNumberString(cartItem[0].price)}.00</span></h4>
                         </div>
                     </div>
                     <div className='flex items-center max-[730px]:justify-between gap-12'>
                         <div className="w-28 max-[730px]:w-24 border border-slate-400 shadow shadow-sm rounded-sm px-2 py-1 max-[730px]:py-0 cursor-pointer">
                             <p className="text-[13px] text-[#bbb]">Quantity</p>
                             <select name="quantity" id="quantity" onChange={()=>onChange(event,cartItem[0].name)} value={cartItem.quantity}  className="w-full">
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                             </select>
                         </div>
                         <h2 className='text-[18px] text-[#5c5c5c] flex items-center'><TbCurrencyNaira className='text-[22px]'/>{addCommasToNumberString(cartItem.total)}.00</h2>
                         <div className='rounded-full bg-[#ddd] w-5 h-5 flex justify-center items-center cursor-pointer p-1' onClick={()=>deleteCart(cartItem[0].name)}>
                             <AiOutlineClose />
                         </div>
                     </div>
                    </div>
                ))}
                {cart.length > 0 &&
                    <div className='flex flex-col gap-5'>
                        <Link href="/checkout"><h3 className="p-3 bg-[#e2b808] w-full text-[17px] max-sm:text-[15px] rounded-sm flex gap-1 items-center justify-center"><FaLock />Checkout</h3></Link>
                        <div className='flex justify-center'>
                        <Link href="/shop-all"><h4 className='text-[#e2b808] flex gap-1 items-center text-[15px] max-sm:text-[14px] cursor-pointer'>Continue shopping <IoIosArrowForward /></h4></Link>
                        </div>
                    </div>
                }
            </div>
            }
        </div>
     );
}
 
export default Cart;