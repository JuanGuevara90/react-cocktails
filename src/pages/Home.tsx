import { useEffect, useState } from 'react'
import { fetchCocktailsByQuery } from '../api/search'
import CocktailList from '../components/CocktailList'
import PageTitle from '../components/PageTitle'
import SearchForm from '../components/SearchForm'
import CocktailModel from '../models/Cocktail'

type Props = {}

const CocktailDemo: CocktailModel = {
  idDrink: "15082",
  strDrink: "Royal Flush",
  strAlcoholic: "Alcoholic",
  strGlass: "Old-fashioned glass",
  strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/7rnm8u1504888527.jpg"
}

const Home = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("Margarita");
  const [cocktails, setCocktails] = useState<CocktailModel[]>([]);

  useEffect(() => {
    fetchCocktailsByQuery(searchQuery).then(({ data: { drinks } }) => setCocktails(drinks));
  }, [searchQuery]);

  return (
    <>
      <PageTitle text="Cocktail Land" />
      <SearchForm query={searchQuery} onSearchChange={(value) => setSearchQuery(value)}/>
      <CocktailList  listCocktails={cocktails}/>
    </>
  )
}

export default Home