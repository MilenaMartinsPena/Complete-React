// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import postsReducer from '../features/posts/PostsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
  // middleware and devTools are configured automatically
});

export default store;
