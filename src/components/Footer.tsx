/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Sports from './icons/footerbar/Sports'
import Fave from './icons/footerbar/Fave'
import Invite from './icons/footerbar/Invite'
import Casino from './icons/footerbar/Casino'
import Cashier from './icons/footerbar/Cashier'
import { Category } from '@/mock-api/apihandler'

export default function Footer({ action } : { action : (() => void) | ((params : any) => void)}) {

  const nav = [
    {
        icon : <Sports />,
        name : "Sports",
        callback : () => { action(null)}
    },
    {
        icon : <Fave />,
        name : "Favorites",
        callback : () => { action(Category.FAVORITES)}
    },
    {
        icon : <Invite />,
        name : "Invite",
        callback : () => console.log("Invite")
    },
    {
        icon : <Casino />,
        name : "Casino",
        callback : () => console.log("Casino")
    },
    {
        icon : <Cashier />,
        name : "Cashier",
        callback : () => console.log("Cashier")
    }
  ]
  return (
    <footer className='sticky bottom-0 md:h-[75px] h-fit border-t-2 flex items-center justify-evenly w-full bg-white'>
        { nav.map((n, i) => (
            <button onClick={n.callback} key={i} className='hover:bg-black/25 p-3 rounded-md flex flex-col items-center'>
                { n.icon }
                { n.name }
            </button>
        ))}


    </footer>
  )
}
