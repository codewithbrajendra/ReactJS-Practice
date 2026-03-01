import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "../Header"
import React from "react";
import "./css/Practices.css"

export const Practices = () => {
  const students = [5];
  console.log(Boolean(students.length));
  console.log(students.length);
  return (
    <div id="outer-practice">
      {/* <p>{students.length && "No students found"}</p> */}
      {/* 1st  */}
      {/* <p>{students.length === 0 && "No students found"}</p> */}
      {/* 2nd */}
      {/* <p>{!students.length && "No students found"}</p> */}
      {/* 3rd  */}
      <p>{!Boolean(students.length) && "No students found"}</p>
      <p>Number of students: {students.length}</p>
    </div>
  );
};
