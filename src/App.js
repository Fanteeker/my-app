import './App.css';
import React from 'react';
import Employee from './components/Employee';
import Header from './components/layout/Header';
import Card from './components/Card';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='min-vh-100 d-flex flex-column justify-content-between'>
          <Header />
          <Employee />
          <div className='row'>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>  
            <div className="col">
              <Card />
            </div>              
          </div> 
          <Footer />  
        </div>               
      </div>
    </div>
  );
}

export default App;
