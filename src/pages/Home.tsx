import { useState } from 'react'
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
  return (
    <>
      <PageTitle text="Cocktail Land" />
      <SearchForm query={searchQuery} onSearchChange={(value) => setSearchQuery(value)}/>
      <CocktailList  listCocktails={Array.from({ length: 10 }, () => CocktailDemo)}/>
    </>
  )
}

export default Home