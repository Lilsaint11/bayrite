"use client";
import Link from "next/link";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from "../auth/supabase";

const Register = () => {
    const router = useRouter()
    //const supabase = createClientComponentClient()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const {firstName,lastName,email, password} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }
    async function signUp(e){
        e.preventDefault();
        try {
            let { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    emailRedirectTo:`${location.origin}`,
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                    }
                }
            })
            console.log(data)
            if(data){
            alert("Check your email for verification link")
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
            <div className="w-[600px] flex flex-col gap-8">
                <div className="flex flex-col gap-8 w-full items-center justify-center">
                    <h1 className="NorthernTerritories text-[24px] max-sm:text-[20px]">Create Account</h1>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <div className="flex max-sm:flex-col gap-5">
                        <input
                         type="text" 
                         placeholder="First name" 
                         className="w-full border border-[#ddd] h-[50px] pl-3"
                         id="firstName" 
                         value={firstName} 
                         onChange={onChange}  
                         />
                        <input
                         type="text" 
                         placeholder="Last name" 
                         className="w-full border border-[#ddd] h-[50px] pl-3"
                         id="lastName" 
                         value={lastName} 
                         onChange={onChange}
                        />
                    </div>
                    <div className="flex max-sm:flex-col gap-5">
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
                    </div>
                    <div className="flex max-sm:flex-col max-sm:gap-4 gap-6 sm:items-center">
                        <button className="py-2 px-4 bg-[#e2b808] text-[15px] rounded-sm max-sm:w-20" onClick={signUp}>Create</button>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1 text-[15px] max-sm:text-[14px]">
                                <h3>Returning customer?</h3>
                                <Link href="/login"><h3 className="text-[#e2b808]">Sign in</h3></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default  Register;