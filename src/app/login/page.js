"use client"
import Link from "next/link";
import { useState } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useStore } from "../store/zustand";

const Login = () => {
    const [loginpage, setLoginpage] = useState(true);
    const supabase = createClientComponentClient()
    const router = useRouter()
    const setSignedIn = useStore(state => state.setSignedIn)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const {email, password} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

    async function login(e){ 
        e.preventDefault();
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if(data.user != null){
                setSignedIn(true)
                router.push("/")
                }else{
                    alert("invalid credentials")
                }
        } catch (error) {
            console.log(error)
        }
        
    }
    return ( 
        <div className="flex justify-center py-10 px-3">
            <div className="w-[450px] flex flex-col gap-8">
                <div className="flex flex-col gap-8 w-full items-center justify-center">
                    <h1 className="NorthernTerritories text-[24px] max-sm:text-[20px]">Login</h1>
                </div>
                {loginpage ? 
                 <form action="" className="flex flex-col gap-5">
                    <input
                     type="email" 
                     placeholder="Email" 
                     className="w-full border border-[#ddd] h-[50px] pl-3"
                     id="email" 
                     value={email} 
                     onChange={onChange}  
                    />
                    <input
                     type="password" 
                     placeholder="Password" 
                     className="w-full border border-[#ddd] h-[50px] pl-3"
                     id="password" 
                     value={password} 
                     onChange={onChange}  
                    />
                    <div className="flex max-sm:flex-col max-sm:gap-4 gap-8">
                        <button className="py-1 px-4 bg-[#e2b808] text-[14px] rounded-sm max-sm:w-20 max-sm:h-10" onClick={login}>Sign in</button>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1 text-[15px] max-sm:text-[13px]">
                                <h3>New customer?</h3>
                                <Link href="/register"><h3 className="text-[#e2b808]">Create account</h3></Link>
                            </div>
                        <h3 className="text-[15px] max-sm:text-[13px] text-[#e2b808] cursor-pointer" onClick={()=> setLoginpage(false)}>Forget your password?</h3>
                        </div>
                    </div>
                 </form>
                : 
                <div>
                    <h3 className="NorthernTerritories text-[15px] max-sm:text-[13px]">Reset your password</h3>
                    <h4 className="text-[18px] max-sm:text-[14px] max-sm:mt-2 mt-3">We will send an email to reset your password.</h4>
                    <form action="" className="flex flex-col gap-5 mt-4">
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={onChange} 
                            placeholder="Email" 
                            className="w-full border border-[#ddd] h-[50px] pl-3"/>
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