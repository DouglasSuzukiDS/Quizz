'use client'

import { create } from "zustand"
import { useUser } from "./useUser"
import { useAnswers } from "./useAnswers"
import { UserAnswers } from "@/types/user-answers"

type UserAnswersState = UserAnswers & {
   setUserAnswers: (userAnswers: UserAnswers) => void
}

const { name, email } = useUser()
const { answers } = useAnswers()

export const useUserAnswers = create<UserAnswersState>((set, get) => ({
   user: {
      name,
      email,
   },
   answers,
   setUserAnswers: (userAnswers: UserAnswers) => set({ ...userAnswers }),
   score: 0,
   createdAt: new Date()
}))