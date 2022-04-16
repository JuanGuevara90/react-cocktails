import React, { useEffect } from 'react'
import {
  Link,
  useParams,
} from "react-router-dom";
import { fetchCocktailsByID } from '../api/detail';

type Props = {}

const Details = (props: Props) => {
  let { id } = useParams<"id">();
  useEffect(() => {
    fetchCocktailsByID(id).then((resu) => console.log(resu.data.drinks));
  }, [])
  return (

    <div>
      <h2>Details</h2>
      <span>{id}</span>
      <Link to="/">
        <button> Go to home</button>
      </Link>
    </div>
  )
}

export default Details