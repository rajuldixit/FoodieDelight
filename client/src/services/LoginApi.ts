import { baseApi } from "./BaseApi";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<any, any>({
      query: (body) => ({ url: "/user/signin", method: "POST", body })
    })
  })
});
export const { useSigninMutation } = loginApi;
