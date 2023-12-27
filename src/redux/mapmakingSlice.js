import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map_id: 1,
  place: [],
  hashtag: [],
  name: "",
  img: "",
  content: "",
  user_id: 1,
};

export const mapmakingSlice = createSlice({
  name: "mapmakingSlice",
  initialState,
  reducers: {
    initMap: (state) => {
      state.map_id = initialState.map_id;
      state.name = initialState.name;
      state.content = initialState.content;
      state.place = initialState.place;
      state.hashtag = initialState.hashtag;
      state.img = initialState.img;
    },
    setMapId: (state, action) => {
      state.map_id = action.payload.map_id;
    },
    setPlace: (state, action) => {
      state.place = action.payload.place;
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
    setContent: (state, action) => {
      state.content = action.payload.content;
    },
  },
});

export const {
  initMap,
  setMapId,
  setPlace,
  addTheme,
  deleteTheme,
  setName,
  setImage,
  setContent,
} = mapmakingSlice.actions;

export default mapmakingSlice.reducer;
