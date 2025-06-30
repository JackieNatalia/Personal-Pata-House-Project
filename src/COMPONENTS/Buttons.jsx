import React, { useState } from 'react';
import {Card, cardData} from '../COMPONENTS/Card.jsx'; 

const Buttons = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 6;
  
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardData.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
  
    const goToNextPage = () => {
      if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };
  
    const goToPrevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 1);
    };
  
    return (
      <div className="max-w-6xl mx-auto p-6">
        {/* Cards Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {currentCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </div> */}
  
        {/* Buttons at bottom right */}
        {/* <div className="flex justify-end space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded ${
              currentPage === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            Prev
          </button>
  
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            Next
          </button>
        </div> */}
        <div className='flex justify-end space-x-4'>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-6  bottom-4 right-4 shadow-lg hover:bg-orange-600 transition-colors duration-300 ">
          Prev
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-6  bottom-4 right-4 shadow-lg hover:bg-orange-600 transition-colors duration-300 ">
            Next
          </button>
        </div>
      </div>
    );
  };
export default Buttons;