import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function newRecipe(onNewRecipe) {
  const submitRecipe = async (e) => {
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
}
