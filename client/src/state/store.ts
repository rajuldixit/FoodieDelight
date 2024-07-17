import { configureStore } from "@reduxjs/toolkit";
import { restoApi } from "services/RestoApi";
import { loginApi } from "services/LoginApi";

export default configureStore({
  reducer: {
    [restoApi.reducerPath]: restoApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(restoApi.middleware)
      .concat(loginApi.middleware)
});
