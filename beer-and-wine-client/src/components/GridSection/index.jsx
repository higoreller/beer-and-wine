import React, { Fragment, useState } from "react";
import Heading from "@component/Heading";
import Container from "../Container";
import CardGrid from "./../CardGrid";
import DrinkFilter from "./../DrinkFilter";
import { SectionWrapper, FeatureWrapper, SectionHeader } from "./style";
import useCocktailAPI from "./../../hooks/useCocktailAPI";

const GridSection = () => {
  const { options, drinks, fetchDrinks } = useCocktailAPI();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = () => {
    fetchDrinks({ c: selectedCategory });
  };

  return (
    <SectionWrapper id="grid-section">
      <Container>
        <DrinkFilter options={options} fetchDrinks={fetchDrinks} />
        <CardGrid drinks={drinks} />
      </Container>
    </SectionWrapper>
  );
};

export default GridSection;
