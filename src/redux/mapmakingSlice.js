import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  location: "",
  hashtag: [],
  name: "",
  img: null,
};

export const mapmakingSlice = createSlice({
  name: "mapmakingSlice",
  initialState,
  reducers: {
    initMapmaking: (state) => {
      state.location = initialState.location;
      state.hashtag = initialState.hashtag;
      state.name = initialState.name;
      state.img = initialState.img;
      state.imgURL = initialState.imgURL;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    addTheme: (state, action) => {
      const newTheme = action.payload;
      if (!state.hashtag.includes(newTheme)) {
        state.hashtag.push(newTheme);
      }
    },
    deleteTheme: (state, action) => {
      const themeToDelete = action.payload;
      state.hashtag = state.hashtag.filter((theme) => theme !== themeToDelete);
    },
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setImage: (state, action) => {
      state.img = action.payload.img;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initMapmaking, setLocation, addTheme, deleteTheme, setName, setImage } = mapmakingSlice.actions;

export default mapmakingSlice.reducer;
