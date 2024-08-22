import { createSlice } from "@reduxjs/toolkit";

const getState = () => {
  const value = localStorage.getItem("flowbite-theme-mode");
  if (value === "dark" || value === null) return true;
  return false;
};

const initialState = { isDark: getState() };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
