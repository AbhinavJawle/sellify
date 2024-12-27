import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
const ProductCards = ({ onAddToCart }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProductCards = async () => {
    try {
      setLoading(true);
      const productIDs = [];
      while (productIDs.length < 20) {
        const randomProductID = Math.floor(Math.random() * 20) + 1;
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductCards();
  }, []);

  const handleAddToCart = (product) => {
    const quantityElement = document.getElementById(`quantity-${product.id}`);
    const quantity = parseInt(quantityElement.value) || 1;
    onAddToCart(product, quantity);
    //default is one
    quantityElement.value = "1";
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loading-spinner">...Loading</div>
  //     </div>
  //   );
  // }

  if (loading) {
    return <LoadingSpinner loading={loading} />;
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
            className="w-full h-48 object-contain p-4"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 truncate">
              {product.title}
            </h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <div className="flex items-center justify-between mt-2 mb-3">
              <label
                htmlFor={`quantity-${product.id}`}
                className="text-sm text-gray-500"
              >
                Qty:
              </label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                defaultValue={1}
                min="1"
                className="w-16 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-center transition-all duration-200 hover:bg-gray-100"
              />
            </div>
            <button
              onClick={() => handleAddToCart(product)}
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
