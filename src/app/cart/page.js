"use client"
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineClose} from 'react-icons/ai';
import { useEffect, useState } from 'react';
const Cart = () => {
    const [cart,setCart] =  useState([])
    const [itemQuant, setItemQuant] = useState(1)
    const getCart = () => {
        if(typeof localStorage !== "undefined") {
             setCart(JSON.parse(localStorage.getItem('bayriteCart'))) || []
        }
        return;
    }
    useEffect(()=>{   
        getCart()
        console.log(cart)
        return;
    },[])
    const addCommasToNumberString = (numberString) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function onChange(e){
        setItemQuant(e.target.value)
    }
    return ( 
        <div className='px-5 pt-12 pb-10 flex flex-col gap-5'>
            <div className="flex justify-between w-full">
                <h1 className="NorthernTerritories text-[24px] max-sm:text-[18px]">Your Cart</h1>
                <Link href="/shop-all"><h4 className="text-[#e2b808] flex gap-1 items-center text-[15px] max-sm:text-[14px] cursor-pointer">Continue shopping <IoIosArrowForward /></h4></Link>
            </div>
            {cart.length == 0 ? 
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 flex flex-col items-center justify-center gap-5 h-[350px]'>
                    <h3 className=' text-[15px] max-sm:text-[14px] text-[#5c5c5c]'>Your Cart is empty</h3>
                    <Link href="/shop-all"><h3 className="p-3 bg-[#e2b808] w-52 text-[17px] max-sm:text-[15px] rounded-sm flex gap-1 items-center justify-center"><BsFillCartFill />Continue shopping </h3></Link>
                </div> :
                <div className='flex flex-col gap-5'>
                {cart.map(cartItem => (
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 flex items-center justify-between'>
                     <div className='flex items-center gap-5'>
                         <img src="https://bayrite.com/cdn/shop/products/Bayrite1_5e16b658-7640-4a80-bc98-4e47bc471482_723x723.jpg?v=1671302421" alt="" className='w-32'/>
                         <div>
                             <h3 className='NorthernTerritories text-[15px]'>{cartItem[0].name}</h3>
                             <h4 className='text-[15px] text-[#5c5c5c]'> <span className='font-bold'>Price</span> N{addCommasToNumberString(cartItem[0].price)}.00</h4>
                         </div>
                     </div>
                     <div className='flex items-center gap-12'>
                         <div className="w-28 border border-slate-400 shadow shadow-sm rounded-sm px-2 py-1 cursor-pointer">
                             <p className="text-[13px] text-[#bbb]">Quantity</p>
                             <select name="quantity" id="quantity" onChange={onChange} value={cartItem.quantity}  className="w-full">
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                             </select>
                         </div>
                         <h2 className='text-[18px] text-[#5c5c5c]'>N{addCommasToNumberString(cartItem[0].price)}.00</h2>
                         <div className='rounded-full bg-[#ddd] w-5 h-5 flex justify-center items-center cursor-pointer p-1'>
                             <AiOutlineClose />
                         </div>
                     </div>
                    </div>
                ))}
                {cart.length > 0 &&
                    <div className='flex flex-col gap-5'>
                        <Link href="/checkout"><h3 className="p-3 bg-[#e2b808] w-full text-[17px] max-sm:text-[15px] rounded-sm flex gap-1 items-center justify-center"><BsFillCartFill />Checkout</h3></Link>
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