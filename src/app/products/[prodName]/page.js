"use client";
import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io';
import { BiLogoFacebook,BiLogoInstagramAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { useState } from "react";
import { CiDeliveryTruck } from 'react-icons/ci';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { groq } from "next-sanity";
import { useParams } from "next/navigation";
import { client } from "@/app/utils/configSanity";
import { useStore } from "@/app/store/zustand";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
    const params = useParams()
    const [zodiacProduct, setZodiacProduct] = useState([])
    const [gemstoneProduct, setGemstoneProduct] = useState([])
    const [imageSlide, setImageSlide] = useState(0)
    const [itemQuant, setItemQuant] = useState(1)
    const num = useStore(state => state.num)
    const setNum = useStore(state => state.setNum)
    let totalCartPrice = 0
    function addToCart(){
        let cart = []
        if(typeof localStorage !== "undefined") {
            cart = (JSON.parse(localStorage.getItem('bayriteCart'))) || []
            totalCartPrice = (JSON.parse(localStorage.getItem('bayriteCartTotal'))) || 0
        } 
        if(zodiacProduct.length > 0){
         let total =zodiacProduct[0].price * itemQuant
         totalCartPrice += total
         cart.push({...zodiacProduct, quantity: itemQuant, total: total})
         setNum(total)
        }else if(gemstoneProduct.length > 0){
            let total = gemstoneProduct[0].price * itemQuant
            totalCartPrice += total
            cart.push({...gemstoneProduct, quantity: itemQuant,total: total})
            setNum(total)
        } 
        localStorage.setItem('bayriteCart', JSON.stringify(cart))
        localStorage.setItem('bayriteCartTotal', JSON.stringify(totalCartPrice))
        toast("Item added to cart")
    }

    function onChange(e){
        setItemQuant(e.target.value)
    }

    //get the single product data from sanity
    async function slugdata(){
        const product = await client.fetch(groq`*[_type == "zodiacs"   && slug.current == "${params.prodName}"]`)
        setZodiacProduct(product)
        const productGem = await client.fetch(groq`*[_type == "gemstones"   && slug.current == "${params.prodName}"]`) || []
        setGemstoneProduct(productGem)
    }
    //call the function
    slugdata()

    const [desc, setDesc] = useState(true)

    const remarks = [
        {title:"Sleek", nameDate:"Ladidi Ahmed on Feb 12, 2023",desc:"This piece is sleek as it appears"},
        {title:"Strong", nameDate:"Yerinis Isa on Feb 12, 2023", desc:"This necklace doesn't fade"},
        {title:"Best", nameDate:"Abdulwasiu Ayorinde on Feb 12, 2023", desc:"This is simply the best jewelsry case"},
        {title:"Refined", nameDate:"Yetunde Aiyeola on Feb 12, 2023", desc:"This is simply the best"},
        {title:"Sparkling", nameDate:"Hamida Noheem on Feb 12, 2023", desc:"This just sparkles my heart"},
    ]

    const addCommasToNumberString = (numberString) =>{
        return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      
    return ( 
        <div className="p-7 flex flex-col gap-5">
             <div className="flex gap-2 items-center">
                <Link href="/"><h3 className="text-[#e2b808]">Home</h3></Link>
                <IoIosArrowForward className="text-[10px]"/>
               {zodiacProduct.length > 0 && <h3 className="text-[#5c5c5c]">{zodiacProduct[0].name}</h3> }
               {gemstoneProduct.length > 0 && <h3 className="text-[#5c5c5c]">{gemstoneProduct[0].name}</h3>}
            </div>
            <div>
                <div className="flex gap-5  max-sm:flex-col">
                    {gemstoneProduct.length > 0 &&
                        <div className="w-full flex flex-col gap-3">
                            <img src={gemstoneProduct[0].bigImages[imageSlide]} alt="" className='object-contain w-[430px] h-[430px] max-sm:w-[350px]'/>
                            <div className="flex gap-2">
                                {gemstoneProduct[0].images.map((img, index) => (
                                    <div key={index} onClick={()=>setImageSlide(index)} className={`${index == imageSlide && "border-2 border-[#e2b808]"} p-1 w-16 rounded-md`} >
                                        <img src={img} alt="" className='object-contain  cursor-pointer'/>
                                    </div>
                                ))}
                            </div>
                        </div> 
                    }
                    {zodiacProduct.length > 0 &&
               
                        <div className="w-full">
                            <img src={zodiacProduct[0].bigImages[imageSlide]} alt="" className='object-contain w-[430px] h-[430px]'/>
                            <div className="flex gap-2">
                                {zodiacProduct[0].images.map((img, index) => (
                                    <div key={index} onClick={()=>setImageSlide(index)} className={`${index == imageSlide && "border-2 border-[#e2b808]"} p-1 w-16 rounded-md`} >
                                        <img src={img} alt="" className='object-contain  cursor-pointer'/>
                                    </div>
                                ))}
                            </div>
                        </div>  
                    } 
                    <div className="w-full flex flex-col gap-2">
                        {gemstoneProduct.length > 0 &&
                            <div className=" flex flex-col gap-2">
                                <h1 className="text-[24px]  max-sm:text-[18px] NorthernTerritories">{gemstoneProduct[0].name}</h1> 
                                <div>
                                    <p className="text-[14px]">{gemstoneProduct[0].reviews} reviews</p>
                                </div>
                                <h3 className="text-[24px]  max-sm:text-[18px] text-[#333]">N{addCommasToNumberString(gemstoneProduct[0].price)}.00</h3>
                            </div>
                        }
                        {zodiacProduct.length > 0 &&
                            <div className=" flex flex-col gap-2">
                                <h1 className="text-[24px]  max-sm:text-[18px] NorthernTerritories">{zodiacProduct[0].name}</h1> 
                                <div>
                                    <p className="text-[14px]">{zodiacProduct[0].reviews} reviews</p>
                                </div>
                                <h3 className="text-[24px]  max-sm:text-[18px] text-[#333]">N{addCommasToNumberString(zodiacProduct[0].price)}.00</h3>
                            </div>
                        }
                        <div className="flex gap-3">
                            <div className="w-32 max-sm:w-28 border border-slate-400 shadow shadow-sm rounded-sm px-2 py-1 cursor-pointer">
                                <p className="text-[13px] text-[#bbb]">Quantity</p>
                                <select name="quantity" id="quantity" onChange={onChange} className="w-full">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <button className="w-full h-full bg-[#e2b808] rounded-sm text-[18px]" onClick={addToCart}>Add to cart</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <h4 className="flex items-center gap-1"><CiDeliveryTruck className="text-[20px]"/> - 2-3 Business days Nationwide delivery</h4>
                            <h4 className="flex items-center gap-1"><BsArrowReturnLeft className="mt-1 text-[16px]"/> - 12 - Month Warranty</h4>
                            <h4  className="flex items-center gap-1"><RiWhatsappFill className="text-green-500 mt-1 text-[20px]"/>- Need any help ? Chat with us on <span>Whatsapp</span> </h4>
                        </div>
                        <div className="my-7 flex flex-col gap-5">
                            <h3 className="NorthernTerritories text-[14px]">Follow us:</h3>
                            <div className='text-[#5c5c5c] flex gap-2'>
                            <BiLogoFacebook className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                            <BiLogoInstagramAlt className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                            <MdEmail className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                        </div>
                        <div className="mt-5"> 
                            <div className="flex gap-2 border-b border-slate-200 mb-10">
                                <h3 className="border border-slate-200 rounded-tl-md rounded-tr-md  p-2 text-[18px] max-sm:text-[12px] font-bold cursor-pointer" onClick={()=>setDesc(true)}>Description</h3>
                                <h3 className="border border-slate-200 rounded-tl-md rounded-tr-md p-2 text-[18px] max-sm:text-[12px] cursor-pointer" onClick={()=>setDesc(false)}>Jewellery Warranty</h3>
                            </div>
                            {desc ? 
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
                            : 
                            <div>
                                <p>Introducing our new <strong>12-month warranty</strong> for all of our exquisite jewellery pieces! At Bayrite, we are committed to providing our customers with the highest quality products and exceptional customer service.</p>
                                <p>Our 12-month warranty ensures that your jewellery is protected against any manufacturing defects, giving you peace of mind with your purchase. If there are any issues with your jewellery within the first year of ownership, we will repair or replace the piece at no cost to you.</p>
                                <p>We take great pride in the craftsmanship of our jewellery and stand behind every piece we sell. Our warranty is a testament to our confidence in the durability and longevity of our products.</p>
                                <p>Experience the beauty and elegance of our jewellery with the added security of our 12-month warranty. Shop with confidence at Bayrite and let us help you make lasting memories with our stunning ieces.</p>
                            </div> }
                        </div>

                    </div>
                    </div>
                </div>
                
                <div  className="border border-slate-400 px-5 py-8 flex flex-col gap-5 shadow shadow-sm shadow-slate-300">
                    <h2 className="NorthernTerritories">Customer Reviews</h2>
                    <div b className="flex justify-between">
                        <h4 className="text-[17px]  text-[#949494]">Based on 5 reviews</h4>
                        <h4 className="border border-slate-400 px-4 py-2 rounded-sm cursor-pointer hover:text-[#e2b808] hover:border-[#e2b808]">Write a review</h4>
                    </div>
                </div>
                <div  className="border border-t-0 border-slate-400 shadow shadow-sm shadow-slate-300 px-5 py-8 grid grid-cols-2 max-sm:grid-cols-1  gap-10">
                    {remarks.map(remark =>(
                        <div className="flex flex-col gap-2" key={remark.title}>
                            <h2 className="NorthernTerritories">{remark.title}</h2>
                            <p className="text-[17px] text-[#949494]">{remark.nameDate}</p>
                            <p className="text-[17px]">{remark.desc}</p>
                            <p className="w-full flex justify-end text-[12px] text-[#e2b808]">Report as Inappropriate</p>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default ProductDetails;