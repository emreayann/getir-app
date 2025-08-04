import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        {}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDMwIDEwMEMxMzAgMTE2LjU2OSAxMTYuNTY5IDEzMCAxMDAgMTMwQzgzLjQzMSAxMzAgNzAgMTE2LjU2OSA3MCAxMEM3MCA4My40MzEgODMuNDMxIDcwIDEwMCA3MFoiIGZpbGw9IiNEMzQ3RjAiLz4KPC9zdmc+';
            }}
          />
          {}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
        </div>
        
        {}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-purple-600 transition-colors duration-200">
            {category.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard; 