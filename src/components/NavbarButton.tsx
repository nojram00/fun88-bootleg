import React, { ReactNode } from 'react'

export default function NavbarButton({ children, action, className  } : { children : ReactNode, action? : () => void | undefined, className? : string }) {
  return (
    <button onClick={action} className={`flex flex-col gap-1 p-2 min-w-[60px] rounded-md items-center justify-center hover:bg-slate-200 ${className}`}>
        { children }
    </button>
  )
}
