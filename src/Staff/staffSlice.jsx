import { createSlice } from '@reduxjs/toolkit';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('staff');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
    return [];
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('staff', serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const staffSlice = createSlice({
  name: 'staff',
  initialState: loadState(),
  reducers: {
    addStaff: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteStaff: (state, action) => {
      const newState = state.filter(staff => staff.id !== action.payload);
      saveState(newState);
      return newState;
    },
    updateStaff: (state, action) => {
      const index = state.findIndex(staff => staff.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveState(state);
      }
    }
  }
});

export const { addStaff, deleteStaff, updateStaff } = staffSlice.actions;

export default staffSlice.reducer;
