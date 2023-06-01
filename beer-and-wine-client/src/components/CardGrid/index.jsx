import React from "react";
import ShowCard from "../ShowCard";
import { Grid } from "../Grid";
import { Main, Container } from "./style";

const CardGrid = ({ drinks }) => {
  return (
    <Container id="drinks">
      <Main>
        <section>
          {drinks?.length ? (
            <>
              <Grid>
                {drinks?.map((drink) => (
                  <ShowCard
                    key={drink.idDrink}
                    title={drink.strDrink}
                    img={drink.strDrinkThumb}
                    price={`$${Math.floor(Math.random() * 10) + 5}`}
                  />
                ))}
              </Grid>
            </>
          ) : (
            <></>
          )}
        </section>
      </Main>
    </Container>
  );
};

export default CardGrid;
