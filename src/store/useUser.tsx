import { create } from "zustand"

type User = {
   name: string
   setName: (name: string) => void

   email: string
   setEmail: (email: string) => void
}

export const useUser = create<User>()((set, get) => ({
   name: '',
   setName: (name: string) => set({ name }),

   email: '',
   setEmail: (email: string) => set({ email }),
}))