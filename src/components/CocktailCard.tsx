import React from 'react';

type Props = {};

const CocktailCard = (props: Props) => {
  return (
    <div className='max-w-xs overflow-hidden rounded-lg shadow-lg hover:scale-105'>
      <img
        className='object-cover w-full h-48'
        src='https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='Flower and sky'
      />
      <div className='px-6 py-4'>
        <h4 className='mb-3 text-xl font-semibold text-gray-800'>
          This is the title
        </h4>
        <p className='leading-normal text-gray-700'>
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
          tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p>
      </div>
    </div>
  );
};

export default CocktailCard;
