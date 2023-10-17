import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillCartFill } from 'react-icons/bs';
const Cart = () => {
    return ( 
        <div className='px-5 pt-12 pb-10 flex flex-col gap-5'>
            <div className="flex justify-between w-full">
                <h1 className="NorthernTerritories text-[24px]">Your Cart</h1>
                <h4 className="text-[#e2b808] flex gap-1 items-center text-[15px]">Continue shopping <IoIosArrowForward /></h4>
            </div>
            <div className='bg-white shadow shadow-lg p-5 border border-slate-200 flex flex-col items-center justify-center gap-5 h-[350px]'>
                <h3 className=' text-[15px] text-[#5c5c5c]'>Your Cart is empty</h3>
                <Link href="/shop-all"><h3 className="p-3 bg-[#e2b808] w-52 text-[17px] rounded-sm flex gap-1 items-center justify-center"><BsFillCartFill />Continue shopping </h3></Link>
            </div>
        </div>
     );
}
 
export default Cart;