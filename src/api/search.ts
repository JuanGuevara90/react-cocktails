import axios, { AxiosResponse } from "axios";

import { CocktailsResponse } from "./../models/Http";

export const fetchCocktailsByQuery = (
  query: string
): Promise<AxiosResponse<CocktailsResponse, any>> =>
  axios.get<CocktailsResponse>(
    `${import.meta.env.VITE_SEARCH_URL}${query}`
  );


