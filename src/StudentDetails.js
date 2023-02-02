// StudentDetails.js
import React from 'react';

const StudentDetails = (props) => {
  
  return (
    <div>
      <h1>Student Details</h1>
      <p>Username: {props.username}</p>
      <p>Telephone: {props.telephone}</p>
    </div>
  );
};

export default StudentDetails;
