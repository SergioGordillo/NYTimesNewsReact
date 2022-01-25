import React from 'react';
import { getNewsAttributes } from '../helpers/helpers';
import getNewsFilteredBySection from '../services/getNewsFilteredBySection';
import News from './News';

export default function Section({ section }) {

  function showEvent(e) {
    console.log("pasa por aquí");
    const sectionSearched = e.target.innerText;
    getNewsFilteredBySection(sectionSearched)
      .then((response) => {
        const filteredResults = response;
        const newsAttributes = getNewsAttributes(filteredResults);
        return (
          <News newsAttributes={newsAttributes} />
        )
      })
  }

  return (
    <div className="animate__animated animate__fadeIn animate__slower">
      <h3 className="section-container mr-4 mb-4 pointer"
        onClick={showEvent}
      >{section}</h3>
    </div>
  )


};