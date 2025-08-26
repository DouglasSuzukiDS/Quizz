import { TestAnswer } from "@/types/test-answer";
import { create } from "zustand";

type Answer = {
   answer: TestAnswer
   setAnswers: (answer: TestAnswer) => void
};

export const useAnswers = create<Answer>((set) => ({
   answer: {
      id: 0,
      nome: "",
      email: "",
      perguntas: {
         experiencia: "",
         entrega: "",
         habilidade: "",

         disponibilidade: "",
         prazos: "",
         pressao: "",

         valores: "",
         colaboracao: "",
         adaptacao: "",
         comunicacao: ""
      },
      score: 0,
      classificacao: 'Fit Altíssimo',
      createdAt: new Date(),
   },

   setAnswers: (answer) => set({ answer }),
}));