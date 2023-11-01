import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import imageSlice from "./slice/imageSlice";

// Configuration object for persisting Redux store
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Creating a persisted reducer using the imageSlice reducer
const persistedReducer = persistReducer(persistConfig, imageSlice);

// Creating the Redux store
export const store = configureStore({
  reducer: persistedReducer,

  // Middleware configuration to manage redux-persist actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Creating a persistent store using the configured Redux store
export const persistor = persistStore(store);

// Defining type definitions for Redux store and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
