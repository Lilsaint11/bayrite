"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import QuickShop from './components/quickShop'
import { useStore } from './store/zustand';
import {TbCurrencyNaira } from 'react-icons/tb';
import Rating from '@mui/material/Rating';
//import { Swiper, SwiperSlide } from 'swiper/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//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

// import required modules
import {  Navigation, Pagination } from 'swiper/modules';
import { client } from './utils/configSanity';

const addCommasToNumberString = (numberString) =>{
  return  numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export default function Home() {
  const [data,setData] = useState()
  const [zodiacs,setZodiacs] = useState()  
  const [gemstones,setGemstones] = useState()
  const [modalDetails,setModalDetails] = useState()
  const [loading,setLoading] = useState(true)
  const [value, setValue] = useState(2);


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
  //const data =  await getData();
  //console.log(data);
  const productModalState = useStore(state => state.productModalState)
  const openproductModal =  useStore(state => state.openproductModal)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }

  function openModal(details){
    openproductModal()
    setModalDetails(details)
  }
  

  return (
    <div className=''>
      {data && data.map(dat => (
        <h1 key={dat.id}>{dat.name}</h1>
      ))}
      {productModalState &&  <QuickShop modalDetails={modalDetails} />}
      <div className='flex max-sm:flex-col gap-5 w-full px-5 max-sm:px-3 mt-7 text-white'>
        <div className="w-full">
          <Link href="/gemstone-necklace">
            <div className='bg-[url("https://bayrite.com/cdn/shop/files/White_Modern_Smart_Watch_Amazon_Product_Image_00257ecb-3d67-4124-a8e0-39bbb998a7be_1080x1080.png?v=1679754780")] bg-cover bg-no-repeat bg-center min-h-[340px] max-sm:min-h-[270px] p-8 w-full cursor-pointer max-sm:rounded-md'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl max-sm:text-lg font-bold NorthernTerritories capitalize'>Gemstone Collection</h2>
                <h4 className='text-[18px] max-sm:text-[17px] font-normal max-w-[300px]'> 
                  Our Bayrite Choker  is a beautiful  statement piece. Crafted from 18k gold and sliver filled stainless steel.
                </h4>
                <span className="text-black bg-white p-3 max-sm:p-2 max-sm:pl-3 w-36 max-sm:w-32 mt-1 text-[14px] cursor-pointer rounded-sm">
                  SHOW NOW -&gt;
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Link href="/zodiac-necklace">
            <div className='bg-[url("https://bayrite.com/cdn/shop/files/White_Modern_Smart_Watch_Amazon_Product_Image_1_4990406d-01b4-4a27-9986-b0deceb9b77e_859x859.png?v=1679755100")] bg-cover bg-no-repeat bg-center min-h-[340px] max-sm:min-h-[270px] p-8 w-full cursor-pointer max-sm:rounded-md'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl max-sm:text-lg font-bold NorthernTerritories capitalize'>Zodiac Necklace</h2>
              <h4 className='text-[18px] max-sm:text-[17px] font-normal max-w-[300px]'>Zodiac jewellery can be the ultimate expression of who you are and what you value.
              </h4>
              <span className="text-black bg-white p-3 max-sm:p-2 max-sm:pl-3 w-36 max-sm:w-32 mt-1 text-[14px] cursor-pointer rounded-sm">
                SHOW NOW -&gt;
              </span>
            </div>
            </div>
          </Link>
        </div>
      </div>

        <div className='flex flex-col justify-center gap-8 mt-16'>
          <h3 className='text-[24px] w-full flex justify-center'>Zodiac Necklace</h3>
          <div className='mx-20 max-lg:mx-3'>
          {loading && 
                <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-5'>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                </div>
            }
            <Swiper
              slidesPerView={2}
              spaceBetween={5}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                1000: {
                  spaceBetween:20
                },
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[ Navigation, Pagination]}
              className="mySwiper"
            >
              {zodiacs && 
              <div>
                {zodiacs.map(zodiac => (
                  <SwiperSlide>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px] overflow-hidden  max-[380px]:p-2 max-[380px]:h-[245px]'>
                    <Link href={"/products/" + zodiac.slug.current} >
                      <div className='flex items-center justify-center'>
                        <div className='max-[1000px]:w-52 '>
                          <img src={zodiac.images} alt="" className='object-contain w-[32px]'/>
                        </div>
                      </div>
                      <h3 className='text-[24px] max-[730px]:text-[18px] text-[#e2b808] text-left flex items-center'><TbCurrencyNaira />{addCommasToNumberString(zodiac.price)}.00</h3>
                      <h4 className='text-[15px] max-[730px]:text-[12px] text-left hover:text-[#e2b808]'>{zodiac.name}</h4>
                      <div className='flex items-center gap-1 mt-2'>
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
                  </SwiperSlide>
                ))}
                <SwiperSlide>
                  <Link href="/zodiac-necklace">
                      <div className='bg-[#f0f0f0] w-full  h-[320px] relative'>
                        <div className='w-28 absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] fill-[silver]'>
                          <div className='absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] text-white'>
                            <p className='text-[13px]'>Shop this</p>
                            <h3 className='NorthernTerritories'>Collection</h3>
                          </div>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M370.4 183.2c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38zm0 75c-20.4 0-37-16.6-37-37s16.6-37 37-37 37 16.6 37 37-16.6 37-37 37z"></path><path d="M370.4 191.4c.6 0 1-.4 1-1v-4.1c0-.6-.4-1-1-1s-1 .4-1 1v4.1c0 .6.4 1 1 1zm0 59.5c-.6 0-1 .4-1 1v4.1c0 .6.4 1 1 1s1-.4 1-1v-4.1c0-.5-.5-1-1-1zm29.7-29.7c0 .6.4 1 1 1h4.1c.6 0 1-.4 1-1s-.4-1-1-1h-4.1c-.5 0-1 .4-1 1zm-59.5 0c0-.6-.4-1-1-1h-4.1c-.6 0-1 .4-1 1s.4 1 1 1h4.1c.6 0 1-.5 1-1zm55.9-15.1c.1.2.3.2.4.2.1 0 .2 0 .2-.1l3.6-2.1c.2-.1.3-.4.2-.7-.1-.2-.4-.3-.7-.2l-3.6 2.1c-.1.2-.2.5-.1.8zm-52.9 30l-3.6 2.1c-.2.1-.3.4-.2.7.1.2.3.2.4.2.1 0 .2 0 .2-.1l3.6-2.1c.2-.1.3-.4.2-.7-.1-.2-.4-.3-.6-.1zm42.5 11.3c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l2.1 3.7c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-2-3.6zM354.7 195c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-2.1-3.7c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l2.2 3.8zm30.7.2c.1 0 .2.1.2.1.2 0 .3-.1.4-.2l2.2-3.7c.1-.2.1-.5-.2-.7-.2-.1-.5-.1-.7.2l-2.2 3.7c-.1.2 0 .5.3.6zm-30 51.9c-.2-.1-.5-.1-.7.2l-2.2 3.7c-.1.2-.1.5.2.7.1 0 .2.1.2.1.2 0 .3-.1.4-.2l2.2-3.7c.2-.3.1-.6-.1-.8zm45.4-9l-3.6-2.1c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l3.6 2.1c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.2-.3.1-.6-.1-.8zm-56.7-32.7l-3.6-2.1c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l3.6 2.1c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.2-.3.1-.6-.1-.8zm47.8 12.6l-2.7-.5c-1.4-.2-2.9-.3-4.3-.1l-13 1.6v-15.5c0-2.6-.3-5.2-1-7.8-.1-.2-.3-.4-.5-.4s-.4.2-.5.4c-.7 2.5-1 5.1-1 7.7v16.4c-.3.4-.5.9-.5 1.5 0 .4.2.7.4 1-.1 0-.1.1-.2.1l-19.5 23.8c-.2.2-.1.5.1.7.1.1.2.1.3.1.1 0 .3-.1.4-.2l19.5-23.8c.1-.1.1-.2.1-.3.2.1.5.2.8.2h.2l14.7-1.8c1.4-.2 2.8-.6 4.2-1.1l2.5-1.1c.2-.1.3-.3.3-.5.1-.2-.1-.4-.3-.4zm-22-14.5c0-1.8.2-3.5.5-5.3.3 1.7.5 3.5.5 5.3V219l-.9.2v-15.7zm19.2 15.6c-1.2.5-2.6.9-3.9 1.1l-14.7 1.8c-.5.1-.9-.3-1-.8-.1-.5.3-.9.8-1l14.7-1.8c.6-.1 1.2-.1 1.7-.1.8 0 1.5.1 2.3.2l1.1.2-1 .4z"></path><path d="M458 302V157c0-4-3.2-7.2-7.2-7.2H400c-.6 0-1 .4-1 1s.4 1 1 1h50.8c2.9 0 5.2 2.3 5.2 5.2v145h-3.5V159.7c0-2.3-1.9-4.2-4.2-4.2h-49.4v-15.6c0-.6-.4-1-1-1H343c-.6 0-1 .4-1 1v9.9h-34.6c-.1 0-.2 0-.3.1-3.4-3.8-8.3-6.2-13.8-6.2h-24v-1.1c0-2.4-2-4.4-4.4-4.4h-37.3c-2.4 0-4.4 2-4.4 4.4v1.3c-.2-.1-.3-.2-.5-.2H133c-.3-3.1-2.9-5.5-6.1-5.5h-15c-3.2 0-5.8 2.4-6.1 5.5H80.4c-10.3 0-18.6 8.4-18.6 18.6V252c0 10.3 8.4 18.6 18.6 18.6h25.4v28.2c0 3.4 2.7 6.1 6.1 6.1h15c3.4 0 6.1-2.7 6.1-6.1v-28.7c.2.3.5.4.8.4h36.5V360h-44.7c-6.4 0-12.5 3-16.4 8l-11.4 14.7c-.7.8-.8 2-.3 2.9s1.4 1.6 2.5 1.6h167.9c1.1 0 2-.6 2.5-1.6s.4-2.1-.3-2.9L258.7 368c-3.9-5-10-8-16.4-8h-44.5v-89.5h21.8c2.1 11.1 3 26.5 3.1 39.9 0 2.4 2 4.4 4.4 4.4h37.3c2.4 0 4.4-2 4.4-4.4.2-13.9 1.2-29.2 3.3-40 .1.1.3.1.5.1h9.9V302c-3.2.3-5.8 3-5.8 6.3V381c0 3.5 2.8 6.4 6.4 6.4h174.4c3.5 0 6.4-2.8 6.4-6.4v-72.6c-.1-3.4-2.7-6.1-5.9-6.4zm-9.7-144.5c1.2 0 2.2 1 2.2 2.2V302h-8.3V191.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5V302h-42.3v-32.7c0-.6-.4-1-1-1h-8.6c-.1 0-.2 0-.3.1l.4-1.4h4.9c3.3 0 6.2-2.2 7-5.4l3.8-14.6v-.4c3.7-5.1 6.4-11.1 7.5-17.6h3.1c2.4 0 4.4-2.2 4.4-4.9v-5.8c0-2.7-2-4.9-4.4-4.9h-3.1c-1.2-6.5-3.8-12.4-7.6-17.6v-.4l-3.8-14.6c-.8-3.2-3.7-5.4-7-5.4h-4.9l-.4-1.5c.1 0 .2.1.3.1h8.6c.6 0 1-.4 1-1v-5.7h35.8c3.6 0 6.5 2.9 6.5 6.5v8.7c0 .3.2.5.5.5s.5-.2.5-.5v-8.7c0-4.2-3.4-7.5-7.5-7.5h-35.8v-8.8h49.5zM298.7 271.7c-.3 0-.5.2-.5.5V302h-8.3v-31.4h3.2c10.3 0 18.6-8.4 18.6-18.6v-84.7h30.1v5.7c0 .6.4 1 1 1h8.6c.1 0 .2 0 .3-.1l-.4 1.5h-4.9c-3.3 0-6.2 2.2-7 5.4l-3.8 14.6v.4c-5.2 7.1-8.3 15.8-8.3 25.3s3.1 18.2 8.3 25.3v.4l3.8 14.6c.8 3.2 3.7 5.4 7 5.4h4.9l.4 1.4c-.1 0-.2-.1-.3-.1h-8.6c-.6 0-1 .4-1 1V302h-42.6v-29.8c0-.3-.2-.5-.5-.5zm114.6-47.9c0-.7.1-1.4.1-2.1h4.8v2.1h-4.9zm4.8-3.1h-4.8c0-.7 0-1.4-.1-2.1h4.8v2.1zm-4.9 4.1h4.8c-.3 1.2-1.2 2.1-2.3 2.1H413c.1-.7.1-1.4.2-2.1zm0-7.3l-.3-2.1h2.8c1.1 0 2 .9 2.3 2.1h-4.8zm-1.8 3.7c0 22.6-18.4 41-41 41s-41-18.4-41-41 18.4-41 41-41 41 18.4 41 41zm-23.2 51.1v12.5h-35.7v-12.5h35.7zm2 24.9h6.6v4.2h-6.6v-4.2zm6.7-2h-6.6v-13.7h6.6v13.7zm-53 2h6.6v4.2h-6.6v-4.2zm0-2v-13.7h6.6v13.8h-6.6zm6.6-23.9v8.1h-6.6v-9.2h6.6v1.1zm2 15.5h35.7v3.7h-35.7v-3.7zm44.4-7.3h-6.6v-9.2h6.6v9.2zm-9.2-13.9l-1.1 3.6c-.2.7-.8 1.1-1.5 1.1h-29.3c-.7 0-1.3-.5-1.5-1.1l-1.1-3.6c-.1-.4-.5-.7-1-.7h-5.6c-2.4 0-4.5-1.6-5.1-3.9l-2.8-10.9c7.9 8.6 19.2 14.1 31.8 14.1 12.6 0 23.9-5.4 31.8-14.1l-2.9 10.9c-.6 2.3-2.7 3.9-5.1 3.9h-5.6c-.5 0-.9.3-1 .7zm-17.3-87.4c-12.6 0-23.9 5.4-31.8 14.1l2.9-10.9c.6-2.3 2.7-3.9 5.1-3.9h5.6c.4 0 .8-.3 1-.7l1.1-3.6c.2-.7.8-1.1 1.5-1.1H385c.7 0 1.3.5 1.5 1.1l1.1 3.6c.1.4.5.7 1 .7h5.6c2.4 0 4.5 1.6 5.1 3.9l2.8 10.9c-7.8-8.7-19.1-14.1-31.7-14.1zm-26.5-15.3h6.6v9.1h-6.6v-9.1zm8.6 7.1v-12.5h35.7V170h-35.7zm35.7-14.5h-35.7v-3.7h35.7v3.7zm2 7.4h6.6v9.2h-6.6v-9.2zm6.7-2h-6.6v-13.8h6.6v13.8zm-8.7-11.1h-35.7v-8.9h35.7v8.9zm-37.7 11.1h-6.6v-13.7h6.6v13.7zm-8.6 5.4h-30.1v-4c0-1.7-.2-3.3-.7-4.8h30.7v8.8zm10.6 126.2h35.7v9.5h-35.7v-9.5zm44.4-147.3h-6.6V141h6.6v4.2zm-46.4-4.3v4.2h-6.6v-4.2h6.6zm-8.7 10.9c.1 0 .1 0 0 0v3.7H310.4c-.5-1.3-1.2-2.5-2-3.7h33.4zm-116.9-9.2c0-1.3 1.1-2.4 2.4-2.4h37.3c1.3 0 2.4 1.1 2.4 2.4.1 9.4.7 37.3 5.9 49.9-1.8-.9-3.9-1.4-6-1.4h-42.1c-2.2 0-4.2.5-6 1.4 1.9-4.6 3.4-11.8 4.5-21.5 1.3-11.7 1.6-23.8 1.6-28.4zm55.7 71.8h3.2v2h-3.2v-2zm3.2-1h-3.2v-2h3.2v2zm-3.2 3.9h3.2v.5c0 1.6-1.3 2.9-2.9 2.9h-.3v-3.4zm3.2-6.9h-3.2V207h.3c1.6 0 2.9 1.3 2.9 2.9v.5zm-5.2-4.3v41.8c0 2.8-1 5.3-2.6 7.3-.3.3-.6.6-.9 1-2.1 2.1-5 3.4-8.2 3.4h-42.1c-3.2 0-6.1-1.3-8.2-3.4-.3-.4-.6-.7-.9-1-1.6-2-2.6-4.5-2.6-7.3v-43.1c0-2.8 1-5.3 2.6-7.3.3-.3.6-.6.9-1 2.1-2.1 5-3.4 8.2-3.4h42.1c3.2 0 6.1 1.3 8.2 3.4.3.4.6.7.9 1 1.6 2 2.6 4.5 2.6 7.3v1.3zM132 256.8h-4c4-.9 7.8-2.5 11.2-4.6-.2 2.6-2.3 4.6-4.9 4.6H132zm-26.2 0c-2.6 0-4.8-2.1-4.9-4.6 3.4 2.1 7.2 3.7 11.2 4.6h-6.3zm14.3-1.2c-18.8 0-34.1-15.3-34.1-34.1s15.3-34.1 34.1-34.1 34.1 15.3 34.1 34.1c-.1 18.9-15.4 34.1-34.1 34.1zm-14.3-69.2h6.4c-4.1.9-7.9 2.5-11.3 4.7.2-2.6 2.3-4.7 4.9-4.7zm22.1 0h6.3c2.6 0 4.8 2.1 4.9 4.7-3.3-2.2-7.1-3.8-11.2-4.7zm-20.1-42.1c0-2.3 1.8-4.1 4.1-4.1h15c2.3 0 4.1 1.8 4.1 4.1v40.1h-23.2v-40.1zM80.4 268.6c-9.2 0-16.6-7.5-16.6-16.6v-89.7c0-9.2 7.5-16.6 16.6-16.6h25.4v38.7c-3.8 0-6.9 3.1-6.9 7v.4c0 .2.1.4.2.5-9.1 6.6-15 17.2-15 29.3 0 12.1 6 22.9 15.3 29.4-.2.2-.4.5-.4.8 0 3.8 3.1 7 6.9 7v5.6H80.6c-7 0-12.7-5.7-12.7-12.7v-17.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v17.4c0 7.6 6.2 13.7 13.7 13.7h25.2v3.3H80.4zm50.6 30.3c0 2.3-1.8 4.1-4.1 4.1h-15c-2.3 0-4.1-1.8-4.1-4.1v-40.1H131v40.1zm41.4-28.3h6.9c2.3 13.6.5 26.7-1.2 39.5-2.1 15.9-4.3 32.3 1.2 50h-6.9v-89.5zm10.9 48.2c.1 2.1.2 4.8.2 8 .1 11.2.3 26.2 5.3 33.3h-8.5v-.2c-5.5-17.5-3.3-33.9-1.2-49.7 1.7-12.7 3.5-25.9 1.2-39.6h11c.1 7.8-1.9 15.4-4 22.6-2.2 8.2-4.5 16.5-4 25.6zm26.4 43.3c-4.1 6.4-11.5 6.7-18.7 7-2.8.1-5.4.2-7.8.6-6.9 1.3-9.7 3.7-12.5 6.4-1.9 1.7-3.8 3.5-7.1 5-3.7 1.7-6.4 2.2-8.3 1.5-2.2-.9-3.2-3.5-4.3-6.2-.7-1.9-1.5-3.8-2.7-5.5-.6-.9-2.3-1.8-4.3-2.9-3.1-1.7-7-3.8-6.6-5.9h14.1c1.3 3.9 4 10 8.3 11.4.6.2 1.3.3 1.9.3 1.5 0 3.1-.6 4.8-1.8 4.3-3.1 7.9-4.7 11.1-6.2 2.6-1.2 4.8-2.2 6.6-3.7h25.5zm-38.3 0h11.2c-1.5 1-3.3 1.9-5.4 2.8-3.1 1.4-7 3.2-11.3 6.3-2.1 1.5-4 1.9-5.8 1.3-3.8-1.3-6.3-6.7-7.5-10.4h18.8zm-35 0c-.3 2.7 3.8 4.9 7.2 6.8 1.8 1 3.5 1.9 4 2.6 1.1 1.6 1.9 3.4 2.6 5.2 1.2 3 2.2 5.7 4.9 6.8.7.3 1.5.4 2.3.4 1.8 0 4-.6 6.8-1.9 3.4-1.6 5.4-3.4 7.3-5.2 2.8-2.5 5.4-4.9 12-6.1 2.3-.4 4.9-.5 7.6-.6 7.3-.3 15.6-.6 19.8-8h19.8c-3.1 1.3-6.7 3.6-10.2 6-4 2.7-7.7 5.2-10.5 5.9-2 .5-5.2.5-8.8.6-7.9.1-17.7.3-22.1 5-1.4 1.5-2.2 3.5-2.2 5.8h-33.4c-.2-7.6-2.4-10.8-7.7-15.4-1.1-1-3.7-1.5-6.7-2.2-2.6-.6-5.2-1.2-7.2-2.1-1.9-.9-2.5-1.8-2.6-2.5 2-.7 4.1-1.1 6.3-1.1h10.8zm-25.6 7.3c2-2.6 4.6-4.6 7.6-5.8.3 1.2 1.3 2.2 3.2 3.1 2.1.9 4.8 1.5 7.4 2.1 2.7.6 5.3 1.2 6.2 2 5.3 4.6 7.2 7.5 7.4 14.6h-13.4c-1.4-4.6-5.3-5.8-9.1-6.9-4.4-1.3-8.6-2.6-9.4-8.8l.1-.3zm-11.5 15.5c-.1-.1-.2-.5.1-.8l10.4-13.4c1.2 6 5.8 7.5 10 8.7 3.6 1.1 7 2.1 8.3 5.9H100c-.4 0-.6-.3-.7-.4zm169.3 0c-.1.1-.3.4-.7.4h-18.3c.7-7.7 4.5-7.6 11.1-7.2 1 .1 2.1.1 3.3.1l4.5 5.8c.3.4.2.8.1.9zm-5.4-7.7c-.8 0-1.7-.1-2.4-.1-6.8-.3-11.4-.5-12.2 8.2h-28.3c1.7-1 3.8-1.5 5.9-2.1 2.4-.6 4.7-1.2 6.4-2.5 1.2-.9 2.3-2.2 3.2-3.4.8-1 1.5-1.9 2.2-2.4.6-.4 1.1-.8 1.6-1.1 5.7-4.1 8.3-5.9 17.6-4.4h.2l5.8 7.8zm-6.8-8.7c-9-1.4-11.9.7-17.5 4.7-.5.4-1 .7-1.6 1.1-.8.6-1.6 1.5-2.4 2.6-.9 1.2-1.9 2.4-3 3.2-1.6 1.2-3.8 1.7-6.1 2.3-2.4.6-4.9 1.2-6.9 2.6-.1.1-.2.2-.2.4h-40.9c0-2.1.7-3.8 1.9-5.1 4-4.4 13.6-4.5 21.3-4.7 3.7-.1 7-.1 9.1-.6 3-.7 6.8-3.3 10.9-6 5.4-3.6 10.9-7.3 14.5-6.7.1 0 .3 0 .4-.1h6.2c5.5-.1 10.7 2.3 14.3 6.3zm-60.6-18c-10-15.7-4.9-33.8-1.2-47.1.4-1.5.8-3 1.2-4.4v51.5zm0-55.8c-.5 2.5-1.3 5.3-2.2 8.4-3.8 13.8-9.1 32.6 2 49 0 .1.1.1.1.1v7.9H190c-5.3-6.5-5.4-21.9-5.5-33.3 0-3.1-.1-5.9-.2-8-.5-8.9 1.7-17.2 4-25.2 2-7.3 4.1-14.9 4-22.9h3.5v24zm-62-26.1c-.3 0-.6.2-.8.4v-3.9c.1.1.2.2.4.2h78.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-78.7c-.2 0-.3.1-.4.2v-5.8h1.2c3.8 0 7-3.1 7-7 0-.3-.2-.6-.4-.8 7.9-5.6 13.4-14.2 14.9-24.2 2.6-.3 4.7-2.5 4.7-5.2s-2.1-4.9-4.7-5.2c-1.4-9.9-6.9-18.5-14.7-24.1.1-.2.2-.3.2-.5v-.4c0-3.8-3.1-7-7-7H133v-38.7h89.3c.2 0 .4-.1.5-.2-.4 20.5-2.7 42.8-7.7 49.5-2.5 2.5-4.1 5.9-4.1 9.7v43.1c0 3.8 1.5 7.2 4 9.7 1.6 2.2 3 6.1 4 11.1h-85.2zm22.1-51.2c2 .3 3.6 2.1 3.6 4.2s-1.6 3.9-3.6 4.2c.2-1.4.3-2.8.3-4.2s-.2-2.8-.3-4.2zm110.9 93.1c0 1.3-1.1 2.4-2.4 2.4h-37.3c-1.3 0-2.4-1.1-2.4-2.4-.1-9.5-.7-37.7-5.9-50.4 1.8.9 3.9 1.4 6 1.4h42.1c2.2 0 4.2-.5 6-1.4-5.1 12.7-6 40.9-6.1 50.4zm5.7-41.8c.3-1.2.5-2.4.8-3.5.1.1.2.2.4.2h18.7c7.6 0 13.7-6.2 13.7-13.7v-78.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v78.6c0 7-5.7 12.7-12.7 12.7h-18.9c.9-3 1.9-5.3 3-6.9 2.5-2.5 4.1-5.9 4.1-9.7v-25.1h.3c2.7 0 4.9-2.2 4.9-4.9v-7.9c0-2.7-2.2-4.9-4.9-4.9h-.3v-.3c0-3.8-1.6-7.2-4-9.7-5-6.7-7.1-29.7-7.4-49.3h24c9.2 0 16.6 7.5 16.6 16.6V252c0 9.2-7.5 16.6-16.6 16.6l-20.7.1c0-.1 0 0 0 0zm15.4 1.9V302h-3.5v-31.4h3.5zM461.8 381c0 2.4-2 4.4-4.4 4.4H283c-2.4 0-4.4-2-4.4-4.4v-72.6c0-2.4 2-4.4 4.4-4.4h174.4c2.4 0 4.4 2 4.4 4.4V381z"></path><path d="M457.4 310l-6.5 5.7c-1.3-1.5-3.2-2.5-5.3-2.5H294.8c-3.8 0-6.9 3.1-6.9 6.9v51.1c0 .5.1 1 .2 1.4l-5.4 4.7c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l5-4.4c1 2.6 3.5 4.4 6.4 4.4h150.8c3.8 0 6.9-3.1 6.9-6.9v-51.1c0-1.3-.4-2.5-1-3.5l6.6-5.8c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7-.1zm-6.9 10.1v51.1c0 2.7-2.2 4.9-4.9 4.9h-149l31.7-27.9c.2-.2.2-.5 0-.7s-.5-.2-.7 0L295 376.2h-.3c-2.3 0-4.3-1.6-4.8-3.8l12.8-11.3c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L289.9 371v-50.9c0-2.7 2.2-4.9 4.9-4.9h145.6l-14.7 12.9c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l15.3-13.5c.1-.1.1-.1.1-.2h3.8c1.5 0 2.9.7 3.8 1.8l-28 24.6c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l27.9-24.5c.3.7.5 1.4.5 2.2zM120.1 191.3c-16.7 0-30.3 13.6-30.3 30.3 0 16.7 13.6 30.3 30.3 30.3 16.7 0 30.3-13.6 30.3-30.3 0-16.7-13.6-30.3-30.3-30.3zm0 59.6c-16.2 0-29.3-13.1-29.3-29.3s13.1-29.3 29.3-29.3 29.3 13.1 29.3 29.3-13.2 29.3-29.3 29.3z"></path><path d="M120.1 197.6c.3 0 .5-.2.5-.5v-3.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.2c0 .3.2.5.5.5zm0 47.9c-.3 0-.5.2-.5.5v3.2c0 .3.2.5.5.5s.5-.2.5-.5V246c0-.3-.3-.5-.5-.5zm27.6-24.4h-3.2c-.3 0-.5.2-.5.5s.2.5.5.5h3.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-51.6.5c0-.3-.2-.5-.5-.5h-3.2c-.3 0-.5.2-.5.5s.2.5.5.5h3.2c.3 0 .5-.2.5-.5zm45.1-11.7c.1 0 .2 0 .2-.1l2.8-1.6c.2-.1.3-.4.2-.7-.1-.2-.4-.3-.7-.2l-2.8 1.6c-.2.1-.3.4-.2.7.1.2.3.3.5.3zm-42.5 23.4l-2.8 1.6c-.2.1-.3.4-.2.7.1.2.3.2.4.2.1 0 .2 0 .2-.1l2.8-1.6c.2-.1.3-.4.2-.7-.1-.1-.4-.2-.6-.1zm33.9 9.1c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l1.7 2.9c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-1.6-2.8zm-25.1-41.6c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-1.7-2.9c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l1.8 3zm24.4.2c.1 0 .2.1.2.1.2 0 .3-.1.4-.2l1.7-3c.1-.2.1-.5-.2-.7-.2-.1-.5-.1-.7.2l-1.7 3c0 .2.1.5.3.6zm-23.7 41.1c-.2-.1-.5-.1-.7.2l-1.7 3c-.1.2-.1.5.2.7.1 0 .2.1.2.1.2 0 .3-.1.4-.2l1.7-3c.2-.3.1-.6-.1-.8zm36.1-7.1l-2.9-1.7c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l2.9 1.7c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.2-.4.1-.7-.1-.8zm-45.1-26l-2.9-1.7c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l2.9 1.7c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.3-.4.2-.7-.1-.8zm38 9.9l-2.2-.4c-1.1-.2-2.3-.2-3.5-.1l-10.2 1.3v-13.8c0-2.1-.3-4.2-.8-6.2-.1-.4-.9-.4-1 0-.5 2-.8 4.1-.8 6.2v14.6c-.3.3-.4.8-.3 1.2 0 .3.1.5.3.7l-.1.1-15.5 18.9c-.2.2-.1.5.1.7.1.1.2.1.3.1.1 0 .3-.1.4-.2l15.5-18.9s0-.1.1-.1c.2.1.4.1.6.1h.2l11.7-1.5c1.2-.1 2.3-.5 3.3-.9l2-.9c.2-.1.3-.3.3-.5 0-.1-.2-.3-.4-.4zm-17.4-13c0-1.2.1-2.4.3-3.6.2 1.2.3 2.4.3 3.6v13.9l-.5.1v-14zm15.1 14c-1 .4-2 .7-3.1.8l-11.7 1.5c-.3 0-.6-.2-.7-.5 0-.2 0-.3.1-.5.1-.1.2-.2.4-.2l11.7-1.5c.5-.1.9-.1 1.4-.1.6 0 1.2.1 1.8.2l.5.1-.4.2z"></path><path d="M103.9 214.8h11.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-11.3c-.3 0-.5.2-.5.5s.2.5.5.5zm2.3 2.3c-.3 0-.5.2-.5.5s.2.5.5.5h6.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6.8zm5.7 48.9c.3 0 .5-.2.5-.5v-2.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.1c0 .3.2.5.5.5zm0 24.8c.3 0 .5-.2.5-.5v-3.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.7c0 .3.2.5.5.5zm0 7.8c.3 0 .5-.2.5-.5V296c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .2.2.4.5.4zm4.1-24c.3 0 .5-.2.5-.5v-4.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.9c0 .3.2.5.5.5zm0 6.3c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .3.2.5.5.5zm5.1 11.3c.3 0 .5-.2.5-.5v-4.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.9c0 .3.2.5.5.5zm0-8.7c.3 0 .5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm6 16.7c.3 0 .5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.8c0 .3.2.5.5.5zm0-6.6c.3 0 .5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm0-14c.3 0 .5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm0-6.6c.3 0 .5-.2.5-.5v-4.3c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.3c0 .3.2.5.5.5zm0-9c.3 0 .5-.2.5-.5v-2.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.6c0 .3.2.5.5.5zm0-114.4c.3 0 .5-.2.5-.5v-3.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.2c0 .3.2.5.5.5zm0 20.3c.3 0 .5-.2.5-.5V165c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.4c0 .3.2.5.5.5zm0 10.1c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .3.2.5.5.5zm-4.2-6.9c.3 0 .5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.8c0 .3.3.5.5.5zm0 5.4c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .3.3.5.5.5zm-5.1-26.7c.3 0 .5-.2.5-.5v-2.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.9c0 .2.3.5.5.5zm0-5.7c.3 0 .5-.2.5-.5V143c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.6c0 .3.3.5.5.5zm0 18.8c.3 0 .5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.8c0 .3.3.5.5.5zm-5.9 7c.3 0 .5-.2.5-.5V170c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm0-6.4c.3 0 .5-.2.5-.5v-4.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.8c0 .3.2.5.5.5zm0-12.3c.3 0 .5-.2.5-.5v-2.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.5c0 .3.2.5.5.5zm139.7 101.9h-26c-2 0-3.9-.8-5.4-2l15-15.3c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-15 15.3c-1.3-1.5-2.1-3.4-2.1-5.5v-41.2c0-4.5 3.7-8.2 8.2-8.2h3.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.3c-5.1 0-9.2 4.1-9.2 9.2v41.2c0 5.1 4.1 9.2 9.2 9.2h26c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-15.5-57.6h6.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6.4c-.3 0-.5.2-.5.5s.2.5.5.5zm30-1h-16.7c-.3 0-.5.2-.5.5s.2.5.5.5h16.7c2 0 3.9.8 5.4 2l-14.8 15.1c-.2.2-.2.5 0 .7.1.1.2.1.4.1.1 0 .3-.1.4-.1l14.8-15.1c1.3 1.5 2.1 3.4 2.1 5.5v41.2c0 4.5-3.7 8.2-8.2 8.2h-6.6c-.3 0-.5.2-.5.5s.2.5.5.5h6.6c5.1 0 9.2-4.1 9.2-9.2v-41.2c-.1-5.1-4.2-9.2-9.3-9.2zm-27.2 111.2h-7.3c-1.4 0-2.6-1.2-2.6-2.6 0-2.8-.1-17.1-.8-24.1 0-.3-.3-.5-.5-.5-.3 0-.5.3-.5.5.6 6.9.7 21.2.8 24 0 2 1.6 3.6 3.6 3.6h7.3c.3 0 .5-.2.5-.5s-.2-.4-.5-.4zm21.8-42.5h-32.5c-.8 0-1.6.4-2.1 1s-.7 1.5-.6 2.3c.4 1.8.7 3.7 1 5.8 0 .2.2.4.5.4h.1c.3 0 .5-.3.4-.6-.3-2.1-.6-4.1-1-5.8-.1-.5 0-1.1.4-1.5.3-.4.8-.6 1.3-.6h32.5c.3 0 .5-.2.5-.5s-.3-.5-.5-.5zm-8-120h7.3c1.4 0 2.6 1.2 2.6 2.6 0 3.7.7 17.1 1.3 23.8 0 .3.2.5.5.5s.5-.3.5-.5c-.6-6.7-1.3-20-1.3-23.7 0-2-1.6-3.6-3.6-3.6h-7.3c-.3 0-.5.2-.5.5s.2.4.5.4zm-21.2 42.2h32.2c.9 0 1.7-.4 2.3-1.1.6-.7.8-1.6.6-2.5-.3-1.7-.7-3.5-.9-5.5 0-.3-.3-.5-.6-.4-.3 0-.5.3-.4.6.3 2 .6 3.8.9 5.5.1.6 0 1.2-.4 1.7s-.9.7-1.5.7h-32.2c-.3 0-.5.2-.5.5s.2.5.5.5z"></path><path d="M257.5 218.9c-.3 0-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.2-.2-.5-.5-.5zm-1.3-1.2h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-6.8 7.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-.5 7.5c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm7.3.8h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm1.3-6.9c-.3 0-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5zm-1.3-1.2h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm13.3-.2c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-6.9-6.9h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.3.5.5.5zm-1.2 6.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-.5 7.5c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm1.7 1.8h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.3.5.5.5zm6.4-1.8c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm-6.4-6.3h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.3.5.5.5zm-32.4-1.2c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.3.5.5.5zm-1.2-7.9h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-6.8 7.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-.5 7.5c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm7.8 1.3c0-.3-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.3.5-.5zm.7-.8c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .3.3.5.5.5zm-1.2-7.8h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm13.7-6.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6zm-7.3-.7h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5zm-1.2 6.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm0 8c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .3.2.5.5.5zm1.2 1.3h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5zm6.8-7.9c-.3 0-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5zm-6.8-.2h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5zm-14.8 18.7c.1.1.2.1.4.1.1 0 .3-.1.4-.1l4.8-4.9c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-4.8 4.9c-.3.2-.3.5-.1.7zm30.2-30.1l12.3-12.6c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-12.3 12.6c-.2.2-.2.5 0 .7.1.1.2.1.4.1.1.1.2 0 .3-.1zm-5 9.1c1.3 0 1.3-2 0-2s-1.3 2 0 2zm0 5.6c1.3 0 1.3-2 0-2s-1.3 2 0 2z"></path></svg>
                        </div>  
                      </div>
                    </Link>
                </SwiperSlide>
              </div>
            }  
            </Swiper>
          </div>
          <div className="w-full flex justify-center">
            <Link href="/zodiac-necklace"><button className='text-black bg-[#e2b808] py-3 px-5 rounded-sm text-[14px] w-40 mx-auto'>SHOW NOW</button></Link>
          </div>
        </div>
     
      <div className='flex flex-col justify-center gap-8 mt-16'>
        <h3 className='text-[24px]  w-full flex justify-center'>Gemstone Choker</h3>
        <div className='mx-20 max-lg:mx-3'>
        {loading && 
                <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-5'>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer sm:h-[340px] min-[1000px]:hover:h-[400px]  max-[380px]:p-2 max-[380px]:h-[245px] flex flex-col gap-3 animate-pulse'>
                        <div className='flex items-center justify-center'>
                            <div className='relative h-48 w-48 bg-slate-200 '>
                            </div>
                        </div>
                        <h3 className='relative h-5 w-28 ml-5 bg-slate-200'></h3>
                        <h4 className='relative h-5 w-36 ml-5 bg-slate-200'></h4>
                        <div className="relative h-5 w-32 ml-5 bg-slate-200"></div>
                    </div>
                </div>
            }
            <Swiper
              slidesPerView={2}
              spaceBetween={5}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                1000: {
                  spaceBetween:20
                },
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[ Navigation, Pagination]}
              className="mySwiper"
            >
              {gemstones && 
              <div>
                {gemstones.map(gemstone => (
                  <SwiperSlide>
                    <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer  sm:h-[340px] min-[1000px]:hover:h-[400px] overflow-hidden  max-[380px]:p-2 max-[380px]:h-[245px]'>
                      <Link href={"/products/" + gemstone.slug.current} >
                        <div className='flex items-center justify-center'>
                          <div className='max-[1000px]:w-52 '>
                            <img src={gemstone.images} alt="" className='object-contain w-[32px]'/>
                          </div>
                        </div>
                        <h3 className='text-[24px] max-[730px]:text-[18px] text-[#e2b808] text-left flex items-center'><TbCurrencyNaira />{addCommasToNumberString(gemstone.price)}.00</h3>
                        <h4 className='text-[15px] max-[730px]:text-[12px] text-left'>{gemstone.name}</h4>
                        <div className='flex items-center gap-1 mt-2'>
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
                  </SwiperSlide>
                ))}
              </div>
            }  
            </Swiper>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/gemstone-necklace"><button className='text-black bg-[#e2b808] py-3 px-5 rounded-sm text-[14px] w-40 mx-auto'>SHOW NOW</button></Link>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-5 max-sm:gap-3 my-36 max-sm:my-20'>
        <h1 className='NorthernTerritories text-[20px] max-sm:text-[16px]'>SUBSCRIBE</h1>
        <h3 className='text-slate-500 text-[16px] text-center'>Sign up and be the first to hear about new products and specials</h3>
        <form action="" className="flex items-center justify-center h-[48px]  gap-5 max-sm:gap-3">
            <input type="text" placeholder='Email address' className="h-full rounded-sm pl-3 border border-slate-400 w-96 max-sm:w-48 focus:outline-none"/>
            <div className="bg-[#e2b808] flex items-center justify-center h-full px-5 rounded-sm cursor-pointer">
            Sign up
            </div>
        </form>
      </div>
    </div>
  )
}
