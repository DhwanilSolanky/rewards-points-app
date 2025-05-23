import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterWrapper = styled.div`
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

function Filters({ months, selectedMonth, setSelectedMonth }) {
  return (
    <FilterWrapper>
      <Label>Select Month:</Label>
      <Select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
    </FilterWrapper>
  );
}

Filters.propTypes = {
  months: PropTypes.array.isRequired,
  selectedMonth: PropTypes.string.isRequired,
  setSelectedMonth: PropTypes.func.isRequired,
};

export default Filters;
