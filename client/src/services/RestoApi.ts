import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000/api";

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
    getAllResto: builder.query<any, number>({
      query: () => "/resto/getAll",
      providesTags: ["resto"]
    }),
    getRestoById: builder.query<any, string>({
      query: (restoId: string) => createRequest(`/resto/getById=${restoId}`)
    }),
    addResto: builder.mutation<any, any>({
      query: (body) => createRequest("/resto/addResto", "POST", body),
      invalidatesTags: ["resto"]
    }),
    deleteResto: builder.mutation<any, any>({
      query: (restoId) => ({
        url: `resto/deleteResto/${restoId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["resto"]
    })
  })
});

export const {
  useGetAllRestoQuery,
  useLazyGetRestoByIdQuery,
  useAddRestoMutation,
  useDeleteRestoMutation
} = restoApi;
