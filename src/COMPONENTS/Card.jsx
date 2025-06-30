import React from 'react';
import logo from '../assets/signup.png'; 


// 1. Define the data inside this file
const cardData = [
  { id: 1, title: 'Apartment', image: logo, description: '2-Bedroom\nLondon, Nakuru\nRent: Kshs 25,000'},
  { id: 2, title: 'House', image: logo, description: '3-Bedroom\nKiamunyi, Nakuru\nRent: Kshs 40,000' },
  { id: 3, title: 'House', image: logo, description: '3-Bedroom\nWhite-house, Nakuru\nRent: Kshs 30,000' },
  { id: 4, title: 'Apartment ', image: logo, description: '1-Bedroom\nNaivasha, Nakuru\nRent: Kshs 27,000' },
  { id: 5, title: 'House', image: logo, description: '3-Bedroom\nSection-58, Nakuru\nRent: Kshs 31,000' },
  { id:6, title: 'Apartment ', image: logo, description: '2-Bedroom\nMawanga, Nakuru\nRent: Kshs 32,000'},
  { id:7, title: 'House', image: logo, description: '3-Bedroom\nRongai, Nakuru\nRent: Kshs 20,000' },
  { id:8, title: 'Bungalow', image: logo, description: '3-Bedroom\nRace-Course, Nakuru\nRent: Kshs 50,000' },
  { id:9, title: 'Apartment ', image: logo, description: '1-Bedroom\nKiamaina, Nakuru\nRent: Kshs 24,000' },
  

];

// 2. Define the reusable card component
const Card = ({ title, image, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center">
      <img
        className="w-full h-88 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-5 flex flex-col items-center">
        <h5 className="text-xl font-semibold tracking-tight text-orange-500">
          {title}
        </h5>
        <p className="mt-2 text-gray-600 text-sm font-medium whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
    </div>
    
  );
};

//buttons at the bottom right of the card

export  { Card, cardData, };
