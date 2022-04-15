import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className='h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-orange-500 rounded-lg focus:shadow-outline hover:bg-orange-600'
      onClick={onClick}
      >
      {label}
    </button>
  );
};

export default Button;
