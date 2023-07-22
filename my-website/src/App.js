import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Read from "./components/pages/Read";
import ReadMore from "./components/pages/ReadMore";
import SignUp from "./components/pages/SignUp";
import Text1 from "./components/pages/Text1";

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/read" exact element={<Read/>}/>
        <Route path="/read-more" exact element={<ReadMore/>}/>
        <Route path="/sign-up" exact element={<SignUp/>}/>
        <Route path="/text1" exact element={<Text1/>}/>
       </Routes>
       </Router>
    </>  
  );
}

export default App;
