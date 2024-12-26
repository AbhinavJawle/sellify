import { Heading1 } from "lucide-react";
import { useState, useEffect } from "react";

const ProductCards = ({ onAddCart }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProductCards = async () => {
    try {
      setLoading(true);
      const productIDs = [];
      while (productIDs.length < 20) {
        const randomProductID = Math.floor(Math.random() * 20) + 1; // Fixed the random number generation
        if (!productIDs.includes(randomProductID)) {
          productIDs.push(randomProductID);
        }
      }

      const productPromises = productIDs.map(async (currentProductID) => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${currentProductID}`,
          { mode: "cors" }
        );
        const data = await response.json();
        console.log(response);
        return {
          id: data.id,
          title: data.title,
          price: data.price,
          image: data.image,
        };
      });

      const fetchedProducts = await Promise.all(productPromises);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      //console.error("Error response:", await response.text()); // Log the actual response text
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductCards();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading-spinner">...Loading</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-40 object-contain "
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 truncate">
              {product.title}
            </h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => onAddCart(product)}
              className="mt-3 w-full bg-gradient-to-r from-blue-50 to-purple-50 
             border-2 border-gray-300 shadow-lg text-black font-bold py-2 px-4 rounded 
             transition-colors duration-200 
             hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 
             hover:shadow-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
