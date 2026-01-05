import React from 'react';
import { Link } from 'react-router-dom'; // or your router

const ProductsPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Classic Wool Sweater',
      price: '$89.99',
      category: 'Sweaters',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      description: 'Premium wool sweater for all seasons'
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: '$129.99',
      category: 'Jackets',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w-400',
      description: 'Vintage style denim jacket'
    },
    {
      id: 3,
      name: 'Linen Shirt',
      price: '$59.99',
      category: 'Shirts',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
      description: 'Breathable linen shirt'
    },
    {
      id: 4,
      name: 'Cotton Trousers',
      price: '$79.99',
      category: 'Pants',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400',
      description: 'Comfortable cotton trousers'
    },
    {
      id: 5,
      name: 'Leather Boots',
      price: '$199.99',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
      description: 'Premium leather boots'
    },
    {
      id: 6,
      name: 'Cashmere Scarf',
      price: '$69.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
      description: 'Luxury cashmere scarf'
    },
    {
      id: 7,
      name: 'Silk Dress',
      price: '$159.99',
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400',
      description: 'Elegant silk evening dress'
    },
    {
      id: 8,
      name: 'Winter Coat',
      price: '$249.99',
      category: 'Outerwear',
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400',
      description: 'Warm winter coat with insulation'
    },
  ];

  // Categories for filtering
  const categories = ['All', 'Sweaters', 'Jackets', 'Shirts', 'Pants', 'Footwear', 'Accessories', 'Dresses', 'Outerwear'];

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