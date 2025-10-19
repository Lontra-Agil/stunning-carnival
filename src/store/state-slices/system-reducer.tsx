import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  lang: any;
  locales: { [key: string]: string };
} = {
  lang: "pt-BR",
  locales: {},
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystemLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setLocales: (state, action) => {
      state.locales = action.payload;
    },
  },
});

export const { setSystemLanguage, setLocales } = systemSlice.actions;
export const systemReducer = systemSlice.reducer;
