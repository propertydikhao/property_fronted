import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // defaults to localStorage for web
import { combineReducers } from "redux";
import ToastReducer from "./slice/toastSlice";
import UserReducer from "./slice/userSlice";
import LoadingReducer from "./slice/loadingSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage : storageSession,
  blacklist: ["toast"],
};

const rootReducer = combineReducers({
  toast: ToastReducer,
  user: UserReducer,
  loading: LoadingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);