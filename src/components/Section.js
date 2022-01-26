import React, { useState } from 'react';
import { getNewsAttributes } from '../helpers/helpers';
import getNewsFilteredBySection from '../services/getNewsFilteredBySection';
import ListOfNews from './ListOfNews';

export default function Section({ section }) {

  const [news, setNews] = useState(null);

  function showNews(e) {
    const sectionSearched = e.target.innerText;
    getNewsFilteredBySection(sectionSearched)
      .then((response) => {
        const filteredResults = response;
        const newsAttributes = getNewsAttributes(filteredResults);
        setNews(newsAttributes);
      })
  }



  return (
    <>
      <div className="animate__animated animate__fadeIn animate__slower">
        <h3 className="section-container mr-4 mb-4 pointer"
          onClick={showNews}
        >{section}</h3>
      </div>
      {news !== null ? <ListOfNews newsAttributes={news} /> : null}
    </>
  )


};