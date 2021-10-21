import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
    immutableCheck: false,
  }).concat(middleware),
});