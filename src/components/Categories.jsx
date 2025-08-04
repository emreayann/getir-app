import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';

const Categories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kategoriler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İhtiyacın olan her şey burada. Binlerce ürün, yüzlerce kategori ile alışverişin keyfini çıkar.
          </p>
        </div>

        {}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200 font-medium">
            Tüm Kategorileri Gör
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories; 