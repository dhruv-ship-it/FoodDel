import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Routes>

        <Route path="/FoodDel" element={<Home/>}></Route>
      </Routes>
    
    </Router>
  );
}

export default App;
