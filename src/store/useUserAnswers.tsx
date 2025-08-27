import { create } from "zustand"
import { useUser } from "./useUser"
import { useAnswers } from "./useAnswers"
import { UserAnswers } from "@/types/user-answers"

type UserAnswersState = UserAnswers & {
   setUserAnswers: (userAnswers: UserAnswers) => void
}

export const useUserAnswers = create<UserAnswersState>((set, get) => ({
   user: {
      name: '',
      email: '',
   },
   answers: {
      experience: '',
      deliverables: '',
      skills: '',

      availability: '',
      deadlines: '',
      pressure: '',

      values: '',
      collaboration: '',
      adaptation: '',
      communication: ''
   },
   setUserAnswers: (userAnswers: UserAnswers) => set({ ...userAnswers }),
   score: 0,
   classification: 'Fit Fora do Perfil',
   createdAt: new Date()
}))