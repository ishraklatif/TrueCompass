// Home.js
import React from 'react';
import Banner from '../components/Banner';
import About from './About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';
function Home() {
 

  return (
    <div>
      {/* Pass the toRotate array as a prop */}
      <Banner />
      <About />
      <Certificate />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;