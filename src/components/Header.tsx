import React from 'react'
import Hamburger from '@/components/icons/Hamburger'
import Wallet from "@/components/icons/Wallet"
import Image from 'next/image'
import User from '@/components/icons/User'

export default function Header() {
  return (
    <header className='h-[50px] shadow-md w-full sticky top-0 flex justify-between px-2 bg-white'>
      <div className='flex items-center justify-start flex-1 gap-1'>
        <button className='py-1 px-2 rounded-md'>
          <Hamburger />
        </button>
        <Image src="/logo/F1M5_Logo.webp" width={120} alt='logo' height={120} className='py-1 px-2'/>
      </div>
      <div className='flex items-center justify-end gap-3'>
        <div className='flex items-center gap-2'>
          <Wallet />
          <div className='font-bold text-[18px] text-primary'>
            $1990.6
          </div>
        </div>
        <User />
      </div>
    </header>
  )
}
