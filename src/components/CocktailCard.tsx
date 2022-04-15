import React from 'react';
import CocktailModel from '../models/Cocktail';

interface CocktailCardsProps {
  data: CocktailModel;
};

const CocktailCard = ({ data }: CocktailCardsProps) => {
  const { strDrink, strAlcoholic, strGlass, strDrinkThumb } = data;

  return (
    <div className='w-72 overflow-hidden rounded-lg shadow-lg hover:scale-105'>
      <img
        className='object-cover w-full h-72'
        src={strDrinkThumb}
        alt='Flower and sky'
      />
      <div className='px-6 py-4'>
        <h4 className='mb-3 text-3xl font-semibold text-gray-800'>
          {strDrink}
        </h4>
        <p className='leading-normal  text-gray-700'>
          {strGlass}
        </p>
        <p className='leading-normal text-gray-700'>
          {strAlcoholic}
        </p>
      </div>
    </div>
  );
};

export default CocktailCard;
