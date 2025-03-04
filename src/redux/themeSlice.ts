import { createSlice } from '@reduxjs/toolkit';

const getInitialDarkMode = (): boolean => {
  const savedDarkMode = localStorage.getItem('darkMode');
  return savedDarkMode ? JSON.parse(savedDarkMode) : false;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: getInitialDarkMode(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;