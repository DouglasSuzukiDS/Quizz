import z from "zod";

export const userAnswersSchema = z.object({
   id: z.string(),
   userAnswers: z.object({
      user: z.object({
         name: z.string(),
         email: z.email()
      }),
      answers: z.object({
         experiencia: z.string(),
         entrega: z.string(),
         habilidades: z.string(),
         pressao: z.string(),
         disponibilidade: z.string(),
         prazos: z.string(),
         valores: z.string(),
         colaboracao: z.string(),
         adaptacao: z.string(),
         comunicacao: z.string()
      }),
      score: z.number(),
      classificacao: z.enum(['Fit Altíssimo', 'Fit Aprovado', 'Fit Questionável', 'Fit Fora do Perfil']),
      createdAt: z.date()
   }),
   score: z.number(),
   classificacao: z.enum(['Fit Altíssimo', 'Fit Aprovado', 'Fit Questionável', 'Fit Fora do Perfil']),
   createdAt: z.date()
})