import React from 'react';
import CocktailModel from '../models/Cocktail';
import Button from './Button';

interface CocktailCardsProps {
  data: CocktailModel;
  onDetailClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CocktailCard = ({ data, onDetailClick }: CocktailCardsProps) => {
  const {  idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = data;

  return (
    <div className="flex flex-col w-72 bg-white overflow-hidden rounded-lg shadow-lg hover:scale-105 m-2">
      <img
        className="object-cover w-full h-72"
        src={strDrinkThumb}
        alt={`drink-${idDrink}`}
      />
      <div className="flex flex-col flex-grow p-3 pb-0">
        <h4 className="mb-3 text-3xl font-semibold text-gray-800">
          {strDrink}
        </h4>
        <p className="text-gray-700">
          {strGlass}
        </p>
        <p className="text-sm text-gray-500">
          {strAlcoholic}
        </p>
      </div>
      <div className="flex justify-end p-3">
        <Button label="See details" onClick={onDetailClick} />
      </div>
    </div>
  );
};

export default CocktailCard;
