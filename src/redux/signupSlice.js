import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  user_id: 0,
  password: "",
};

export const signupSlice = createSlice({
  name: "signupSlice",
  initialState,
  reducers: {
    initSignUp: (state) => {
      state.user_id = initialState.user_id;
      state.password = initialState.password;
    },
    setSignUp: (state, action) => {
      state.user_id = action.payload.user_id;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initSignUp, setSignUp } = signupSlice.actions;

export default signupSlice.reducer;
