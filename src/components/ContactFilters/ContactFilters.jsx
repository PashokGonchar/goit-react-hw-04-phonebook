import PropTypes from 'prop-types';
import { FilterDiv, FilterLabel, FilterInput } from './ContactFilters.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterDiv>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={value}
        onChange={onChange}
        placeholder="Enter name to search please..."
      />
    </FilterDiv>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
