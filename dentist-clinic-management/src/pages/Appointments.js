import React, { useState } from 'react';

import '../styles/Header.css';

const Appointments = () => {
  // State to store the list of appointments
  const [appointments, setAppointments] = useState([]);

  // Function to add a new appointment
  const handleAddAppointment = () => {
    // Generate a unique ID for the appointment (you can use a library like 'uuid' for more reliable IDs)
    const id = new Date().getTime();
    
    // Create a new appointment object with default values
    const newAppointment = {
      id,
      patientName: '',
      date: '',
      time: '',
      treatment: '',
    };

    // Add the new appointment to the list of appointments
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  // Function to update an appointment field
  const handleUpdateAppointment = (id, field, value) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, [field]: value } : appointment
      )
    );
  };

  // Function to delete an appointment
  const handleDeleteAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div>
      <h2>Appointments</h2>
      <button onClick={handleAddAppointment}>Add New Appointment</button>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>
                <input
                  type="text"
                  value={appointment.patientName}
                  onChange={(e) => handleUpdateAppointment(appointment.id, 'patientName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={appointment.date}
                  onChange={(e) => handleUpdateAppointment(appointment.id, 'date', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="time"
                  value={appointment.time}
                  onChange={(e) => handleUpdateAppointment(appointment.id, 'time', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={appointment.treatment}
                  onChange={(e) => handleUpdateAppointment(appointment.id, 'treatment', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
