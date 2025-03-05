// src/App.jsx
import React from 'react';
import Header from './components/Header';  // Header-komponentti
import Course from './components/Course';  // Course-komponentti

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Course course={course} />  {/* Välitetään course-prop Course-komponentille */}
    </div>
  );
}

export default App;

