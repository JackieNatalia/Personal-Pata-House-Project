import React from 'react';
import Header from './COMPONENTS/Header.jsx';
import Footer from './COMPONENTS/Footer.jsx';
import FilterComponent from './COMPONENTS/FilterComponent.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <FilterComponent />
     <Footer />
    </div>
  );
}

export default App;
