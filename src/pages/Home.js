import Recipes from "../components/Recipes.js";
import Display from "../components/Display.js";

export default function Home() {
  return (
    <div className="home">
      <Display />
      <Recipes />
    </div>
  );
}
