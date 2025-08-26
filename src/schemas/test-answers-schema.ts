import z from "zod";

export const TestAnswerSchema = z.object({
   id: z.string(),
   name: z.string(),
   email: z.email(),
   answers: z.object({
      experience: z.string(),
      deliverables: z.string(),
      skills: z.string(),
      pressure: z.string(),
      deadlines: z.string(),
      availability: z.string(),
      communication: z.string(),
      collaboration: z.string(),
      values: z.string(),
      adaptation: z.string()
   }),
   score: z.number(),
   classification: z.enum(['Fit Altíssimo', 'Fit Aprovado', 'Fit Questionável', 'Fit Fora do Perfil']),
   createdAt: z.date()
})