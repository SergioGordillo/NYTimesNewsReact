import React from 'react';
import { getNewsAttributes } from '../helpers/helpers';
import getNewsFilteredBySection from '../services/getNewsFilteredBySection';

export default function Section ({section}) {

    function showEvent (e) {
      console.log("pasa por aquí");
      const sectionSearched = e.target.innerText;
      const filteredResults = getNewsFilteredBySection(sectionSearched);
      console.log(`filteredResults:" ${filteredResults}`);
      const newsAttributes = getNewsAttributes(filteredResults);
      console.log(`newsAttributes ${newsAttributes}`)
      const {title, abstract, url} = newsAttributes;
      console.log (title, abstract, url);

    }

  return (
    <div className="animate__animated animate__fadeIn animate__slower"> 
        <h3 className="section-container mr-4 mb-4 pointer"
            onClick={showEvent}
            >{section}</h3>
    </div>
  )


};