import { SUB_URLS } from "utils/constants";
import { baseApi } from "./BaseApi";

const createRequest = (url: string, method = "GET", body = {}) => ({
  url,
  method,
  body
});

export const restoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllResto: builder.query<any, number>({
      query: () => SUB_URLS.GET_ALL_RESTO,
      providesTags: ["resto"]
    }),
    getRestoById: builder.query<any, string>({
      query: (restoId: string) =>
        createRequest(`${SUB_URLS.GET_RESTO_BY_ID}${restoId}`)
    }),
    addResto: builder.mutation<any, any>({
      query: (body) => createRequest(SUB_URLS.ADD_NEW_RESTO, "POST", body),
      invalidatesTags: ["resto"]
    }),
    deleteResto: builder.mutation<any, any>({
      query: (restoId) => ({
        url: `${SUB_URLS.DELETE_RESTO}${restoId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["resto"]
    }),
    search: builder.mutation<any, any>({
      query: (body) => createRequest(SUB_URLS.SEARCH_RESTO, "POST", body)
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
