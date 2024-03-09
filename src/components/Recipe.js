// Recipe.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import recipes from '../dinner.json';

const Recipe = () => {
  const { url } = useParams();
  const recipe = recipes.find(recipe => recipe.url === url);

  if (!recipe) {
    return <div>No recipes found!</div>;
  }

  return (
    <Card>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Times>
        <p>Prep Time: {recipe.prepTime}</p>
        <p>Cook Time: {recipe.cookTime}</p>
        <p>Total Time: {recipe.totalTime}</p>
      </Times>

      <h3>Ingredients</h3>
      <Ingredients>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </Ingredients>

      <h3>Instructions</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </ol>
    </Card>
  );
};

const Card = styled.div`
    padding: 0 2rem 2rem;
    margin: 0 auto;
    max-width: 75%;

    @media print {
        max-width: 85%;

        @page {
            margin: 1in 0;
        }

        @page :first {
            margin-top: 0.25in;
        }
    }
`

const Times = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-around;

    p{
        margin: 0 10px;
    }
`
const Ingredients = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;

  @media (max-width: 500px) {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
`;
const Step = styled.li`
    margin: 1rem 0;
    line-height: 1.5rem;
`
export default Recipe;
