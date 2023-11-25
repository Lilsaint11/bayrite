"use client";
import Link from "next/link";
import { BiLogoFacebook,BiLogoInstagramAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { useState } from "react";
import { CiDeliveryTruck } from 'react-icons/ci';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineClose} from 'react-icons/ai';

import Modal from "react-modal";
import { useStore } from "../store/zustand";

const QuickShop = ({modalDetails}) => {
    const productModalState = useStore(state => state. productModalState)
    const closeproductModal =  useStore(state => state.closeproductModal)
    const [imageSlide, setImageSlide] = useState(0)
    const addCommasToNumberString = (numberString) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return ( 
        <div className="z-40">
            <div  className="fixed top-0  left-[50%] translate-x-[-50%]  h-screen w-screen bg-[rgba(0,0,0,0.7)] z-40" onClick={closeproductModal}></div>
            <div
             className="overflow-scroll w-[900px] max-[900px]:w-[600px] max-sm:w-screen h-full max-sm:h-screen fixed top-10 max-sm:top-0 left-[50%] translate-x-[-50%] bg-white rounded-xl shadow-md z-[100]">
                  <div className="flex w-full justify-end sm:mb-2 mb-1 cursor-pointer mt-5 pr-5" >
                    <AiOutlineClose onClick={closeproductModal}/>
                  </div>
                  <div className="flex max-sm:flex-col gap-3 p-5">
                    <div className="w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                        <img src={modalDetails.bigImages[imageSlide]} alt="" className='object-contain w-[450px] max-sm:w-[350px]'/>
                        <div className="flex gap-2">
                                {modalDetails.images.map((img, index) => (
                                    <div key={index} onClick={()=>setImageSlide(index)} className={`${index == imageSlide && "border-2 border-[#e2b808]"} p-1 w-16 rounded-md`} >
                                        <img src={img} alt="" className='object-contain  cursor-pointer'/>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="sm:w-[45%] flex flex-col gap-2">
                        <h1 className="text-[24px] max-sm:text-[18px] NorthernTerritories">{modalDetails.name}</h1>
                        <div>
                            <p className="text-[14px]">{modalDetails.reviews} reviews</p>
                        </div>
                        <h3 className="text-[24px] max-sm:text-[18px] text-[#333]">N{addCommasToNumberString(modalDetails.price)}.00</h3>
                        <div className="flex flex-col gap-3 max-sm:mt-3">
                            <div className="w-32 max-sm:w-28 border border-slate-400 shadow shadow-sm rounded-sm px-2 sm:py-1 cursor-pointer">
                                <p className="text-[13px] text-[#bbb]">Quantity</p>
                                <select name="" id="" className="w-full">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="w-full h-12">
                                <button className="w-full h-full  rounded-md border border-slate-300 text-[18px]">Add to cart</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <h4 className="flex gap-1"><CiDeliveryTruck className="text-[20px] mt-1"/> - 2-3 Business days Nationwide delivery</h4>
                            <h4 className="flex items-center gap-1"><BsArrowReturnLeft className="mt-1 text-[16px]"/> - 12 - Month Warranty</h4>
                            <h4  className="flex  gap-1"><RiWhatsappFill className="text-green-500 mt-1 text-[20px]"/><span>- Need any help ? Chat with us on <span className="text-[#e2b808]">Whatsapp</span></span> </h4>
                        </div>
                        <div className="my-7 flex flex-col gap-5">
                            <h3 className="NorthernTerritories text-[14px]">Follow us:</h3>
                            <div className='text-[#5c5c5c] flex gap-2'>
                            <BiLogoFacebook className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                            <BiLogoInstagramAlt className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                            <MdEmail className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                        </div>
                        <div className="w-full h-12">
                                <button className="w-full h-full bg-[#e2b808] rounded-md text-[18px]">Buy it now</button>
                        </div>
                        <div className="mt-5"> 
                            
                            <div className="flex flex-col gap-5">
                                <h3 className="text-[20px] max-sm:text-[16px] font-bold italic text-[#4d4d4d]">ABOUT THIS NECKLACE :</h3>
                                <p className=" text-[18px] max-sm:text-[14px]  italic">Perfectly personal, perfectly giftable.</p>
                                <p className=" text-[18px] max-sm:text-[14px] italic">Our Zodiac identity necklaces make the perfect all-year-round present for loved ones, Mums, BFFs or yourself.</p>
                                <p className=" text-[18px] max-sm:text-[14px] italic">Truly refined and hand set with Vintage 18k Gold plated Horoscope link Chain.</p>

                                <h3 className="text-[20px] max-sm:text-[16px]  font-bold text-[#4d4d4d]">GEMINI:</h3>
                                <p className="text-[18px] max-sm:text-[14px]">(May 21 - June 20)</p>
                                <p className="text-[18px] max-sm:text-[14px]">Geminis are a mix of light and darkness, and are perfectly represented by the Twins. You can see both sides of every issue and are highly intelligent. You have a rich imagination and are also quick witted.</p>

                                <h3  className="text-[20px] max-sm:text-[16px]  font-bold italic text-[#4d4d4d]">DETAILS:</h3>
                                <p className="text-[18px] max-sm:text-[14px]">- Vintage 18k Gold plated Horoscope link Chain.</p>
                                <p className="text-[18px] max-sm:text-[14px]">- Chain Length: 16" with 2" extender</p>
                                <p className="text-[18px] max-sm:text-[14px]">- Mother Shell Round Zodiac Sign</p>
                                <p className="text-[18px] max-sm:text-[14px]">- Stainless Steel)</p>

                                <h3  className="text-[20px] max-sm:text-[16px]  font-bold italic text-[#4d4d4d]">12 MONTHS, 12 ZODIACS. EASILY PICK THE RIGHT NECKLACE:</h3>
                                <div className="flex flex-col gap-3">
                                    <p className="text-[17px] max-sm:text-[14px]">Aries: March 21 – April 19</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Taurus: April 20 – May 20</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Gemini: May 21 – June 20</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Cancer: June 21 – July 22</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Leo: July 23 – August 22</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Virgo: August 23 – September 22</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Libra: September 23 – October 22</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Scorpio: October 23 – November 21</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Sagittarius: November 22 – December 21</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Capricorn: December 21 – January 19</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Aquarius: January 20 – February 18</p>
                                    <p className="text-[17px] max-sm:text-[14px]">Pisces: February 19 – March 20</p>
                                </div>
                            </div> 
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default QuickShop;