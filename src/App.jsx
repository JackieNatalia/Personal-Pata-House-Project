import React from 'react';
import { Card, cardData,} from './COMPONENTS/Card';
import Footer from './COMPONENTS/Footer';
import Signup from './PAGES/Signup';
import Header from './COMPONENTS/Header';
import Buttons from './COMPONENTS/Buttons';
import FilterComponent from './COMPONENTS/FilterComponent';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
        <Signup /> 
        <FilterComponent />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <Buttons />
      <Footer /> 
      
     
    </div> 
  
  );
}

export default App;
