import { createSlice } from "@reduxjs/toolkit";
// import { PURGE } from 'redux-persist';

const initialState = {
  map_id: 1,
  title: "",
  content: "",
  user_id: 1,
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
      state.place = initialState.place;
      state.hashtag = initialState.hashtag;
    },
    setMapId: (state, action) => {
      state.map_id = action.payload.map_id;
    },
    setTitleContent: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
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
  // extraReducers: (builder) => {
  //   builder.addCase(PURGE, () => initialState);
  // },
});

export const { initRecommend, setMapId, setTitleContent, addPlace, deletePlace, addKeyword, deleteKeyword } =
  recommendSlice.actions;

export default recommendSlice.reducer;
