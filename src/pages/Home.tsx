import React from 'react'
import Button from '../components/Button'
import CocktailCard from '../components/CocktailCard'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Button label="my button"/>
      <CocktailCard />
    </div>
  )
}

export default Home