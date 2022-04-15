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
    <div className="w-72 overflow-hidden rounded-lg shadow-lg hover:scale-105">
      <img
        className="object-cover w-full h-72"
        src={strDrinkThumb}
        alt={`drink-${idDrink}`}
      />
      <div className="p-3">
        <h4 className="mb-3 text-3xl font-semibold text-gray-800">
          {strDrink}
        </h4>
        <p className="text-gray-700">
          {strGlass}
        </p>
        <p className="text-sm text-gray-500">
          {strAlcoholic}
        </p>
        <div className="flex justify-end">
          <Button label="See details" onClick={onDetailClick} />
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
