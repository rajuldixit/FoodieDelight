import { baseApi } from "./BaseApi";

const createRequest = (url: string, method = "GET", body = {}) => ({
  url,
  method,
  body
});

export const restoApi = baseApi.injectEndpoints({
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
    }),
    search: builder.mutation<any, any>({
      query: (body) => createRequest("/resto/search", "POST", body)
    })
  })
});

export const {
  useGetAllRestoQuery,
  useLazyGetRestoByIdQuery,
  useAddRestoMutation,
  useDeleteRestoMutation,
  useSearchMutation
} = restoApi;
