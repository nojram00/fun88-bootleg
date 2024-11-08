/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import StartIconFilled from './icons/StartIconFilled';
import StarIcon from './icons/StarIcon';
import { addFavorite, Game, removeToFavorite } from '@/mock-api/apihandler';

export default function GameCard({ game } : { game : Game }) {

  const [isFavorite, setFavorite] = React.useState(false);

  const add = async () => {
    await addFavorite(game).then(data => console.log(data))
            .catch((err) => console.error(err));
  }

  const remove = async () => {
    await removeToFavorite(game.id).then(data => console.log(data))
            .catch(err => console.error(err));
  }

  const addToFavorite = () => {
    if(!isFavorite)
    {
        add()
    }
    else
    {
        remove();
    }

    setFavorite(!isFavorite)
  }

  return (
    <button onClick={() => addToFavorite()} className="relative rounded-md h-[110px] w-[110px] md:w-[200px] md:h-[200px] cursor-pointer"
        style={{
            backgroundImage : `url(${game.image})`,
            backgroundSize : 'cover',
            backgroundPosition : 'center'
        }}>
        <div className='absolute top-0 right-0 p-1 bg-gray-500/50 rounded-tr-md'>
            { isFavorite ? (
                <StartIconFilled />
            ) : (
                <StarIcon />
            )}
        </div>
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
    </button>
  )
}
