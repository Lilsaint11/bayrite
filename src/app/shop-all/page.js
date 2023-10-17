import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io';
import { RiFileListLine } from 'react-icons/ri';
import { BsGrid } from 'react-icons/bs';

const ShopAll = () => {
    return ( 
        <div className="p-10 flex flex-col gap-5">
            <div className="flex gap-2 items-center">
                <Link href="/"><h3 className="text-[#e2b808]">Home</h3></Link>
                <IoIosArrowForward className="text-[10px]"/>
                <h3 className="text-[#5c5c5c]">Shop All</h3>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="NorthernTerritories text-[28px]">Shop All</h1>
                <h3>Nothing but rare gems. Explore 10 + authentic eye-catching  styles and add meaning to any look.</h3>
            </div>
            <div className="px-5 py-4 w-full bg-[#eee] flex  justify-between">
                <div className="flex gap-5">
                    <h2 className="font-bold text-[18px] text-[#4d4d4d]">Sort by</h2>
                    <select name="filter" id="" className="bg-transparent text-[14px] cursor-pointer">
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
                    <div className="flex gap-5 items-center">
                        <h3 className="font-bold text-[18px] text-[#4d4d4d]">Show</h3>
                        <h4 className="text-[#e2b808] cursor-pointer">24</h4>
                        <h4 className="text-[#5c5c5c] cursor-pointer">36</h4>
                        <h4 className="text-[#5c5c5c] cursor-pointer">48</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h3 className="font-bold text-[18px] text-[#4d4d4d]">View as</h3>
                        <BsGrid className="text-[#e2b808] text-[20px] cursor-pointer" />
                        <RiFileListLine className="text-[#5c5c5c] text-[20px] cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
                    <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
                    <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
                    <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
                    <div>
                    <p className='text-[12px]'>5 reviews</p>
                    </div>
                </div>
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
                    <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
                    <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
                    <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
                    <div>
                    <p className='text-[12px]'>5 reviews</p>
                    </div>
                </div>
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
                    <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
                    <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
                    <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
                    <div>
                    <p className='text-[12px]'>5 reviews</p>
                    </div>
                </div>
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
                    <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
                    <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
                    <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
                    <div>
                    <p className='text-[12px]'>5 reviews</p>
                    </div>
                </div>
                <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
            </div>
        </div>
     );
}
 
export default ShopAll;