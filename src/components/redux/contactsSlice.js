import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './thunk';
import {
  handleFulfilled,
  handleFulfilledFetch,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
  handleRejected,
  fn,
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
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
