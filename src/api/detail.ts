import axios, { AxiosResponse } from "axios";

import { CocktailsResponse } from "./../models/Http";

export const fetchCocktailsByID = (
  id?: string
): Promise<AxiosResponse<CocktailsResponse, any>> =>
  axios.get<CocktailsResponse>(
    `${import.meta.env.VITE_FIND_BY_ID}${id}`
  );