"use client"
import Link from "next/link";
import { useState } from "react";

const   Login = () => {
    const [loginpage, setLoginpage] = useState(true);
    return ( 
        <div className="flex justify-center py-10">
            <div className="w-[450px] flex flex-col gap-8">
                <div className="flex flex-col gap-8 w-full items-center justify-center">
                    <h1 className="NorthernTerritories text-[24px]">Login</h1>
                </div>
                {loginpage ? 
                 <form action="" className="flex flex-col gap-5">
                    <input type="text" placeholder="Email" className="w-full border border-[#ddd] h-[50px] pl-3"/>
                    <input type="text" placeholder="Phone Number" className="w-full border border-[#ddd] h-[50px] pl-3" />
                    <div className="flex gap-8">
                        <button className="py-1 px-4 bg-[#e2b808] text-[14px] rounded-sm">Sign in</button>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1 text-[15px]">
                                <h3>New customer?</h3>
                                <Link href="/register"><h3 className="text-[#e2b808]">Create account</h3></Link>
                            </div>
                        <h3 className="text-[15px] text-[#e2b808] cursor-pointer" onClick={()=> setLoginpage(false)}>Forget your password?</h3>
                        </div>
                    </div>
                 </form>
                : 
                <div>
                    <h3 className="NorthernTerritories text-[15px]">Reset your password</h3>
                    <h4 className="text-[18px] mt-3">We will send an email to reset your password.</h4>
                    <form action="" className="flex flex-col gap-5 mt-4">
                        <input type="text" placeholder="Email" className="w-full border border-[#ddd] h-[50px] pl-3"/>
                        <div className="flex gap-6">
                            <button className="py-2 px-4 bg-[#e2b808] text-[14px] rounded-sm">Submit</button>
                            <button className="py-2 px-4 bgwhite text-[14px] rounded-sm border border-[#ddd]" onClick={()=>setLoginpage(true)}>Cancel</button>
                        </div>
                    </form>
                </div>
                }
            </div>
        </div>
     );
}
 
export default  Login;