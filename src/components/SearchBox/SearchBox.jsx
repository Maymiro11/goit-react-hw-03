import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, setter }) => {
  const searchFieldId = useId();

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        id={searchFieldId}
        value={value}
        onChange={e => setter(e.target.value)}
      ></input>
    </div>
  );
};
export default SearchBox;