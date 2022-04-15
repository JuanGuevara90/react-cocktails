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
    <div className='flex flex-wrap'>
      {
        listCocktails.map((cocktail:CocktailModel,index:number)=>{
          return <CocktailCard key={`cocktailID_${index}`} data={cocktail} />
        })
      }
    </div>
  )
}

export default CocktailsList