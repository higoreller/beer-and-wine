import React, { useState } from "react";
import { FilterContainer, Select, Button } from "./style";

const DrinkFilter = ({ options, fetchDrinks }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = () => {
    fetchDrinks({ c: selectedCategory });
  };

  return (
    <FilterContainer>
      <Select value={selectedCategory} onChange={handleCategoryChange}>
        {options.category.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </Select>
      <Button onClick={handleSearch}>Buscar</Button>
    </FilterContainer>
  );
};

export default DrinkFilter;
