import { ShoppingBag, Truck, Users, Store } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=500",
    },
    {
      name: "Apparel",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500",
    },
    {
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=500",
    },
    {
      name: "Industrial",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="bg-violet-600 text-white py-12 px-4 my-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sellify</h1>
          <p className="text-xl mb-6">Your One-Stop Global B2C Marketplace</p>
          <Link to="/shop">
            <button className="bg-orange-500 px-6 py-2 rounded-lg flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-white" />
              Start Shopping
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <p className="font-medium text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <ShoppingBag className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="font-bold">Verified Suppliers</h3>
                <p className="text-gray-600">Quality assured products</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Truck className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="font-bold">Global Shipping</h3>
                <p className="text-gray-600">Worldwide delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="font-bold">24/7 Support</h3>
                <p className="text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
