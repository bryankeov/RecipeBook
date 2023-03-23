import db from "../firebase";
import { collection, query, getDocs, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";

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
        <div className="recipe-thumbnail" key={recipe.id}>
          <img src={recipe.image} alt={recipe.name} />
          <h4>{recipe.name}</h4>
          {console.log(recipes)}
        </div>
      ))}
    </div>
  );
}
