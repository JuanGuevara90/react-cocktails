import React from "react";

interface SearchForm {
  query?: string;
  onSearchChange?: (query: string) => void;
}
const SearchForm = ({ query, onSearchChange }: SearchForm) => {
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onSearchChange) {
      const { target: { value } } = event;
      onSearchChange(value);
    }
  };

  return (
    <div className="py-6 px-10 my-5 border-[0.5px] bg-gray-100 border-gray-100 rounded-md">
      <h2 className="mb-3">Search your favorite cocktail</h2>
      <input
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        value={query}
        onChange={handleSearchChange}
        type="text"
      />
    </div>
  );
};

export default SearchForm;
