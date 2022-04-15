import React from 'react'

interface SearchForm {
    value?:string;
    onSearchChange?:React.ChangeEventHandler<HTMLInputElement>;
}
const SearchForm = ({value,onSearchChange}:SearchForm ) => {
    return (
        <div className="my-5">
            <h2 className="mb-3 ">Search your favorite cocktail</h2>
            <input className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" value={value}  onChange={onSearchChange}  type="text"/>
        </div> 
    )
}

export default SearchForm