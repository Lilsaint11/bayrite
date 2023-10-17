const Contact = () => {
    return ( 
        <div className="flex justify-center py-10">
            <div className="w-[650px] flex flex-col gap-8">
                <div className="flex flex-col gap-8 w-full items-center justify-center">
                    <h1 className="NorthernTerritories text-[28px]">WE'RE HERE To HELp</h1>
                    <p className="capitalize text-[15px] leading-loose">Still have a question? We’re happy to answer any questions you might have! Please fill out the form below or send us an email to  support@bayrite.com. Just make sure to check out our <span className="text-[#e2b808]">FAQ page</span> - stypically the answers to most questions are right there!</p>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <div className="flex w-full gap-5">
                        <input type="text" placeholder="Name" className="w-full border border-[#ddd] h-[50px] pl-3"/>
                        <input type="text" placeholder="Email" className="w-full border border-[#ddd] h-[50px] pl-3"/>
                    </div>
                    <input type="text" placeholder="Phone Number" className="w-full border border-[#ddd] h-[50px] pl-3" />
                    <textarea name="" id="" cols="10" rows="7" placeholder="Message" className="w-full border border-[#ddd] pl-3 pt-3"></textarea>
                    <button className="p-2 bg-[#e2b808] w-16 text-[17px] rounded-sm">Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;