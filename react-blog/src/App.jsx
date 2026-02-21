import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Header"
import React from "react";
import './App.css'

export const App = () => {

return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
   </>
  );

};

// 1. Variables
// You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

// 2. Expression
// JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

const NetflixSeries = () => {
  const name = "Queen of Tears";
  const summary = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  }
return (
        <div>
        <img src="/images/qot.jpg" alt="qot" className='movie-img'></img>
        <h2>Name : {name} </h2>
        <h3>Rating:{12/2+2.2}</h3>
        <p>{summary}</p>
        <p>Genre : {returnGenre()} </p>
        </div>
  );
}

