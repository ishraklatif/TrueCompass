import React from 'react';
import Banner from '../components/Banner';
import About from './About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';

function Home() {
  const rotateTextArray = [
    "IT Enabled Services (ITES)",
    "Outsourcing Services",
    "BPO Services",
    "Tech Services",
    "PR Management",
  ];

  return (
    <div>
      <Banner rotateTextArray={rotateTextArray} showSubtext={true} />
      <About />
      <Certificate />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
