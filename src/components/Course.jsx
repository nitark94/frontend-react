// src/components/Course.jsx

import React from 'react';

const Course = ({ course }) => {
  console.log('Course object:', course); // Debugging

  return (
    <div>
      <Header course={course} />
      <ul>
        {course.parts.map(part => (
          <li key={part.id}>{part.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
