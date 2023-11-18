import { GrCheckmark } from 'react-icons/gr';
import { BiLogoFacebook,BiLogoInstagramAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return ( 
        <div className="flex flex-col gap-20 max-sm:gap-16 bg-[#f8f8f8] px-7 pt-16 pb-12 max-sm:pb-7">
            <div className='flex max-sm:flex-col gap-24 max-sm:gap-5'>
                <div className='flex flex-col gap-5 max-sm:border-b max-sm:border-slate-300 max-sm:pb-5'>
                    <h3 className="NorthernTerritories text-[#5c5c5c] text-[14px]">Why buy from us ?</h3>
                    <div className="flex items-center gap-2 text-[#5c5c5c] text-[15px]">
                        <GrCheckmark />
                        <h4 className='capitalize'>Easy Returns</h4>
                    </div>
                    <div className="flex items-center gap-2 text-[#5c5c5c] text-[15px]">
                        <GrCheckmark />
                        <h4 className='capitalize'>Secured Payments</h4>
                    </div>
                    <div className="flex items-center gap-2 text-[#5c5c5c] text-[15px]">
                        <GrCheckmark />
                        <h4 className='capitalize'>Positive feedbacks</h4>
                    </div>
                    <div className="flex items-center gap-2 text-[#5c5c5c] text-[15px]">
                        <GrCheckmark />
                        <h4 className='capitalize text-[17px] font-bold'>We Put Our Customers First</h4>
                    </div>
                    <div className="flex items-center gap-2 text-[#5c5c5c] text-[15px]">
                        <GrCheckmark />
                        <h4 className='capitalize'>100% Satisfaction</h4>
                    </div>
                    <div className="flex items-center gap-2 text-[#5c5c5c] text-[15px]">
                        <GrCheckmark />
                        <h4 className='capitalize'>Money Back Guarantee</h4>
                    </div>
                </div>
                <div className='flex flex-col gap-5 max-sm:border-b max-sm:border-slate-300 max-sm:pb-5'>
                    <h3 className="NorthernTerritories text-[#5c5c5c] text-[14px]">Navigate</h3>
                    <h4 className='capitalize cursor-pointer'>Home</h4>
                    <h4 className='capitalize cursor-pointer'>our Advantages</h4>
                    <h4 className='capitalize cursor-pointer'>Contact Us</h4>
                </div>
                <div className='flex flex-col gap-5 max-sm:border-b max-sm:border-slate-300 max-sm:pb-5'>
                    <h3 className="NorthernTerritories text-[#5c5c5c] text-[14px]">Follow Us</h3>
                    <div className='text-[#5c5c5c] flex gap-2'>
                        <BiLogoFacebook className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                        <BiLogoInstagramAlt className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                        <MdEmail className='rounded-full text-[20px] bg-[#ddd] w-7 h-7 p-1 cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className=' text-[#5c5c5c] text-[13px] max-sm:flex max-sm:flex-col max-sm:items-center'>
                <div className='flex text-[#5c5c5c] gap-1 mb-2 max-sm:flex-wrap max-sm:items-center justify-center'>
                    <p className='cursor-pointer'>About Us |</p>
                    <p className='cursor-pointer'>FAQS |</p>
                    <p className='cursor-pointer'>Privacy Policy |</p>
                    <p className='cursor-pointer'>Return Policy |</p>
                    <p className='cursor-pointer'>Shipping Information |</p>
                    <p className='cursor-pointer'>Terms of service |</p>
                    <p className='cursor-pointer'>Refund policy</p>
                </div>
                <p className='mb-1'>Copyright © 2023 Bayrite.</p>
                <p>powered by Bayrite</p>
            </div>
        </div>
     );
}
 
export default Footer;