import React from "react";
import index from "./index.css"
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";

import { BrowserRouter, Route, Routes} from  "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Project" element={<Project/>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
