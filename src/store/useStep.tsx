import { create } from "zustand";

type Step = {
   step: number
   nextStep: () => number
   prevStep: () => number
}

export const useStep = create<Step>((set, get) => ({
   step: 3,

   nextStep: () => {
      const next = get().step + 1

      set({ step: next })
      console.log(get())


      return next
   },

   prevStep: () => {
      const prev = get().step - 1

      set({ step: prev })
      console.log(get())

      return prev
   },
}))