import me from './me.jpg';
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Card from '@mui/material/Card';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='logo-container'>
        <img className='Website-logo'  src={me}/>
        <h1 className='Name'>BHAVIKA BHARTI</h1>
        <h5 style={{'color':'white'}}>Software Engineer | Musician | Lifelong Learner</h5>
        
        <div className='card'>
         <h5 style={{'marginTop':'0%'}}>MY FAVOURITE QUOTE:</h5>
         <p>“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison</p>
        </div>
        <About/>

        </div>
    </div>
  );
}

export default App;
