'use client'
import React from 'react'
import Search from './icons/Search'
import NavbarButton from './NavbarButton'
import Start from './icons/Start'
import NewIcon from './icons/NewIcon'
import { Category } from '@/mock-api/apihandler'
import Live from './icons/Live'
import Jackpot from './icons/Jackpot'
import TableGame from './icons/TableGame'
import Bingo from './icons/Bingo'
import Others from './icons/Others'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({ callback, searchBarCallback, callback2 } : { callback? : (() => void) | ((param: any | null) => void), searchBarCallback : () => void, callback2 : () => void }) {

    enum NavState
    {
        START,
        NEW,
        SLOTS,
        LIVE,
        JACKPOTS,
        TABLEGAMES,
        BINGO,
        OTHERS
    }

    const [currentState, setState] = React.useState<NavState>(NavState.START)

    const navs = [
        {
            icon : <Start />,
            content : "Start",
            category : null,
            state : NavState.START
        },
        {
            icon : <NewIcon/>,
            content : "New",
            category : Category.NEW,
            state : NavState.NEW
        },
        {
            icon : <Start />,
            content : "Slots",
            category : Category.SLOTS,
            state : NavState.SLOTS
        },
        {
            icon : <Live />,
            content : "Live",
            category : Category.LIVE,
            state : NavState.LIVE
        },
        {
            icon : <Jackpot />,
            content : "Jackpots",
            category : Category.JACKPOTS,
            state : NavState.JACKPOTS
        },
        {
            icon : <TableGame />,
            content : "Table Games",
            category : Category.TABLEGAMES,
            state : NavState.TABLEGAMES
        },
        {
            icon : <Bingo />,
            content : "Bingo",
            category : Category.BINGO,
            state : NavState.BINGO
        },
        {
            icon : <Others />,
            content : "Others",
            category : Category.OTHERS,
            state : NavState.OTHERS
        },
    ]

  return (
    <div className='flex gap-1 h-fit top-[50px] items-center justify-between md:justify-center w-full border-slate-400 border-2 rounded-md'>
        <NavbarButton action={searchBarCallback} className='hover:rounded-r-none h-[100px] overflow-auto'>
            <Search />
            <span className='text-slate-400'>Search</span>
        </NavbarButton>
        <div className='flex gap-2 justify-evenly justify-content-center flex-1 overflow-scroll md:overflow-auto px-2'>
            { navs.map((nav, i) => (
                <NavbarButton key={i} action={() => {
                    callback?.(nav.category)
                    setState(nav.state)
                    callback2()
                }} className={`hover:rounded-md ${currentState === nav.state && "bg-gray-200 rounded-md"}`}>
                    { nav.icon }
                    <span className='text-slate-400'>{ nav.content }</span>
                </NavbarButton>
            ))}


        </div>
    </div>
  )
}
