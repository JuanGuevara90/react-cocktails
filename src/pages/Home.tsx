import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { fetchCocktailsByQuery } from "../api/search";
import CocktailList from "../components/CocktailList";
import PageTitle from "../components/PageTitle";
import SearchForm from "../components/SearchForm";
import CocktailModel from "../models/Cocktail";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("Margarita");
  const [cocktails, setCocktails] = useState<CocktailModel[]>([]);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    fetchCocktailsByQuery(debouncedSearchTerm).then(({ data: { drinks } }) =>
      setCocktails(drinks)
    );
  }, [debouncedSearchTerm]);

  return (
    <>
      <PageTitle text="Cocktail Land" />
      <SearchForm
        query={searchTerm}
        onSearchChange={(value) => setSearchTerm(value)}
      />
      <CocktailList listCocktails={cocktails} />
    </>
  );
};

export default Home;
