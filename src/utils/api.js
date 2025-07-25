import { ofetch } from "ofetch"

export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  credentials: "include",
  async onRequest({ options }) {
    const accessToken = useCookie("accessToken").value
    if (accessToken)
      options.headers.append("Authorization", `Bearer ${accessToken}`)
  },
})
