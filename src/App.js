import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import PageWrapper from './components/pageWrapper';

function App() {
  return (
    <div className='App'>
      <Router>
        <PageWrapper>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;