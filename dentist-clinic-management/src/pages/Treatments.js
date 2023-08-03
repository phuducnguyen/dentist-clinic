import React, { useState } from 'react';

const Treatments = () => {
  // Dummy treatment data (you can replace this with API data)
  const [treatments, setTreatments] = useState([
    { id: 1, name: 'Cleaning', cost: 100 },
    { id: 2, name: 'Filling', cost: 200 },
    // Add more treatment data here
  ]);

  return (
    <div>
      <h2>Treatments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment) => (
            <tr key={treatment.id}>
              <td>{treatment.id}</td>
              <td>{treatment.name}</td>
              <td>${treatment.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Treatments;
