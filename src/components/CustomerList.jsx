import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomerRewards from './CustomerRewards';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: 500;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  font-size: 1rem;
`;

function CustomerList({ transactions }) {
    const customers = [...new Set(transactions.map((t) => t.customerId))];
    const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

    return (
        <div>
            <SelectContainer>
                <Label>Select Customer:</Label>
                <Select
                    value={selectedCustomer}
                    onChange={(e) => setSelectedCustomer(e.target.value)}
                >
                    {customers.map((customerId) => (
                        <option key={customerId} value={customerId}>
                            {customerId}
                        </option>
                    ))}
                </Select>
            </SelectContainer>
            <CustomerRewards
                transactions={transactions}
                customerId={selectedCustomer}
            />
        </div>
    );
}

CustomerList.propTypes = {
    transactions: PropTypes.array.isRequired,
};

export default CustomerList;
