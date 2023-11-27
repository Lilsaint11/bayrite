import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import { BsWhatsapp } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bayrite clone',
  description: 'Zodiac and chocker gem necklaces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#e2b808] flex items-center justify-center h-12">
            <h3 className="text-black font-bold text-sm sm:text-lg"> CASH ON DELIVERY ACCEPTED  NATIONWIDE 🚚</h3>
        </div>
        <Header />
        {children}
        <div className='fixed right-0 z-40 bottom-6 flex items-center gap-2 cursor-pointer'>
          <h3 className='bg-white shadow shadow-md shadow-slate-400 text-black p-2 NorthernTerritories rounded-md text-[12px]'>Chat with us</h3>
          <BsWhatsapp className='text-[36px] rounded-full bg-[#e2b808] p-3 w-16 h-16'/>
        </div>
        <Footer />
      </body>
    </html>
  )
}
