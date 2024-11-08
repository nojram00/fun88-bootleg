import { Category, Game } from '@/mock-api/apihandler';
import React from 'react'
import Main from './Main';
import CategorizedGames from './CategorizedGames';
import Favorites from './Favorites';
import Filtered from './Filtered';

export default function Controller({ games, category, filter } : { games : Array<Game>, category : Category | null, filter : string | null }) {

    if (category === null)
    {
        if(filter === null)
        {
            return <Main games={games} />
        }

        return <Filtered games={games} filter={filter}/>

    }
    else if (category !== null && category !== Category.FAVORITES)
    {
        return <CategorizedGames games={games} category={category}/>
    }
    else
    {
        return <Favorites />
    }

}
