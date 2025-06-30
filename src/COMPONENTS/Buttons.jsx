import React from 'react';
import { Card, cardData } from '../COMPONENTS/Card.jsx';

const Buttons = ({ currentPage, totalPages, goToPrevious, goToNext }) => {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <button
        className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded disabled:opacity-50 text-white"
        onClick={goToPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button className='bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded text-white'
         onClick={goToNext}
        disabled={currentPage === totalPages}
      >
        Next</button>
    </div>
  );
};

export default Buttons;
