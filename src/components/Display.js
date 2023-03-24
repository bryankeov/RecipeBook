import db from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "./Display.css";

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
      const recID = snapshot.docs.map((doc) => doc.id);
      data[0].id = recID;
      setRecipes(data);
    };
    fetchData();
  };
  return (
    <div className="display-container">
      {recipes.map((recipe) => (
        <div className="card-container" key={recipe.id}>
          <img className="card-image" src={recipe.image} alt={recipe.name} />
          <h4>{recipe.name}</h4>
        </div>
      ))}
    </div>
  );
}
