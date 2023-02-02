// App.js
import React from 'react';
import Home from './Home.js';
import StudentDetails from './StudentDetails.js';


function App() {
  return (
    
    <>
    <div>
     <h1> Hello world</h1>
    </div>
    <div>
      
      <Home />
      <StudentDetails
      username = {Home().username}
      telephone ={Home().telephone}
      />
    </div>
    </>
  );
}

export default App;
