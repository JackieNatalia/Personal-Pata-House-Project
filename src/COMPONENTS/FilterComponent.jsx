import React, { useState } from 'react';
import { Card, cardData } from './Card';
import Buttons from './Buttons';

const FilterComponent = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Extract unique locations
  const locations = [
    ...new Set(
      cardData.map((card) => {
        const lines = card.description.split('\n');
        return lines[1].split(',')[0].trim();
      })
    ),
  ];

  // Filter by price range
  const filterByPrice = (text, range) => {
    const match = text.match(/Kshs\s?([\d,]+)/i);
    if (!match) return false;
    const price = parseInt(match[1].replace(/,/g, ''));
    if (range === '<30000') return price < 30000;
    if (range === '30000-40000') return price >= 30000 && price <= 40000;
    if (range === '>40000') return price > 40000;
    return true;
  };

  // Apply filters
  const filteredCards = cardData.filter((card) => {
    const lines = card.description.split('\n');
    const cardLocation = lines[1].split(',')[0].trim();
    const matchesLocation = locationFilter ? cardLocation === locationFilter : true;
    const matchesPrice = priceFilter ? filterByPrice(lines[2], priceFilter) : true;
    return matchesLocation && matchesPrice;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, startIndex + cardsPerPage);

  // Handlers
  const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const resetFilters = () => {
    setLocationFilter('');
    setPriceFilter('');
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <select
          className="border rounded px-4 py-2 text-sm shadow-sm"
          value={locationFilter}
          onChange={(e) => {
            setLocationFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Locations</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          className="border rounded px-4 py-2 text-sm shadow-sm"
          value={priceFilter}
          onChange={(e) => {
            setPriceFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Prices</option>
          <option value="<30000">Below 30K</option>
          <option value="30000-40000">30K – 40K</option>
          <option value=">40000">Above 40K</option>
        </select>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded shadow"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      {/* Pagination Buttons */}
      {filteredCards.length > cardsPerPage && (
        <Buttons
          currentPage={currentPage}
          totalPages={totalPages}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
        />
      )}
    </div>
  );
};

export default FilterComponent;
