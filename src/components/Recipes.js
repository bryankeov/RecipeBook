import db from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, query, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "./Recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    const fetchData = async () => {
      const q = query(collection(db, "recipes"));
      const snapshot = await getDocs(q);
      setRecipes(snapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  };

  return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div className="recipe" key={recipe.id}>
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} />
          <br />
          <br />
          <ul className="ingredient-container">
            <h4>Ingredients</h4>
            {recipe.ingredients.map((ingredient) => (
              <li key={uuidv4()}>{ingredient}</li>
            ))}
          </ul>
          <br />
          <div className="instruction-container">
            <h4>Instructions</h4>
            {recipe.instructions.map((instruction, index) => (
              <div key={uuidv4()}>
                {index + 1}: {instruction}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
