import React from 'react';

const App = () => {
  console.log('Test log: App is rendering');
  const course = {
    name: 'React Basics',
    parts: [
      { id: 1, name: 'Fundamentals of React' },
      { id: 2, name: 'Using Props and State' },
    ]
  };

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

export default App;
