import db from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const fetchData = async () => {
      const q = query(collection(db, "recipes"));
      const snapshot = await getDocs(q);
      setRecipes(snapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  };

  return (
    <div className="recipes">
      <button type="submit">Click Me</button>
    </div>
  );
}
