import z from "zod";

export const TestAnswerSchema = z.object({
   id: z.string(),
   nome: z.string(),
   email: z.email(),
   perguntas: z.object({
      experiencia: z.string(),
      entrega: z.string(),
      habilidade: z.string(),

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
})