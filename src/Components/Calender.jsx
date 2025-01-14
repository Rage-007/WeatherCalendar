
/*import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//import "./App.css";
  
const Calender = () => {
    
};
  
export default Calender;*/
import { useState } from 'react';
//import ToDos from './ToDos';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import { Link } from 'react-router-dom';
//import './App.css';

const Calender = () => {
  const [date, setDate]=useState(new Date());
  let url ='https://weather-app-sage-phi.vercel.app/'
  return (
    <div className='app'>
      
      <h1 className='text-left'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
        
      </div>
      <p className='text-left'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      
      <div>
          
          <button onClick={()=> { window.location.href = url; }  }> Weather</button>
        </div>
    </div>
  );
}

export default Calender;