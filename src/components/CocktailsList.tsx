import React from 'react'
import CocktailModel from '../models/Cocktail'
import CocktailCard from './CocktailCard';

interface CockTailListProps {
  listCocktails?: Array<CocktailModel>;
}

const CocktailsList = ({listCocktails}:CockTailListProps) => {
  if(!listCocktails || listCocktails.length===0){
    return <>There are not cocktails</>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-5">
      {
        listCocktails.map((cocktail:CocktailModel,index:number)=>{
          return <CocktailCard key={`cocktailID_${index}`} data={cocktail} />
        })
      }
    </div>
  )
}

export default CocktailsList