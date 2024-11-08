import React from 'react'
import Search from './icons/Search'
import FilterSearch from './icons/FilterSearch'
import Image from 'next/image'

export default function Searchbar({ setFilter } : { setFilter : ( filter : string) => void }) {


  const providers = [
    {
      name : "Every Matrix",
      image : "/logo/EM.webp"
    },
    {
      name : "Evolution",
      image : "/logo/EVO.webp"
    },
    {
      name: "Expanse",
      image: "/logo/EXPANSE.webp"
    },
    {
      name: "Ezugi",
      image: "/logo/EZG.webp"
    },
    {
      name: "Gameart",
      image: "/logo/GAMEART.webp"
    },
    {
      name: "Habanero",
      image: "/logo/HAB.webp"
    },
    {
      name: "Hacksaw",
      image: "/logo/HACKSAW.webp"
    },
    {
      name: "Inbet",
      image: "/logo/INBET.webp"
    },
    {
      name: "Mplay",
      image: "/logo/MPLAY.webp"
    },
    {
      name: "Netent",
      image: "/logo/NETENT.webp"
    },
    {
      name: "PG",
      image: "/logo/PGSOFT.webp"
    },
    {
      name: "Play 'n Go",
      image: "/logo/PNG.webp"
    },
    {
      name: "Pragmatic Play",
      image: "/logo/PP.webp"
    },
    {
      name: "Playson",
      image: "/logo/PS.webp"
    }
  ]

  const pop_up = React.useRef<HTMLDialogElement>(null)


  return (
    <div className="w-full flex flex-row justify-evenly gap-2">
        <div className="flex flex-row flex-1 items-center border-2 h-[40px] w-1/2 rounded-md pl-1">
            <button>
            <Search />
            </button>
            <input type="text" className="w-full border-none h-full"/>
        </div>
        <button onClick={() => pop_up.current?.showModal() } className="border-2 px-2 rounded-md">
            <FilterSearch />
        </button>

        <dialog ref={pop_up} className='w-full h-screen rounded-md flex-col'>
          <div className='w-full flex flex-row items-center gap-3 top-0 p-2 bg-primary sticky'>
            <button className='border-2 rounded-md' onClick={() => pop_up.current?.close()}>
              <FilterSearch />
            </button>
            <span className='text-white'>Game Provider</span>
          </div>

          <div className='h-full w-full grid grid-cols-2 p-1 items-center justify-items-center gap-3'>
            { providers.map((provider, id) => (
              <button key={id} onClick={() => {
                pop_up.current?.close();
                setFilter(provider.name);
              }} className='bg-black/25 flex items-center hover:bg-black/50 w-[150px] h-[80px] rounded-md'>
                <Image src={provider.image} alt="logo" height={120} width={120}/>
              </button>
            ))}
          </div>
        </dialog>
    </div>
  )
}
