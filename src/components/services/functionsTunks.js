import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'components/redux/thunk';

export const arrThunks = [fetchContacts, addContact, deleteContact];
export const thunksByType = type => arrThunks.map(el => el[type]);
export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
export const handleFulfilledFetch = (state, { payload }) => {
  state.items = payload;
};
export const handleFulfilledAdd = (state, { payload }) => {
  state.items = [payload, ...state.items];
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
