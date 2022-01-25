// Function that avoid repeated values in an array
export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function getNewsAttributes(filteredResults) {
  const newsAttributes = filteredResults.map(filteredResults => {
    const { title, abstract, url } = filteredResults;
    console.log(title, abstract, url);
    return { title, abstract, url };
  });
  return newsAttributes;
};