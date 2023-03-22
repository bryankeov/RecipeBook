import React, { useState } from "react";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import "./Form.css";

export default function Form(onNewRecipe) {
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const onSubmitRecipe = async (e) => {
    e.preventDefault();

    const payload = {
      title: "Katsu Curry",
      ingredients: [],
      steps: [],
    };

    const docRef = await addDoc(collection(db, "posts"), payload);

    onNewRecipe({
      ...payload,
      id: docRef.id,
    });
  };
  return (
    <form className="form" onSubmit={onSubmitRecipe}>
      <div className="form-header">
        <label className="label">
          Title:
          <input type="text"></input>
        </label>
        <label className="label">
          Image:
          <input type="text"></input>
        </label>
      </div>
      <div className="form-ingreds">
        <h3>Ingredients</h3>
        <input className="ingred-input" type="text" />
        <input className="ingred-input" type="text" />
        <button type="button">+Ingredient</button>
      </div>
      <div className="form-steps">
        <h3>Steps</h3>
        <input className="ingred-steps" type="text" />
        <input className="ingred-steps" type="text" />
        <button type="button">+Step</button>
      </div>
    </form>
  );
}
