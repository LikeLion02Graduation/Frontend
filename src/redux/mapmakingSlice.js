import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map_id: 1,
  location: [],
  hashtag: [],
  name: "",
  img: "",
  description: "",
};

export const mapmakingSlice = createSlice({
  name: "mapmakingSlice",
  initialState,
  reducers: {
    initMap: (state) => {
      state.map_id = initialState.map_id;
      state.name = initialState.name;
      state.description = initialState.description;
      state.location = initialState.location;
      state.hashtag = initialState.hashtag;
      state.img = initialState.img;
    },
    setMapId: (state, action) => {
      state.map_id = action.payload.map_id;
    },
    setLocation: (state, action) => {
      state.location = action.payload.location;
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
    setDescription: (state, action) => {
      state.description = action.payload.description;
    },
  },
});

export const {
  initMap,
  setMapId,
  setLocation,
  addTheme,
  deleteTheme,
  setName,
  setImage,
  setDescription,
} = mapmakingSlice.actions;

export default mapmakingSlice.reducer;
