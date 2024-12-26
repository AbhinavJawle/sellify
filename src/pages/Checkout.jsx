import { useOutletContext } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity } = useOutletContext();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 rounded border border-gray-300 p-1 text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="text-right min-w-[100px]">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Total</h2>
              <p className="text-xl font-bold">${getTotalPrice().toFixed(2)}</p>
            </div>
            <button
              className="mt-4 w-full bg-gradient-to-r from-blue-50 to-purple-50
                border-2 border-gray-300 shadow-lg text-black font-bold py-2 px-4 rounded
                transition-colors duration-200
                hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200
                hover:shadow-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
