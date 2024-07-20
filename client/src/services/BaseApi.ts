import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000/api";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["resto"],
  endpoints: () => ({})
});
