import { useOutletContext } from "react-router-dom";
import ProductCards from "../components/ProductCards";

const Shop = () => {
  //using useoutletcontext - makes things available to children - parent is app.jsx
  const { addToCart } = useOutletContext();

  return <ProductCards onAddToCart={addToCart} />;
};

export default Shop;
