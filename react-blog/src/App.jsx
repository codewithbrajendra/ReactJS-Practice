import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Header"
import React from "react";
import './App.css'

export const App = () => {
//   return (
//    <div>
//      <NetflixSeries />
//      <NetflixSeries />
//      <NetflixSeries />
//      <NetflixSeries />
//      <NetflixSeries />
//    </div>
//   );

// return (
//     [
//       <NetflixSeries key="1"/>,
//       <NetflixSeries key="2"/>,
//       <NetflixSeries key="3"/>,
//       <NetflixSeries key="4"/>,
//       <NetflixSeries key="5"/>
//     ]
//   );

// return (
//     <React.Fragment>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//    </React.Fragment>
//   );

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

const NetflixSeries = () => {
return (
        <div>
        <img src="/images/qot.jpg" alt="qot" className='movie-img'></img>
        <h2>Name : Queen of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>
        Summary: Baek Hyun-woo and Hong Hae-in navigate a tense.......
        </p>
        </div>
  );
}

