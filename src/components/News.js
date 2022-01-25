import React from 'react';

export default function News({ newsAttributes }) {
  //I receive here [Object Object Object Object Object Object] Object type

  console.log(typeof (newsAttributes));



  const { title, abstract, url } = newsAttributes;

  console.log(`title: ${title}`);
  console.log(`abstract: ${abstract}`);
  console.log(`url: ${url}`);

  return (
    <div>
      <h3 className="section-container mr-4 mb-4 pointer">{title}</h3>
    </div>
  )


};