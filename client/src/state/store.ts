import { configureStore } from "@reduxjs/toolkit";
import { restoApi } from "../services/RestoApi";

export default configureStore({
  reducer: {
    [restoApi.reducerPath]: restoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware)
});
