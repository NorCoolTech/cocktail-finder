import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CoctailList from '../components/CoctailList';

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    const data = response.data;
    return {drinks:response.data.drinks, searchTerm};
};

const Landing = () => {
  const {drinks, searchTerm} = useLoaderData();
  return <>
    <CoctailList drinks={drinks} />
  </>;
};

export default Landing;
