import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  map_id: 0,
  title: "",
  content: "",
  user_id: 0,
  place: [],
  hashtag: [],
};

export const recommendSlice = createSlice({
  name: "RecommendSlice",
  initialState,
  reducers: {
    initRecommend: (state) => {
      state.map_id = initialState.map_id;
      state.title = initialState.title;
      state.content = initialState.content;
      state.user_id = initialState.user_id;
      state.place = initialState.place;
      state.hashtag = initialState.hashtag;
    },
    setRecomInfo: (state, action) => {
      state.map_id = action.payload.map_id;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.user_id = initialState.user_id;
    },
    addPlace: (state, action) => {
      state.place.push(action.payload);
    },
    deletePlace: (state, action) => {
      const indexToDelete = action.payload;
      state.place = state.place.filter((_, index) => index !== indexToDelete);
    },
    addKeyword: (state, action) => {
      const newKeyword = action.payload;
      if (!state.hashtag.includes(newKeyword)) {
        state.hashtag.push(newKeyword);
      }
    },
    deleteKeyword: (state, action) => {
      const keywordToDelete = action.payload;
      state.hashtag = state.hashtag.filter((keyword) => keyword !== keywordToDelete);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initRecommend, setRecomInfo, addPlace, deletePlace, addKeyword, deleteKeyword } = recommendSlice.actions;

export default recommendSlice.reducer;
