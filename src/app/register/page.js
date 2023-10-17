import Link from "next/link";

const   Register = () => {
    return ( 
        <div className="flex justify-center py-10">
            <div className="w-[600px] flex flex-col gap-8">
                <div className="flex flex-col gap-8 w-full items-center justify-center">
                    <h1 className="NorthernTerritories text-[24px]">Create Account</h1>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <input type="text" placeholder="First name" className="w-full border border-[#ddd] h-[50px] pl-3"/>
                        <input type="text" placeholder="Last name" className="w-full border border-[#ddd] h-[50px] pl-3" />
                    </div>
                    <div className="flex gap-5">
                        <input type="text" placeholder="Email" className="w-full border border-[#ddd] h-[50px] pl-3"/>
                        <input type="text" placeholder="Password" className="w-full border border-[#ddd] h-[50px] pl-3" />
                    </div>
                    <div className="flex gap-6 items-center">
                        <button className="py-2 px-4 bg-[#e2b808] text-[15px] rounded-sm">Create</button>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1 text-[15px]">
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