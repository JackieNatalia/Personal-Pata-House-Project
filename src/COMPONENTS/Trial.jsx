import React, { useState } from 'react';
import logo from '../assets/signup.png'; 
import image from '../assets/logo.png';

// 1. Card data
const cardData = [
  { id: 1, title: 'Apartment', image: logo, description: '2-Bedroom\nLondon, Nakuru\nRent: Kshs 25,000' },
  { id: 2, title: 'House', image: logo, description: '3-Bedroom\nKiamunyi, Nakuru\nRent: Kshs 40,000' },
  { id: 3, title: 'House', image: image, description: '3-Bedroom\nWhite-house, Nakuru\nRent: Kshs 30,000' },
  { id: 4, title: 'Apartment', image: logo, description: '1-Bedroom\nNaivasha, Nakuru\nRent: Kshs 27,000' },
  { id: 5, title: 'House', image: logo, description: '3-Bedroom\nSection-58, Nakuru\nRent: Kshs 31,000' },
  { id: 6, title: 'Apartment', image: image, description: '2-Bedroom\nMawanga, Nakuru\nRent: Kshs 32,000' },
  { id: 7, title: 'House', image: logo, description: '3-Bedroom\nRongai, Nakuru\nRent: Kshs 20,000' },
  { id: 8, title: 'Bungalow', image: logo, description: '3-Bedroom\nRace-Course, Nakuru\nRent: Kshs 50,000' },
  { id: 9, title: 'Apartment', image: logo, description: '1-Bedroom\nKiamaina, Nakuru\nRent: Kshs 24,000' },
];

// 2. Reusable Card component
const Card = ({ title, image, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5 flex flex-col items-center">
        <h5 className="text-xl font-semibold tracking-tight text-orange-500">{title}</h5>
        <p className="mt-2 text-gray-600 text-sm font-medium whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// 3. Main component with pagination
const CardsWithPagination = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

      {/* Buttons at bottom right */}
      <div className="flex justify-end space-x-4">
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
      </div>
    </div>
  );
};


export default CardsWithPagination;
