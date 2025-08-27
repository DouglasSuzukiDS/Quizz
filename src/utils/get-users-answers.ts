import { api } from "./api"

export const getUsersAnswers = async () => {
   const response = await api.get('/')
   return response.data
}
