import { Link } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex  bg-transparent justify-center items-center w-full p-2">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border-2 border-gray-300 shadow-lg">
        <ul className="flex justify-center items-center space-x-3 md:space-x-8 py-3 px-4 font-sans">
          <li>
            <Link
              to="/"
              className="text-sm md:text-base text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-sm md:text-base text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/checkout"
              className="flex items-center gap-1 md:gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              <span className="text-sm md:text-base">Checkout</span>
              <ShoppingBasket
                color="black"
                size={20}
                className="md:w-5 md:h-5"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
