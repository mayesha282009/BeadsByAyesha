import React from 'react';
import { Link } from 'react-router-dom'; // or your router

const ProductsPage = () => {
  // Sample product data
  const products = [
  {
    id: 1,
    name: '',
    price: '',
    category: '',
    image: '/images/1.jpeg',
    description: ''
  },
  {
    id: 2,
    name: '',
    price: '',
    category: '',
    image: '/images/2.jpeg',
    description: ''
  },
  {
    id: 3,
    name: '',
    price: '',
    category: '',
    image: '/images/3.jpeg',
    description: ''
  },
  {
    id: 4,
    name: '',
    price: '',
    category: '',
    image: '/images/4.jpeg',
    description: ''
  },
  {
    id: 5,
    name: '',
    price: '',
    category: '',
    image: '/images/5.jpeg',
    description: ''
  },
  {
    id: 6,
    name: '',
    price: '',
    category: '',
    image: '/images/6.jpeg',
    description: ''
  },
    {
    id: 7,
    name: '',
    price: '',
    category: '',
    image: '/images/7.jpeg',
    description: ''
  },
    {
    id: 8,
    name: '',
    price: '',
    category: '',
    image: '/images/8.jpeg',
    description: ''
  },
    {
    id: 9,
    name: '',
    price: '',
    category: '',
    image: '/images/9.jpeg',
    description: ''
  },
    {
    id: 10,
    name: '',
    price: '',
    category: '',
    image: '/images/10.jpeg',
    description: ''
  },
      {
    id: 11,
    name: '',
    price: '',
    category: '',
    image: '/images/11.jpeg',
    description: ''
  },
      {
    id: 12,
    name: '',
    price: '',
    category: '',
    image: '/images/12.jpeg',
    description: ''
  },    {
    id: 13,
    name: '',
    price: '',
    category: '',
    image: '/images/13.jpeg',
    description: ''
  },    {
    id: 14,
    name: '',
    price: '',
    category: '',
    image: '/images/14.jpeg',
    description: ''
  },    {
    id: 15,
    name: '',
    price: '',
    category: '',
    image: '/images/15.jpeg',
    description: ''
  },    {
    id: 16,
    name: '',
    price: '',
    category: '',
    image: '/images/16.jpeg',
    description: ''
  },    {
    id: 17,
    name: '',
    price: '',
    category: '',
    image: '/images/17.jpeg',
    description: ''
  },  
];

  // Categories for filtering
  const categories = ['All','Bracelets','Necklaces', 'Earrings','Rings', 'Sets'];

  return (
    <div className="min-h-screen bg-[#fdf8ef]">
      {/* Header */}
      <header className="bg-[#ae7d5b] text-[#fdf8ef] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">All Products</h1>
            <Link to="/" className="text-lg hover:text-[#000000] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-[#ae7d5b] border border-[#ae7d5b] hover:bg-[#ae7d5b] hover:text-[#fdf8ef] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-[#000000]">Showing {products.length} products</p>
            <select className="px-4 py-2 rounded border border-[#ae7d5b] bg-white text-[#000000]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-[#000000]">{product.name}</h3>
                  <span className="text-[#ae7d5b] font-bold">{product.price}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 text-xs rounded-full bg-[#fdf8ef] text-[#ae7d5b]">
                    {product.category}
                  </span>
                  
                  <button className="px-4 py-2 bg-[#ae7d5b] text-[#fdf8ef] rounded hover:bg-[#000000] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#ae7d5b] text-[#fdf8ef] rounded">1</button>
            <button className="px-4 py-2 bg-white text-[#ae7d5b] border border-[#ae7d5b] rounded hover:bg-[#fdf8ef]">2</button>
            <button className="px-4 py-2 bg-white text-[#ae7d5b] border border-[#ae7d5b] rounded hover:bg-[#fdf8ef]">3</button>
            <button className="px-4 py-2 bg-white text-[#ae7d5b] border border-[#ae7d5b] rounded hover:bg-[#fdf8ef]">Next →</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#fdf8ef] py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Our Store</h3>
              <p className="text-gray-300">
                Premium quality clothing and accessories for every occasion.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="hover:text-[#ae7d5b] transition-colors">All Products</Link></li>
                <li><Link to="/new-arrivals" className="hover:text-[#ae7d5b] transition-colors">New Arrivals</Link></li>
                <li><Link to="/sale" className="hover:text-[#ae7d5b] transition-colors">Sale Items</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: shop@example.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Fashion Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;