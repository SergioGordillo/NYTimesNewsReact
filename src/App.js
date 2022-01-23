import React, {useEffect, useState} from "react";
import ListOfSections from "./components/ListOfSections";
import getSections from "./services/getSections";

import  Navbar  from "./shared/Navbar/Navbar";

function App() {

  const [section, setSection] = useState([]);

  useEffect(() => {
    getSections().then(sections=>setSection(sections));  
  }, [])

  return (
    <div>
      <Navbar/>
      <ListOfSections section={section}></ListOfSections>
    </div>
  );
}

export default App;
