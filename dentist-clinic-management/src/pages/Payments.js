import React, { useState } from 'react';

const Payments = () => {
  // Dummy payment data (you can replace this with API data)
  const [payments, setPayments] = useState([
    { id: 1, patient: 'John Doe', amount: 50, method: 'Cash' },
    { id: 2, patient: 'Jane Smith', amount: 100, method: 'Credit Card' },
    // Add more payment data here
  ]);

  return (
    <div>
      <h2>Payments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Amount</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.patient}</td>
              <td>${payment.amount}</td>
              <td>{payment.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
