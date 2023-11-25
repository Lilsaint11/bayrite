"use client";
import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [cart,setCart] =  useState([])
    const [total,setTotal] =  useState()
    const [showSummary,setShowSummary] =  useState(false)
    const [formData, setFormData] = useState({
        email: "",
        firstName:"",
        lastName: "",
    });
    const {email,firstName,lastName} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }
    
    useEffect(()=>{
        let cart = []
        let total = 0
        if(typeof localStorage !== "undefined") {
            cart = (JSON.parse(localStorage.getItem('bayriteCart'))) || []
        }
        setCart(cart)
        cart.map((item) => {
            total += item. total
        })
        setTotal(total)
    },[])
    const addCommasToNumberString = (numberString) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const publicKey = process.env. NEXT_PUBLIC__PAYSTACK_PUBLIC_KEY
      const amount =total * 100
      const componentProps = {
        email,
        amount,
        publicKey,
        metadata: {
           cart
          },
        text: "Pay now",
        onSuccess: () =>
        toast("Thanks for sending us funds egbon/aunty"),
        onClose: () => toast("Boss buy this thing na, na original ajeh"),
      }
    return ( 
        <div className="px-20 max-sm:px-5 py-10 bg-[#e2b808] flex justify-between">
            <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <h1 className="text-[24px] font-bold">Contact</h1>
                <div className="flex flex-col gap-2">
                    <input type="email" name="" id="email" value={email} onChange={onChange} placeholder="Email" className="w-full h-12 rounded-md px-2"/>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="" id="" className="w-4 h-4 cursor-pointer"/>
                        <p className="text-[14px]">Email me with news and offers</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-4">
                <h1 className="text-[24px] font-bold">Delivery</h1>
                <div className="flex flex-col gap-3 text-[14px]">
                    <select name="Country/region" id="quantity" className="w-full h-12 rounded-md px-2">
                        <option>Country/region</option>
                        <option>Nigeria</option>
                    </select>
                    
                    <div className="flex gap-3">
                        <input type="text" name="" id="firstName" value={firstName} onChange={onChange} placeholder="First Name" className="w-full h-12 rounded-md px-2"/>
                        <input type="text" name="" id="lastName" value={lastName} onChange={onChange} placeholder="Last Name" className="w-full h-12 rounded-md px-2"/>
                    </div>
                    <input type="text" name="" id="" placeholder="Address" className="w-full h-12 rounded-md px-2"/>
                    <input type="text" name="" id="" placeholder="Apartment, suite, etc. (optional)" className="w-full h-12 rounded-md px-2"/>
                    <div className="flex gap-3">
                        <input type="text" name="" id="" placeholder="City" className="w-full h-12 rounded-md px-2"/>
                        <select name="state" id="quantity" className="w-full h-12 rounded-md px-2">
                            <option>State</option>
                            <option>Lagos</option>
                            <option>Kwara</option>
                            <option>FCT</option>
                            <option>Benin</option>
                        </select>
                        <input type="text" name="" id="" placeholder="Postal code" className="w-full h-12 rounded-md px-2"/>
                    </div>
                    <input type="text" name="" id="" placeholder="Phone" className="w-full h-12 rounded-md px-2"/>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" className="cursor-pointer"/>
                    <p>Save this information for next time</p>
                </div>
            </div>
            <div>
            <div className="flex justify-between sm:hidden">
                <div className="flex gap-2">
                    <h4 className="font-bold">Total</h4>
                    {total && <p className="text-[rgba(0,0,0,0.56)]">NGN <span className="font-bold text-black">₦{addCommasToNumberString(total)}.00</span></p>}
                </div>
                <p className="text-[14px] cursor-pointer text-[#333]" onClick={()=>setShowSummary(!showSummary)}>{!showSummary ? "Show summary":"Hide summary"}</p>
            </div>
            </div>
           {showSummary &&
           <div className="bg-white w-full p-5 flex flex-col gap-3 sm:hidden">
                {cart && 
                    cart.map(item => (
                        <div className="flex items-center gap-5 justify-between">
                            <div className="flex items-center gap-5 max-w-20">
                                <div className="relative">
                                    <img src={item[0].images[0]} alt="" className="w-16 border border-[rgb(218,218,218)] rounded-md" />
                                    <p className='absolute -right-2 -top-2 bg-[rgba(0,0,0,0.56)] text-white rounded-full w-5 h-5 flex items-center justify-center min-[730px]:font-semibold cursor-pointer text-[14px]'>{item.quantity}</p>
                                </div>
                                <p className="text-[14px]">{item[0].name}</p>
                            </div>
                            <p className="text-[14px]">₦{addCommasToNumberString(item.total)}.00</p>
                        </div>
                    ))
                }
                <div className="flex items-center gap-2 h-12">
                    <input type="text" name="" id="" placeholder="Discount code" className="w-full h-full border border-[rgb(218,218,218)] rounded-md px-2"/>
                    <button className="text-[14px] w-20 h-full bg-[rgb(218,218,218)]  border border-[rgb(218,218,218)] rounded-md">Apply</button>
                </div>
                <div className="text-[14px] flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h4 className="text-[rgba(0,0,0,0.56)]">Subtotal</h4>
                        {total && <p className="font-bold">₦{addCommasToNumberString(total)}.00</p>}
                    </div>
                    <div className="flex justify-between">
                        <h4 className="text-[rgba(0,0,0,0.56)]">Shipping</h4>
                        <p className="text-[12px] text-[rgba(0,0,0,0.56)]">Enter shipping address</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-bold">Total</h4>
                        {total && <p className="text-[rgba(0,0,0,0.56)]">NGN <span className="font-bold text-black">₦{addCommasToNumberString(total)}.00</span></p>}
                    </div>
                </div>
            </div>
            }
           
            <PaystackButton {...componentProps} className="w-full bg-black h-12 text-white flex items-center justify-center rounded-md"/>
            </div>
            <div className="bg-white w-2/5 p-5 flex flex-col gap-3 sticky top-40 h-screen max-sm:hidden">
                {cart && 
                    cart.map(item => (
                        <div className="flex items-center gap-5 justify-between">
                            <div className="flex items-center gap-5 max-w-20">
                                <div className="relative">
                                    <img src={item[0].images[0]} alt="" className="w-16 border border-[rgb(218,218,218)] rounded-md" />
                                    <p className='absolute -right-2 -top-2 bg-[rgba(0,0,0,0.56)] text-white rounded-full w-5 h-5 flex items-center justify-center min-[730px]:font-semibold cursor-pointer text-[14px]'>{item.quantity}</p>
                                </div>
                                <p className="text-[14px]">{item[0].name}</p>
                            </div>
                            <p className="text-[14px]">₦{addCommasToNumberString(item.total)}.00</p>
                        </div>
                    ))
                }
                <div className="flex items-center gap-2 h-12">
                    <input type="text" name="" id="" placeholder="Discount code" className="w-full h-full border border-[rgb(218,218,218)] rounded-md px-2"/>
                    <button className="text-[14px] w-20 h-full bg-[rgb(218,218,218)]  border border-[rgb(218,218,218)] rounded-md">Apply</button>
                </div>
                <div className="text-[14px] flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h4 className="text-[rgba(0,0,0,0.56)]">Subtotal</h4>
                        {total && <p className="font-bold">₦{addCommasToNumberString(total)}.00</p>}
                    </div>
                    <div className="flex justify-between">
                        <h4 className="text-[rgba(0,0,0,0.56)]">Shipping</h4>
                        <p className="text-[12px] text-[rgba(0,0,0,0.56)]">Enter shipping address</p>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="font-bold">Total</h4>
                        {total && <p className="text-[rgba(0,0,0,0.56)]">NGN <span className="font-bold text-black">₦{addCommasToNumberString(total)}.00</span></p>}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
       
     );
}
 
export default Checkout;