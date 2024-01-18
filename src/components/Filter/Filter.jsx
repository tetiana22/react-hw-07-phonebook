import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, FilterWrap } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { setFilter } from 'components/redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterWrap>
      <Label>Find contacts by name </Label>
      <Input
        type="text"
        value={filter}
        id={nanoid()}
        onChange={onChange}
        placeholder="Please enter a name "
      />
    </FilterWrap>
  );
};

export default Filter;
