import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomerList from './components/CustomerList';
import transactionsData from './data/transactions';

const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 30px;
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTransactions(transactionsData);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  

  if (loading) return <AppContainer>Loading...</AppContainer>;
  if (error) return <AppContainer>Error loading data.</AppContainer>;

  return (
    <AppContainer>
      <Title>Customer Rewards Program</Title>
      <CustomerList transactions={transactions} />
    </AppContainer>
  );
}

export default App;
