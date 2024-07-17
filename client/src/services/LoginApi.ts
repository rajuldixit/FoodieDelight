import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000/api";
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    signin: builder.mutation<any, any>({
      query: (body) => ({ url: "/user/signin", method: "POST", body })
    })
  })
});
export const { useSigninMutation } = loginApi;
