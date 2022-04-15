import React, { useState } from 'react'
import Button from '../components/Button'
import CocktailCard from '../components/CocktailCard'
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
    <div>
      <SearchForm query={searchQuery} onSearchChange={(value) => setSearchQuery(value)}/>
      <CocktailCard data={CocktailDemo} />
    </div>
  )
}

export default Home