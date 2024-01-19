import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './thunk';
import {
  handleFulfilled,
  handleFulfilledFetch,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
  handleRejected,
  thunksByType,
} from 'components/services/functionsTunks';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: bilder => {
    bilder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunksByType('pending')), handlePending)
      .addMatcher(isAnyOf(...thunksByType('rejected')), handleRejected)
      .addMatcher(isAnyOf(...thunksByType('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
