import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "redux/filtersSlices";
// import { getFilter } from "redux/selectors";

export default function Filter({ onChange }) {
  
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  const handleSearch = ({target}) => {
    onChange(target.value)
  }

    return (
      <label>
        Find contact by name
      <input name='search' placeholder='Search...' onChange={handleSearch}></input>
    </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}