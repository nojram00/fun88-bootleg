import { Game } from '@/mock-api/apihandler'
import React from 'react'
import GameCard from '../GameCard'

export default function Filtered({ games, filter } : { games: Array<Game> , filter : string | null }) {


  return (
    games.filter(game => game.provider === filter).length > 0 ?
    (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 py-3 px-2 justify-items-center items-center">
            { games.filter(game => game.provider === filter).map((game, i) => (
                <GameCard game={game} key={i}/>
            ))}
        </div>
    ) :
    (
        <div className='w-full flex items-center justify-center mt-4'>
          <h1 className='text-md text-slate-400'>No Games Found</h1>
        </div>
    )
  )
}
