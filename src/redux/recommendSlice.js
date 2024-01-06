import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  place: [],
  hashtag: [],
};

export const recommendSlice = createSlice({
  name: "RecommendSlice",
  initialState,
  reducers: {
    initRecommend: (state) => {
      state.place = initialState.place;
      state.hashtag = initialState.hashtag;
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

export const { initRecommend, addPlace, deletePlace, addKeyword, deleteKeyword } = recommendSlice.actions;

export default recommendSlice.reducer;
