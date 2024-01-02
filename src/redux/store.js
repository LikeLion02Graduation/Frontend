import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

import recommendReducer from "./recommendSlice";
import mapmakingReducer from "./mapmakingSlice";
import signupReducer from "./signupSlice";

const rootReducer = combineReducers({
  recommend: recommendReducer,
  mapmaking: mapmakingReducer,
  signup: signupReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
