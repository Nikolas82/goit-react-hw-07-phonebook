import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = e => {
    dispatch(filteredContacts(e.target.value));
  };

  return (
    <>
      <label>
        <p className={css.text}>Find contacts by name</p>
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </>
  );
};
