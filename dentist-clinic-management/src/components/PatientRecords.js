// PatientRecords.js

import React, { useState, useEffect } from 'react';

const PatientRecords = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Current page number

  useEffect(() => {
    fetch(`http://localhost:3001/api/patients?page=${page}&perPage=50`)
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching patients.');
        setLoading(false);
        console.error('Error fetching patients:', error);
      });
  }, [page]); // Fetch data whenever the page changes

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="patient-records">
      <h2>Patient Records</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="patient-list">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="patient-list-item"
              onClick={() => handlePatientClick(patient)}
            >
              <h3>{patient.full_name}</h3>
              <p>Age: {patient.age}</p>
              <p>Gender: {patient.gender}</p>
            </div>
          ))}
        </div>
      )}
      {selectedPatient && (
        <div className="patient-details">
          <h3>{selectedPatient.full_name}</h3>
          <p>Age: {selectedPatient.age}</p>
          <p>Gender: {selectedPatient.gender}</p>
          {/* Add more patient details here */}
        </div>
      )}
    </div>
  );
};

export default PatientRecords;
