import { SUB_URLS } from "utils/constants";
import { baseApi } from "./BaseApi";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<any, any>({
      query: (body) => ({ url: SUB_URLS.SIGN_IN, method: "POST", body })
    })
  })
});
export const { useSigninMutation } = loginApi;
