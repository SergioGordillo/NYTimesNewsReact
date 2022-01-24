import React from 'react';
import getNewsFilteredBySection from '../services/getNewsFilteredBySection';

export default function Section ({section}) {

    // console.log(`Hola ${section}`) Llega como undefined

    function showEvent (e) {
      const sectionSearched = e.target.innerText;
      getNewsFilteredBySection(sectionSearched);

    }

  return (
    <div>
        <h3 className="section-container mr-4 mb-4 pointer"
            onClick={showEvent}
            >{section}</h3>
    </div>
  )


};