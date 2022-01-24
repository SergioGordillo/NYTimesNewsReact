import React from 'react';

export default function getNewsFilteredBySection (sectionSearched="arts") {

    const API_KEY= "1n8q3iLICZuLSKVhbsbdW9vK3n2joJ9A";
    const URL= `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`;
   
    
  return fetch(URL)
        .then(res=>res.json())
        .then(response=> {
            const { data = [] } = response;
            if(Array.isArray(data)){
                const {results} = response; 
                console.log(results);
                const filteredResults = results.filter(obj => {
                    return obj.section === sectionSearched;
                  });
                console.log(`This is my filtered Section: ${filteredResults}`);
                const sections = results.map(result=>{
                    const { section } = result;
                    return section; 
                  });
                return sections;
            }
        })


};