export type TestAnswer = {
   id: number,
   nome: string,
   email: string,
   perguntas: {
      experiencia: string
      entrega: string
      habilidade: string

      disponibilidade: string
      prazos: string
      pressao: string

      valores: string
      colaboracao: string
      adaptacao: string
      comunicacao: string
   },
   score: number,
   classificacao: 'Fit Altíssimo' | 'Fit Aprovado' | 'Fit Questionável' | 'Fit Fora do Perfil'
   createdAt: Date
}
