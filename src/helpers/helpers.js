// Function that avoid repeated values in an array
export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}  

export function getNewsAttributes (filteredResultsJSON=[]) {
        const newsAttributes = JSON.parse(filteredResultsJSON).map(filteredResultJSON=>{
            const { title, abstract, url } = filteredResultJSON;
            console.log(title, abstract, url);
            return {title, abstract, url}; 
          });
        return newsAttributes;
};