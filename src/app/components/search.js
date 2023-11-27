"use client";
import { useStore } from "../store/zustand";

const Search = () => {
    const closeSearchbar = useStore(state => state.closeSearchbar)
    return ( 
        <div className="w-full h-screen bg-white fixed z-50 top-0 left-0">
            <div className="border-b border-slate-400 flex p-3 justify-between w-full">
                <input type="text" placeholder="What are you looking for?" className="w-96 outline-none"/>
                <h4 className="text-[#e2b808] font-bold cursor-pointer" onClick={closeSearchbar}>Cancel</h4>
            </div>
        </div>
     );
}
 
export default Search;