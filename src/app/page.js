import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex gap-5 w-full px-5 mt-7 text-white'>
        <div className='bg-[url("https://bayrite.com/cdn/shop/files/White_Modern_Smart_Watch_Amazon_Product_Image_00257ecb-3d67-4124-a8e0-39bbb998a7be_1080x1080.png?v=1679754780")] bg-cover bg-no-repeat bg-center min-h-[340px] p-8 w-full cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold NorthernTerritories capitalize'>Gemstone Collection</h2>
            <h4 className='text-[18px] font-normal max-w-[300px]'> 
              Our Bayrite Choker  is a beautiful  statement piece. Crafted from 18k gold and sliver filled stainless steel.
            </h4>
            <span class="text-black bg-white p-3 w-36 mt-1 text-[14px] cursor-pointer rounded-sm">
              SHOW NOW -&gt;
            </span>
          </div>
        </div>
        <div className='bg-[url("https://bayrite.com/cdn/shop/files/White_Modern_Smart_Watch_Amazon_Product_Image_1_4990406d-01b4-4a27-9986-b0deceb9b77e_859x859.png?v=1679755100")] bg-cover bg-no-repeat bg-center min-h-[340px] p-8 w-full cursor-pointer'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold NorthernTerritories capitalize'>Zodiac Necklace</h2>
          <h4 className='text-[18px] font-normal max-w-[300px]'>Zodiac jewellery can be the ultimate expression of who you are and what you value.
          </h4>
          <span class="text-black bg-white p-3 w-36 mt-1 text-[14px] cursor-pointer rounded-sm">
            SHOW NOW -&gt;
          </span>
        </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-8 mt-16'>
        <h3 className='text-[24px]'>Zodiac Necklace</h3>
        <div className='flex  gap-5'>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/BayriteNew10323_260x260.jpg?v=1675713287" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N8,000.00</h3>
            <h4 className='text-[17px]'>Gemini Zodiac Necklace</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
        </div>
        <button className='text-black bg-[#e2b808] py-3 px-5 rounded-sm text-[14px]'>SHOW NOW</button>
      </div>
      
      <div className='flex flex-col justify-center items-center gap-8 mt-16'>
        <h3 className='text-[24px]'>Gemstone Choker</h3>
        <div className='flex  gap-5'>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
            <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
            <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
            <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
          <div className='bg-white shadow shadow-lg p-5 border border-slate-200 cursor-pointer'>
            <img src="https://bayrite.com/cdn/shop/products/Bayrite4_04fbc58e-1179-4f8c-95a4-a05212fde3bc_260x260.jpg?v=1671302541" alt="" className='object-contain w-56'/>
            <h3 className='text-[24px] text-[#e2b808]'>N17,000.00</h3>
            <h4 className='text-[17px]'>Blue Sapphire Choker</h4>
            <div>
              <p className='text-[12px]'>5 reviews</p>
            </div>
          </div>
        </div>
        <button className='text-black bg-[#e2b808] py-3 px-5 rounded-sm text-[14px]'>SHOW NOW</button>
      </div>

      <div className='flex flex-col justify-center items-center gap-5 my-36'>
        <h1 className='NorthernTerritories text-[20px]'>SUBSCRIBE</h1>
        <h3 className='text-slate-500 text-[16px]'>Sign up and be the first to hear about new products and specials</h3>
        <form action="" className="flex items-center justify-center h-[48px]  gap-5">
            <input type="text" placeholder='Email address' className="h-full rounded-sm pl-3 border border-slate-400 w-96 focus:outline-none"/>
            <div className="bg-[#e2b808] flex items-center justify-center h-full px-5 rounded-sm cursor-pointer">
            Sign up
            </div>
        </form>
      </div>
    </div>
  )
}
