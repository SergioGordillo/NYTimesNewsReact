import React from 'react';
import Section from './Section';

export default function ListOfSections ({section}) {

  return (
    <div className="container_list_sections mt-4 ml-4">
        {/* <Section section={section}/> */}
        {     
            section.map(({section})=> 
            
                <Section 
                    section={section}
                />
            )
        }
    </div>
  )


};