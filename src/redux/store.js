import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import recommendReducer from "./recommendSlice";
import mapmakingReducer from "./mapmakingSlice";

const rootReducer = combineReducers({
  recommend: recommendReducer,
  mapmaking: mapmakingReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
