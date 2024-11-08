
export enum Category {
    FAVORITES,
    NEW,
    SLOTS,
    LIVE,
    JACKPOTS,
    TABLEGAMES,
    BINGO,
    OTHERS
}


export type Game = {
    id: number,
    name : string,
    provider : string,
    image : string,
    category : Category | null,
    favorite? : boolean,
}

const games : Array<Game> = [
    {
        id: 0,
        name : "Anaconda wild 2",
        provider : "Playtech",
        image : "/game_icons/anaconda.webp",
        category : Category.NEW
    },
    {
        id: 1,
        name: "Azteca Bonus Lines",
        provider: "Playtech",
        image : "/game_icons/azteca.webp",
        category : Category.SLOTS
    },
    {
        id : 2,
        name : "Sugar Rush",
        provider : "Pragmatic Play",
        image : "/game_icons/sugar.webp",
        category: Category.JACKPOTS
    },
    {
        id: 3,
        name: "Beach Life",
        provider: "Playtech",
        image : "/game_icons/beach.webp",
        category : Category.SLOTS
    },
    {
        id: 4,
        name: "Crocodile Blitz",
        provider: "Playtech",
        image : "/game_icons/croc.webp",
        category : Category.NEW
    },
    {
        id: 5,
        name: "Book of Egypt",
        provider: "Playtech",
        image : "/game_icons/azteca.webp",
        category : Category.SLOTS
    },
    {
        id: 6,
        name: "Inca Jackpot",
        provider: "Skywind",
        image : "/game_icons/inca.webp",
        category : Category.JACKPOTS
    },
    {
        id: 7,
        name: "Maya Jackpot",
        provider: "Skywind",
        image : "/game_icons/maya.webp",
        category : Category.JACKPOTS
    },
    {
        id: 8,
        name: "Pride of Persia",
        provider: "Playtech",
        image : "/game_icons/persia.webp",
        category : Category.NEW
    },
    {
        id: 6,
        name: "Pirates Power",
        provider: "Expanse",
        image : "/game_icons/pirates.webp",
        category : Category.TABLEGAMES
    },

]

export const getGames = () : Promise<Game[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games);
        }, 1000)
    })
}

export const addFavorite = (game : Game) => {

    return new Promise((resolve) => {
        const data = localStorage.getItem("favorites")

        if (typeof data === 'object')
        {
            localStorage.removeItem("favorites")
        }

        if(data)
        {
            const favorites : Array<Game> = JSON.parse(data);

            if(favorites.filter(g => g.id === game.id).length > 0)
            {
                localStorage.setItem("favorites", JSON.stringify(favorites.filter(fave => fave.id !== game.id)));

                resolve(favorites.filter(fave => fave.id !== game.id));
            }

            const new_faves : Array<Game> = [];

            new_faves.push(...favorites, game);

            const set = new Set();

            new_faves.forEach(g => set.add(g));

            localStorage.setItem("favorites", JSON.stringify(Array.from(set)));

            resolve(set);
        }
        else
        {
            const new_faves : Array<Game> = [];

            new_faves.push(game);

            const set = new Set(new_faves);

            new_faves.forEach(g => set.add(g));

            localStorage.setItem("favorites", JSON.stringify(Array.from(set)));

            resolve(set);
        }
    })

}

export const getFavorites = () : Promise<Array<Game>> => {
    return new Promise((resolve) => {
        const data = localStorage.getItem("favorites")

        if(data)
        {
            const favorites : Array<Game> = []

            favorites.push(...JSON.parse(data));
            setTimeout(() => {
                resolve(favorites);
            }, 3000)
        }
    })
}

export const removeToFavorite = (id : number) => {
    return new Promise((resolve) => {
        const data = localStorage.getItem("favorites")
        if(data)
        {
            const favorites = JSON.parse(data);

            const new_faves : Array<Game> = favorites;

            localStorage.setItem("favorites", JSON.stringify(new_faves.filter(fave => fave.id !== id)));

            resolve(new_faves.filter(fave => fave.id !== id));
        }
    })
}
