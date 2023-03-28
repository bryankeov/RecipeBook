import React, { useState } from "react";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState(["", ""]);
  const [instructions, setInstructions] = useState(["", ""]);

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

  const handleInstructChange = (index, value) => {
    const updateInstructions = [...instructions];
    updateInstructions[index] = value;
    setInstructions(updateInstructions);
  };

  const onAddInstruct = () => {
    setInstructions([...instructions, ""]);
  };

  const onMinusInstruct = () => {
    const updateInstructions = [...instructions];
    updateInstructions.splice(-1, 1);
    setInstructions(updateInstructions);
  };

  const onSubmitRecipe = async (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      image: image,
      ingredients: ingredients,
      instructions: instructions,
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
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-ingreds">
        <h3>Ingredients</h3>
        {ingredients.map((item, index) => {
          return (
            <input
              className="ingred-input"
              type="text"
              placeholder={index + 1}
              key={uniqueID()}
              value={item}
              onChange={(e) => handleIngredChange(index, e.target.value)}
            />
          );
        })}
        <div className="btn-container">
          <button type="button" className="update-btn" onClick={onAddIngred}>
            +
          </button>
          <button type="button" className="update-btn" onClick={onMinusIngred}>
            -
          </button>
        </div>
      </div>
      <div className="form-instructions">
        <h3>Instructions</h3>
        {instructions.map((item, index) => {
          return (
            <input
              key={uniqueID()}
              className="instruction-input"
              type="text"
              placeholder={index + 1}
              value={item}
              onChange={(e) => handleInstructChange(index, e.target.value)}
            />
          );
        })}
        <div className="btn-container">
          <button type="button" className="update-btn" onClick={onAddInstruct}>
            +
          </button>
          <button
            type="button"
            className="update-btn"
            onClick={onMinusInstruct}
          >
            -
          </button>
        </div>
      </div>
      <br />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
