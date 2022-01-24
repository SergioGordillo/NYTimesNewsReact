import React from 'react';
import getNewsFilteredBySection from '../services/getNewsFilteredBySection';

export default function Section ({section}) {

    // console.log(`Hola ${section}`) Llega como undefined

    function showEvent (e) {
      const sectionSearched = e.target.innerText;
      getNewsFilteredBySection(sectionSearched);

    }

  return (
    <div className="animate__animated animate__fadeIn animate__slower"> 
        <h3 className="section-container mr-4 mb-4 pointer"
            onClick={showEvent}
            >{section}</h3>
    </div>
  )


};