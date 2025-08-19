import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import { filterReducer } from './filters/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root-auth',
  version: 1,
  storage,
};

// const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    campers: persistReducer(persistConfig, campersReducer),
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
