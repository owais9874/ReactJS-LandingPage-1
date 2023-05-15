import React from 'react';
import './App.css';

import {  Main } from './Pages'

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BackToTop } from './MyComponents/BackToTop/BackToTop';
import Floating from './MyComponents/FloatButton/Floating';


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes> 
          <Route path="/" element={ <Main/> } />
        </Routes>
      </BrowserRouter> */}

      <Main/>
      <Floating/>
      <BackToTop /> 
    </>
  );
}

export default App;