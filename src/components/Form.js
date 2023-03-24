import React, { useState } from "react";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState(["", ""]);
  const [steps, setSteps] = useState(["", ""]);

  function uniqueID(value) {
    uuidv4(value);
  }

  const handleIngredChange = (index, value) => {
    const updateIngreds = [...ingredients];
    updateIngreds[index] = value;
    setIngredients(updateIngreds);
  };

  const onAddIngred = () => {
    setIngredients([...ingredients, ""]);
  };

  const onMinusIngred = () => {
    const updateIngreds = [...ingredients];
    updateIngreds.splice(-1, 1);
    setIngredients(updateIngreds);
  };

  const handleStepChange = (index, value) => {
    const updateSteps = [...steps];
    updateSteps[index] = value;
    setSteps(updateSteps);
  };

  const onAddStep = () => {
    setSteps([...steps, ""]);
  };

  const onMinusStep = () => {
    const updateSteps = [...steps];
    updateSteps.splice(-1, 1);
    setSteps(updateSteps);
  };

  const onSubmitRecipe = async (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      image: image,
      ingredients: ingredients,
      steps: steps,
    };

    addDoc(collection(db, "recipes"), payload);

    // onNewRecipe({
    //   ...payload,
    //   id: docRef.id,
    // });
  };

  return (
    <form className="form" onSubmit={onSubmitRecipe}>
      <div className="form-header">
        <label className="label">
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="label">
          Image:
          <input type="text" onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <div className="form-ingreds">
        <h3>Ingredients</h3>
        {ingredients.map((item, index) => {
          return (
            <input
              className="ingred-input"
              type="text"
              key={uniqueID()}
              value={item}
              onChange={(e) => handleIngredChange(index, e.target.value)}
            />
          );
        })}
        <button type="button" onClick={onAddIngred}>
          +Ingredient
        </button>
        <button type="button" onClick={onMinusIngred}>
          -Ingredient
        </button>
      </div>
      <div className="form-steps">
        <h3>Instructions</h3>
        {steps.map((item, index) => {
          return (
            <label key={uniqueID()}>
              {index + 1}:
              <input
                className="step-input"
                type="text"
                value={item}
                onChange={(e) => handleStepChange(index, e.target.value)}
              />
            </label>
          );
        })}
        <button type="button" onClick={onAddStep}>
          +Step
        </button>
        <button type="button" onClick={onMinusStep}>
          -Step
        </button>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
