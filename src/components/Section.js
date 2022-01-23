import React from 'react';

export default function Section ({section}) {

    // console.log(`Hola ${section}`) Llega como undefined

  return (
    <div>
        <h1 className="section-container mr-4">{section}</h1>
    </div>
  )


};