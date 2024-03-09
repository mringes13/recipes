// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import DinnerData from './dinner.json';
import Recipe from './components/Recipe';

import backgroundImage from './bg.jpg';

const App = () => {
  return (
    <Router>
      <StyledDiv>
        <StyledNav>
            <Link to="/">Recipe Router</Link>
        </StyledNav>

        <Routes>
          <Route path="/recipe/:url" element={<Recipe />} />
          <Route path="/" element={<RecipeList recipes={DinnerData} />} />
        </Routes>
      </StyledDiv>
    </Router>
  );
};

const RecipeList = ({ recipes }) => {
  return (
    <StyledList>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.url}`}>{recipe.title}</Link>
        </li>
      ))}
    </StyledList>
  );
};
const StyledDiv = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  min-height: 100vh;

`
const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 40px;
    font-family: "Rock Salt", cursive;
  }
`
const StyledList = styled.ul`
  a{
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
`
export default App;
