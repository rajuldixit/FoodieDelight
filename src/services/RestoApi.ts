import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

const createRequest = (url: string, method = "GET", body = {}) => ({
  url,
  method,
  body
});

export const restoApi = createApi({
  reducerPath: "restoApi",
  tagTypes: ["resto"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllResto: builder.query<any, null>({
      query: () => createRequest("api/resto/getAll"),
      providesTags: ["resto"]
    }),
    getRestoById: builder.query<any, string>({
      query: (restoId: string) => createRequest(`/api/resto/getById=${restoId}`)
    }),
    addResto: builder.mutation<any, any>({
      query: (body) => createRequest("/api/resto/addNew", "POST", body),
      invalidatesTags: ["resto"]
    })
  })
});

export const {
  useGetAllRestoQuery,
  useLazyGetRestoByIdQuery,
  useAddRestoMutation
} = restoApi;
