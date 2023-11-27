"use client";
import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io';
import { RiFileListLine } from 'react-icons/ri';
import { BsGrid } from 'react-icons/bs';
import { useState } from "react";
import { client } from "../utils/configSanity";
import { useStore } from "../store/zustand";
import QuickShop from "../components/quickShop";
import {TbCurrencyNaira } from 'react-icons/tb';
import Rating from '@mui/material/Rating';


const ShopAll = () => {
    const [zodiacs,setZodiacs] = useState()  
    const [gemstones,setGemstones] = useState()
    const [modalDetails,setModalDetails] = useState()
    const [loading,setLoading] = useState(true)
    const productModalState = useStore(state => state.productModalState)
    const openproductModal =  useStore(state => state.openproductModal)

    async function getData(){
        const query = `*[_type == 'zodiacs']`;
        const gemstoneQuery = `*[_type == 'gemstones']`;
        const data = await client.fetch(query);
        const gemstoneData = await client.fetch(gemstoneQuery);
        setZodiacs(data)
        setGemstones(gemstoneData)
        setLoading(false)
    }
    getData()
    const addCommasToNumberString = (numberString) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function openModal(details){
        openproductModal()
        setModalDetails(details)
    }
  
    return ( 
        <div className="p-3 sm:p-10 flex flex-col gap-5">
            {productModalState &&  <QuickShop modalDetails={modalDetails} />}
            <div className="flex gap-2 items-center">
                <Link href="/"><h3 className="text-[#e2b808]">Home</h3></Link>
                <IoIosArrowForward className="text-[10px]"/>
                <h3 className="text-[#5c5c5c]">Shop All</h3>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="NorthernTerritories text-[28px] max-sm:text-[24px]">Shop All</h1>
                <h3 className="max-sm:text-[14px]">Nothing but rare gems. Explore 10 + authentic eye-catching  styles and add meaning to any look.</h3>
            </div>
            <div className="px-5 py-4 w-full bg-[#eee] flex  justify-between">
                <div className="flex gap-5">
                    <h2 className="font-bold text-[18px] text-[#4d4d4d] max-sm:text-[#e2b808] max-sm:cursor-pointer">Sort by</h2>
                    <select name="filter" id="" className="bg-transparent text-[14px] cursor-pointer max-sm:hidden">
                        <option value="featured">Featured</option>
                        <option value="saab">Alphabetically, A-Z</option>
                        <option value="mercedes">Alphabetically, Z-A</option>
                        <option value="audi">Price, low to high</option>
                        <option value="audi">Price, high to low</option>
                        <option value="audi">Date, old to new</option>
                        <option value="audi">Date, new to old</option>
                    </select>
                </div>
                <div className="flex gap-10">
                    <div className="flex gap-5 items-center max-sm:hidden">
                        <h3 className="font-bold text-[18px] text-[#4d4d4d]">Show</h3>
                        <h4 className="text-[#e2b808] cursor-pointer">24</h4>
                        <h4 className="text-[#5c5c5c] cursor-pointer">36</h4>
                        <h4 className="text-[#5c5c5c] cursor-pointer">48</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h3 className="font-bold text-[18px] text-[#4d4d4d] max-sm:text-[#e2b808]">View as</h3>
                        <BsGrid className="text-[#e2b808] text-[20px] cursor-pointer" />
                        <RiFileListLine className="text-[#5c5c5c] text-[20px] cursor-pointer" />
                    </div>
                </div>
            </div>
            {loading && 
                <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-5'>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 min-[600px]:ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 min-[600px]:ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 min-[600px]:ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 min-[600px]:ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 min-[600px]:ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 min-[600px]:ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 min-[600px]:ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 min-[600px]:ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 min-[600px]:ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 min-[600px]:ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 min-[600px]:ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 min-[600px]:ml-5 bg-slate-200"></div>
                    </div>
                </div>
            }
            <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-5'>
                {zodiacs && zodiacs.map(zodiac => (
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px] overflow-hidden  max-[380px]:p-2 max-[450px]:h-[285px]'>
                    <Link href={"/products/" + zodiac.slug.current} >
                      <div className='flex items-center justify-center'>
                        <div className=' '>
                          <img src={zodiac.images} alt="" className='object-contain'/>
                        </div>
                      </div>
                      <h3 className='text-[24px] max-[730px]:text-[18px] text-[#e2b808] text-left flex items-center'><TbCurrencyNaira />{addCommasToNumberString(zodiac.price)}.00</h3>
                      <h4 className='text-[15px] max-[730px]:text-[12px] text-left hover:text-[#e2b808]'>{zodiac.name}</h4>
                      <div className="flex max-[430px]:flex-col min-[430px]:items-center gap-1 mt-2">
                        <Rating name="read-only" value={zodiac.reviews}  size="small" readOnly />
                        <p className='text-[12px] text-left' onClick={openproductModal}>{zodiac.reviews} reviews</p>
                      </div>
                      </Link>
                      <div className='flex flex-col h-full w-full '>
                        <div className={`flex max-[1200px]:flex-col max-md:hidden justify-between gap-3 mt-5 w-full `}>
                          <button className='text-black border border-slate-300 p-2 rounded-sm text-[14px] w-full' onClick={()=>openModal(zodiac)}>Quick shop</button>
                          <button className='text-black bg-[#e2b808] p-2 rounded-sm text-[14px] w-full'>Add to cart</button>
                        </div>
                      </div>
                    </div>
                ))}
                {gemstones && gemstones.map(gemstone => (
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer  sm:h-[340px] min-[1000px]:hover:h-[400px] overflow-hidden  max-[380px]:p-2 max-[380px]:h-[245px]'>
                    <Link href={"/products/" + gemstone.slug.current} >
                    <div className='flex items-center justify-center'>
                        <div className=''>
                        <img src={gemstone.images} alt="" className='object-contain'/>
                        </div>
                    </div>
                    <h3 className='text-[24px] max-[730px]:text-[18px] text-[#e2b808] text-left flex items-center'><TbCurrencyNaira />{addCommasToNumberString(gemstone.price)}.00</h3>
                    <h4 className='text-[15px] max-[730px]:text-[12px] text-left hover:text-[#e2b808]'>{gemstone.name}</h4>
                    <div className="flex items-center gap-1 mt-2">
                        <Rating name="read-only" value={gemstone.reviews}  size="small" readOnly />
                        <p className='text-[12px] text-left' onClick={openproductModal}>{gemstone.reviews} reviews</p>
                    </div>
                    </Link>
                    <div className='flex flex-col h-full w-full '>
                        <div className={`flex max-[1200px]:flex-col max-md:hidden justify-between gap-3 mt-5 w-full `}>
                        <button className='text-black border border-slate-300 p-2 rounded-sm text-[14px] w-full' onClick={()=>openModal(gemstone)}>Quick shop</button>
                        <button className='text-black bg-[#e2b808] p-2 rounded-sm text-[14px] w-full'>Add to cart</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ShopAll;