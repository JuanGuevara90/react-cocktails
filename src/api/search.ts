import axios, { AxiosResponse } from "axios";

import { SearchCocktailsResponse } from "./../models/Http";

export const fetchCocktailsByQuery = (
  query: string
): Promise<AxiosResponse<SearchCocktailsResponse, any>> =>
  axios.get<SearchCocktailsResponse>(
    `${import.meta.env.VITE_SEARCH_URL}${query}`
  );
