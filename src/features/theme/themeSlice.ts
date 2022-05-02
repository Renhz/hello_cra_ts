import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  colorMode: 'light' | 'dark';
}

const initialState: ThemeState = {
  colorMode: localStorage.getItem('colorMode') === 'light' ? 'light' : 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchColorMode: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { switchColorMode } = themeSlice.actions;
export default themeSlice.reducer;
