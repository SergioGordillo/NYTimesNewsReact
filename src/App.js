import React, {useEffect} from "react";
import getSections from "./services/getSections";

import  Navbar  from "./shared/Navbar/Navbar";

function App() {

  useEffect(() => {
    getSections(); 
  }, [])

  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
