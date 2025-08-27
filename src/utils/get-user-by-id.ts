import { api } from "./api"

export const GetUserById = async (id: string) => {
   const res = await api.get(`/${id}`)

   return res.data
}
