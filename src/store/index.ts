import { configureStore } from "@reduxjs/toolkit";
import trips from "./trips/tripsSlice";
import theme from "./theme/themeSlice";
import categories from "./categories/categoriesSlice";
import auth from "./auth/authSlice";

const store = configureStore({
  reducer: { trips, theme, categories, auth },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
