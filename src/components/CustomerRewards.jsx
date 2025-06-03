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

const NoData = styled.div`
  font-size: 1rem;
  color: #718096;
  margin-top: 20px;
`;

function CustomerRewards({ transactions, customerId }) {
  const customerTransactions = transactions.filter(
    (t) => t.customerId === customerId
  );

  const uniqueMonths = [
    ...new Set(
      customerTransactions.map((t) => new Date(t.date).getMonth() + 1)
    ),
  ];
  // const uniqueYears = [
  //   ...new Set(
  //     customerTransactions.map((t) => new Date(t.date).getFullYear())
  //   ),
  // ];

  const staticYears = [2022, 2023, 2024, 2025];

  const [selectedMonth, setSelectedMonth] = useState(uniqueMonths[0] || '');
  const [selectedYear, setSelectedYear] = useState(2025);

  const filteredTransactions = customerTransactions.filter((t) => {
    const date = new Date(t.date);
    return (
      date.getFullYear() === parseInt(selectedYear) &&
      date.getMonth() + 1 === parseInt(selectedMonth)
    );
  });

  const monthlyPoints = filteredTransactions.reduce(
    (acc, curr) => acc + calculateRewardPoints(curr.amount),
    0
  );

  return (
    <div>
      <Filters
        months={uniqueMonths}
        years={staticYears}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <PointsTitle>Monthly Rewards: {monthlyPoints} points</PointsTitle>
      {filteredTransactions.length === 0 ? (
        <NoData>No transactions available for this period.</NoData>
      ) : (
        <TransactionTable transactions={filteredTransactions} />
      )}
    </div>
  );
}

CustomerRewards.propTypes = {
  transactions: PropTypes.array.isRequired,
  customerId: PropTypes.string.isRequired,
};

export default CustomerRewards;
