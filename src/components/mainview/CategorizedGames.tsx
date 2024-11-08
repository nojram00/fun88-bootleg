import { Category, Game, getGames } from '@/mock-api/apihandler'
import React from 'react'
import GameCard from '../GameCard';

export default function NewGames({ games, category } : { games : Array<Game>, category : Category }) {

  return (

    games.filter(game => game.category === category).length > 0 ? (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 py-3 px-2 justify-items-center items-center">
        {games.filter(game => game.category === category).map((game, i) => (
            <GameCard game={game} key={i}/>
        ))}
    </div>
    ) :
    (
      (
        <div className='w-full h-[118px] flex items-center justify-center mt-4'>
          <h1 className='text-md text-slate-400'>No Games Found</h1>
        </div>
      )
    )
  )

}
