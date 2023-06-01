import { useState, useEffect } from "react";

const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";

const useCocktailAPI = () => {
  const [options, setOptions] = useState({
    alcoholic: [],
    category: [],
    glass: [],
  });

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchOptions("alcoholic");
    fetchOptions("category");
    fetchOptions("glass");
  }, []);

  const fetchOptions = async (optionType) => {
    try {
      const response = await fetch(`${API_BASE}list.php?${optionType[0]}=list`);
      const data = await response.json();
      setOptions((prevOptions) => ({
        ...prevOptions,
        [optionType]: data.drinks,
      }));
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const fetchDrinks = async (queryParams) => {
    try {
      const endpoint = getEndpoint(queryParams);
      const response = await fetch(`${API_BASE}${endpoint}`);
      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  const getEndpoint = (queryParams) => {
    if (queryParams.c) {
      return `filter.php?c=${queryParams.c}`;
    }
    // Other filters here
  };

  return {
    options,
    drinks,
    fetchDrinks,
  };
};

export default useCocktailAPI;
