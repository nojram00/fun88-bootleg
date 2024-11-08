'use client'
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Controller from "@/components/mainview/Controller";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import { Category, Game, getGames } from "@/mock-api/apihandler";
import React from "react";

export default function Home() {

  const [category, SetCategory] = React.useState<Category | null>(null);

  const [games, setGames] = React.useState<Array<Game>>(Array<Game>);

  const [searchBar, toggleSearchBar] = React.useState(false)

  const [filter, setFilter] = React.useState<string | null>(null)

  const fetchApi = async () => {
    await getGames().then((data) => setGames(data));
  }

  React.useEffect(() => {
    fetchApi();
  });



  return (
    <div className="min-h-screen flex-col">
      <Header />
      <main className="flex-row flex-1 h-screen">
        <Carousel />
        <header className="w-full flex flex-col gap-2 px-3">
          <Navbar searchBarCallback={() => toggleSearchBar(!searchBar) } callback={SetCategory} callback2={() => setFilter(null)}/>

          { searchBar && (
            <Searchbar setFilter={setFilter}/>
          )}

        </header>

        <Controller games={games} category={category} filter={filter}/>
      </main>
      <Footer action={SetCategory}/>
    </div>
  );
}
