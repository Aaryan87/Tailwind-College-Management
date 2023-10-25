import { createSlice } from '@reduxjs/toolkit';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('students');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
    return [];
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('students', serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const studentSlice = createSlice({
  name: 'students',
  initialState: loadState(),
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteStudent: (state, action) => {
      const newState = state.filter(student => student.id !== action.payload);
      saveState(newState);
      return newState;
    },
    updateStudent: (state, action) => {
      const index = state.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveState(state);
      }
    }
  }
});

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;

export default studentSlice.reducer;
