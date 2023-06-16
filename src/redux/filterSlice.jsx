import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filteredContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;
export default filterSlice.reducer;
