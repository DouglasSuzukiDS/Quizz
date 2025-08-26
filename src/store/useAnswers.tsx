import { TestAnswer } from "@/types/test-answer";
import { create } from "zustand";

type Answer = {
   answer: TestAnswer
   setAnswers: (answer: TestAnswer) => void
};

export const useAnswers = create<Answer>((set) => ({
   answer: {
      id: 0,
      name: "",
      email: "",
      answers: {
         experience: "",
         deliverables: "",
         skills: "",
         pressure: "",
         deadlines: "",
         availability: "",
         communication: "",
         collaboration: "",
         values: "",
         adaptation: ""
      },
      score: 0,
      classification: 'Fit Altíssimo',
      createdAt: new Date(),
   },

   setAnswers: (answer) => set({ answer }),
}));