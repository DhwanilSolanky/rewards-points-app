import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculateRewardPoints } from '../utils/calculateRewards';
import Filters from './Filters';
import TransactionTable from './TransactionTable';
import styled from 'styled-components';

const PointsTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 15px;
`;

function CustomerRewards({ transactions, customerId }) {
  const customerTransactions = transactions.filter(
    (t) => t.customerId === customerId
  );

  const months = [...new Set(customerTransactions.map((t) => {
    const date = new Date(t.date);
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
  }))];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  const filteredTransactions = customerTransactions.filter((t) => {
    const date = new Date(t.date);
    const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
    return monthYear === selectedMonth;
  });

  const monthlyPoints = filteredTransactions.reduce(
    (acc, curr) => acc + calculateRewardPoints(curr.amount),
    0
  );

  return (
    <div>
      <Filters
        months={months}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <PointsTitle>Monthly Rewards: {monthlyPoints} points</PointsTitle>
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

CustomerRewards.propTypes = {
  transactions: PropTypes.array.isRequired,
  customerId: PropTypes.string.isRequired,
};

export default CustomerRewards;
