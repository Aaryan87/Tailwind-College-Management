import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('staff')) || [];

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaff: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('staff', JSON.stringify(state));
    },
    removeStaff: (state, action) => {
      const newState = state.filter(staff => staff.id !== action.payload);
      localStorage.setItem('staff', JSON.stringify(newState));
      return newState;
    },
    updateStaff: (state, action) => {
      const index = state.findIndex(staff => staff.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem('staff', JSON.stringify(state));
      }
    }
  }
});

export const { addStaff, removeStaff, updateStaff } = staffSlice.actions;

export default staffSlice.reducer;
