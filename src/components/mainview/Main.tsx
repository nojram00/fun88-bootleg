'use client'
import { Game } from '@/mock-api/apihandler';
import React from 'react'
import GameCard from '../GameCard';

export default function Main({ games } : { games : Array<Game> }) {

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 py-3 px-2 justify-items-center items-center">
        { games.map((game, i) => (
            <GameCard game={game} key={i}/>
        ))}
    </div>
  )
}
