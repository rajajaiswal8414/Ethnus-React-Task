import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;
