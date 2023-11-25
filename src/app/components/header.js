"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { supabase } from '../auth/supabase';
import { useStore } from '../store/zustand';
import Search from './search';
import Sidebar from './sidebar';

const Header = () => {
    const sidebarState = useStore(state => state.sidebarState)
    const openSidebar = useStore(state => state.openSidebar)
    const closeSidebar = useStore(state => state.closeSidebar)
    const searchbarState = useStore(state => state.searchbarState)
    const openSearchbar = useStore(state => state.openSearchbar)
    const signedIn = useStore(state => state.signedIn)
    const num = useStore(state => state.num)
    const [cartCount,setCartCount] = useState()
    async function signOut(){
        await supabase.auth.signOut();
        //router.refresh()
   }

   useEffect(()=>{
    if(typeof localStorage !== "undefined") {
        const storedArray = JSON.parse(localStorage.getItem('bayriteCart')) || [];
        setCartCount(storedArray.length)
    }
   },[num])
    return ( 
        <div className='flex flex-col gap-7 bg-[#ddd] p-7 max-sm:p-3 sticky top-0 w-full z-10'>
             {sidebarState && <div className='w-screen h-screen absolute bg-[rgba(0,0,0,0.5)] flex -top-12 left-0 sm:hidden' onClick={closeSidebar}></div>}
            <Sidebar />
            {searchbarState && <Search />}
            <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                    <RxHamburgerMenu className='text-3xl sm:hidden cursor-pointer' onClick={openSidebar}/>
                    <AiOutlineSearch className='text-3xl sm:hidden cursor-pointer' onClick={openSearchbar}/>
                </div>
               <Link href="/"><img src="https://bayrite.com/cdn/shop/files/Bayrite_06_Black_956x236.png?v=1621099456" alt="" className="w-48"/></Link> 
                <div className="w-full max-sm:hidden">
                    <form action="" className="flex items-center justify-center h-[48px] w-full">
                        <input type="text" placeholder='What are you looking for?' className="h-full w-full rounded-tl-sm rounded-bl-sm pl-3 focus:outline-none"/>
                        <div className="bg-[#e2b808] flex items-center justify-center h-full px-3 rounded-tr-sm rounded-br-sm cursor-pointer">
                            <AiOutlineSearch className='text-2xl'/>
                        </div>
                    </form>
                </div>
                <div className='ml-10 relaive'>
                    <Link href="/cart"><BsFillCartFill className='text-2xl cursor-pointer '/></Link>
                    {cartCount > 0 && 
                    <p className='absolute right-5 top-7 max-sm:right-1 max-sm:top-3 bg-[#e2b808] rounded-full w-6 max-[730px]:w-5 max-[730px]:h-5 flex items-center justify-center min-[730px]:font-semibold cursor-pointer text-[14px]'>{cartCount}</p>}
                </div>
            </div>
            <div className="flex justify-between max-sm:hidden">
                <ul className='flex gap-5 text-[15px]'>
                    <Link href="/shop-all"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Shop All</li></Link>
                    <Link href="/zodiac-necklace"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Zodiac Necklace</li></Link>
                    <Link href="/gemstone-necklace"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Gemstone Chocker</li></Link>
                    <Link href="/gifting"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Gifting</li></Link>
                    <Link href="/loyalty-club"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Loyalty Club</li></Link>
                    <Link href="/faqs"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>FAQS</li></Link>
                    <Link href="/contact-us"><li className='cursor-pointer hover:text-slate-600 transition duration-300'>Contact Us</li></Link>
                </ul>
                {!signedIn ? <Link href="/login"><p className='text-[15px] text-[#333]'>Login</p></Link> : <p className='text-[15px] text-[#333] cursor-pointer' onClick={signOut}>Logout</p>}
            </div>
        </div>
     );
}
 
export default Header;