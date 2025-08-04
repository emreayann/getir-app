import React from 'react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Taze Süt",
      price: "12.90",
      originalPrice: "15.90",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
      discount: "20%"
    },
    {
      id: 2,
      name: "Organik Ekmek",
      price: "8.50",
      originalPrice: "10.00",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      discount: "15%"
    },
    {
      id: 3,
      name: "Taze Meyve Sepeti",
      price: "45.00",
      originalPrice: "60.00",
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=300&fit=crop",
      discount: "25%"
    },
    {
      id: 4,
      name: "Su 5L",
      price: "18.90",
      originalPrice: "22.90",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
      discount: "17%"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En popüler ve en çok tercih edilen ürünlerimizi keşfedin
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100">
                {}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {}
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount} İNDİRİM
                  </div>
                </div>

                {}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-purple-600">
                      ₺{product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₺{product.originalPrice}
                    </span>
                  </div>
                  
                  {}
                  <button className="w-full mt-3 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium">
            Tüm Ürünleri Gör
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 