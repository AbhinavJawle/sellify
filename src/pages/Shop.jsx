import { useOutletContext } from "react-router-dom";
import ProductCards from "../components/ProductCards";

const Shop = () => {
  const { addToCart } = useOutletContext();

  return <ProductCards onAddToCart={addToCart} />;
};

export default Shop;
