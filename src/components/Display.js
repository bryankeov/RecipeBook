import db from "../firebase";
import { collection, query, getDocs, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import KatsuCurry from "../images/Katsu_Curry.jpeg";

export default function Display() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    const fetchData = async () => {
      const q = query(collection(db, "recipes"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setRecipes(data);
    };
    fetchData();
  };
  console.log(recipes);
  return (
    <div className="display-container">
      {recipes.map((recipe) => (
        <div className="recipe-thumbnail" key={recipe.name}>
          {!recipe.image ? (
            <img src={recipe.image} alt={recipe.name} />
          ) : (
            <img src={KatsuCurry} alt={recipe.name} />
          )}
          <h4>{recipe.name}</h4>
        </div>
      ))}
    </div>
  );
}
