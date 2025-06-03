import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  font-size: 1rem;
`;

function Filters({
  months,
  years,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) {
  return (
    <FilterWrapper>
      <div>
        <Label>Month:&nbsp;</Label>
        <Select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label>Year:&nbsp;</Label>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </Select>
      </div>
    </FilterWrapper>
  );
}

Filters.propTypes = {
  months: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  selectedMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setSelectedMonth: PropTypes.func.isRequired,
  selectedYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setSelectedYear: PropTypes.func.isRequired,
};

export default Filters;
