import db from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, query, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Recipe.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const location = useLocation();
  const value = location.state;

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = () => {
    const fetchData = async () => {
      try {
        const q = query(doc(db, "recipes", value));
        const snapshot = await getDoc(q);
        setRecipes(snapshot.data());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  return (
    <div className="recipe-container">
      <div className="recipe" key={recipes.id}>
        <h3>{recipes.name}</h3>
        <img src={recipes.image} alt={recipes.name} />
        <br />
        <br />
        <h4>Ingredients</h4>
        <ul className="ingredient-container">
          {recipes.length &&
            recipes.ingredients.map((ingredient) => (
              <li key={uuidv4()}>{ingredient}</li>
            ))}
        </ul>
        <br />
        <h4>Instructions</h4>
        <ol className="instruction-container">
          {recipes.length &&
            recipes.instructions.map((instruction) => (
              <li key={uuidv4()}>{instruction}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}
