import React from 'react';
import styling from './transactionHistory.module.css';

export default function TransactionHistory(props) {
  const tableRow = props.items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={styling.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {tableRow}
      </tbody>
    </table>
  );
}
