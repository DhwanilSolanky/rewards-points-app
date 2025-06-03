import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculateRewardPoints } from '../utils/calculateRewards';
import styled from 'styled-components';
import { Pagination, Stack } from '@mui/material';

const TableWrapper = styled.div`
  margin-top: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  background-color: #f1f5f9;
  padding: 12px;
  text-align: left;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 15px;
// `;

// const PageButton = styled.button`
//   background: #3182ce;
//   color: white;
//   padding: 8px 12px;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   font-weight: 500;
//   &:disabled {
//     background: #cbd5e0;
//     cursor: not-allowed;
//   }
// `;

function TransactionTable({ transactions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <Th>Transaction ID</Th>
            <Th>Customer Name</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Reward Points</Th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((t) => (
            <tr key={t.transactionId}>
              <Td>{t.transactionId}</Td>
              <Td>{t.customerName}</Td>
              <Td>{t.amount}</Td>
              <Td>{t.date}</Td>
              <Td>{calculateRewardPoints(t.amount)}</Td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {/* <Pagination>
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        <span>Page {currentPage} of {totalPages}</span>
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </Pagination> */}
      <Stack spacing={2} mt={2} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          color="primary"
        />
      </Stack>
    </TableWrapper>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionTable;
