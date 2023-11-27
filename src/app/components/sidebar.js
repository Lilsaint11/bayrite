"use client";
import Link from 'next/link';
import { AiOutlineClose} from 'react-icons/ai';
import { useStore } from '../store/zustand';
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';
const Sidebar = () => {
    const sidebarState = useStore(state => state.sidebarState)
    const closeSidebar = useStore(state => state.closeSidebar)
    const pathname = usePathname()
    useEffect(()=>{
        closeSidebar();
    },[pathname])
    return ( 
        <div className={`flex flex-col gap-10 h-screen w-80 absolute -top-12 left-0 bg-white z-40 py-5 px-5 transition duration-400 sm:hidden ${sidebarState ? "translate-x-0" : "-translate-x-96"}`}>
            <div className='flex justify-between'>
                <h4 className='text-[14px] text-[#4d4d4d]'>Login</h4>
                <AiOutlineClose className='text-[20px]' onClick={closeSidebar}/>
            </div>
            <div>
                <ul className='flex flex-col gap-5 text-[14px]'>
                    <Link href="/shop-all"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Shop All</li></Link>
                    <Link href="/zodiac-necklace"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Zodiac Necklace</li></Link>
                    <Link href="/gemstone-necklace"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Gemstone Chocker</li></Link>
                    <Link href="/gifting"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Gifting</li></Link>
                    <Link href="/loyalty-club"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Loyalty Club</li></Link>
                    <Link href="/faqs"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>FAQS</li></Link>
                    <Link href="/contact-us"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Contact Us</li></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Sidebar; 