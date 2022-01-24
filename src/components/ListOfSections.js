import React from 'react';
import { onlyUnique } from '../helpers/helpers';
import Section from './Section';

export default function ListOfSections ({section}) {

   const sectionFiltered = section.filter(onlyUnique);


  return (
    <div className="container_list_sections mt-4 ml-4">
        {     
            sectionFiltered.map((section)=> 
                <Section 
                    section={section}
                    // TODO: Create a generator of unique id and send it to section component
                />
            )
        }
    </div>
  )


};